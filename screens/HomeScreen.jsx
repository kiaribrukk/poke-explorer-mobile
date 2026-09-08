import { useEffect, useState } from "react";

import {
  View,
  Text,
  FlatList,
  StyleSheet,
} from "react-native";

import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import ItemCard from "../components/ItemCard";

import { getPokemon } from "../services/api";

function HomeScreen({ navigation }) {
  const [pokemon, setPokemon] = useState([]);
  const [search, setSearch] = useState("");
  const [favorites, setFavorites] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const loadPokemon = async () => {
      try {
        setLoading(true);

        const data = await getPokemon();

        setPokemon(data);
      } catch (error) {
        console.error(error);
        setError(
          "No fue posible obtener la información."
        );
      } finally {
        setLoading(false);
      }
    };

    loadPokemon();
  }, []);

  const handleFavorite = (pokemon) => {
    const alreadyFavorite = favorites.some(
      (favorite) => favorite.id === pokemon.id
    );

    if (alreadyFavorite) {
      setFavorites(
        favorites.filter(
          (favorite) => favorite.id !== pokemon.id
        )
      );
    } else {
      setFavorites([
        ...favorites,
        pokemon,
      ]);
    }
  };

  const filteredPokemon = pokemon.filter((item) =>
    item.name
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  if (loading) {
    return (
      <View style={styles.center}>
        <Text style={styles.message}>
          Cargando información...
        </Text>
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.center}>
        <Text style={styles.error}>
          {error}
        </Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Header />

      <SearchBar
        search={search}
        setSearch={setSearch}
      />

      <View style={styles.navigation}>
        <Text
          style={styles.link}
          onPress={() =>
            navigation.navigate("Favorites", {
              favorites,
              setFavorites,
            })
          }
        >
          ❤️ Ver favoritos
        </Text>
      </View>

      {filteredPokemon.length === 0 ? (
        <Text style={styles.message}>
          No encontramos resultados.
        </Text>
      ) : (
        <FlatList
          data={filteredPokemon}
          keyExtractor={(item) =>
            item.id.toString()
          }
          renderItem={({ item }) => {
            const isFavorite = favorites.some(
              (favorite) =>
                favorite.id === item.id
            );

            return (
              <ItemCard
                pokemon={item}
                isFavorite={isFavorite}
                onFavorite={handleFavorite}
              />
            );
          }}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f2f4f8",
  },

  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },

  message: {
    textAlign: "center",
    fontSize: 18,
    margin: 20,
  },

  error: {
    color: "#d00000",
    fontSize: 17,
    textAlign: "center",
  },

  navigation: {
    alignItems: "center",
    marginBottom: 10,
  },

  link: {
    color: "#3b4cca",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default HomeScreen;
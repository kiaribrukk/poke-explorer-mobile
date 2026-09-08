import {
  View,
  Text,
  FlatList,
  StyleSheet,
} from "react-native";

import ItemCard from "../components/ItemCard";

function FavoritesScreen({ route }) {
  const {
    favorites,
    setFavorites,
  } = route.params;

  const handleRemove = (pokemon) => {
    const nuevosFavoritos =
      favorites.filter(
        (favorite) =>
          favorite.id !== pokemon.id
      );

    setFavorites(nuevosFavoritos);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        ❤️ Mis favoritos
      </Text>

      {favorites.length === 0 ? (
        <Text style={styles.message}>
          Todavía no tenés Pokémon favoritos.
        </Text>
      ) : (
        <FlatList
          data={favorites}
          keyExtractor={(item) =>
            item.id.toString()
          }
          renderItem={({ item }) => (
            <ItemCard
              pokemon={item}
              isFavorite={true}
              onFavorite={handleRemove}
            />
          )}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f2f4f8",
    paddingTop: 50,
  },

  title: {
    textAlign: "center",
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 20,
  },

  message: {
    textAlign: "center",
    fontSize: 18,
    marginTop: 40,
  },
});

export default FavoritesScreen;
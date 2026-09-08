import {
  View,
  Text,
  Image,
  Pressable,
  StyleSheet,
} from "react-native";

function ItemCard({
  pokemon,
  isFavorite,
  onFavorite,
}) {
  const {
    name,
    image,
    types,
    height,
    weight,
  } = pokemon;

  return (
    <View style={styles.card}>
      <Image
        source={{ uri: image }}
        style={styles.image}
      />

      <Text style={styles.name}>
        {name.toUpperCase()}
      </Text>

      <Text>
        Tipo: {types.join(", ")}
      </Text>

      <Text>
        Altura: {height / 10} m
      </Text>

      <Text>
        Peso: {weight / 10} kg
      </Text>

      <Pressable
        style={styles.button}
        onPress={() => onFavorite(pokemon)}
      >
        <Text style={styles.buttonText}>
          {isFavorite
            ? "Quitar de favoritos"
            : "Agregar a favoritos"}
        </Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    marginHorizontal: 20,
    marginVertical: 8,
    padding: 20,
    borderRadius: 15,
    alignItems: "center",
    elevation: 3,
  },

  image: {
    width: 130,
    height: 130,
  },

  name: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },

  button: {
    marginTop: 15,
    backgroundColor: "#3b4cca",
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 8,
  },

  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});

export default ItemCard;
import { View, Text, StyleSheet } from "react-native";

function Header() {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>
        ⚡ PokeExplorer
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    padding: 20,
    backgroundColor: "#e3350d",
    alignItems: "center",
  },

  title: {
    color: "#fff",
    fontSize: 25,
    fontWeight: "bold",
  },
});

export default Header;
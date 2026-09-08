import {
  NavigationContainer,
} from "@react-navigation/native";

import {
  createNativeStackNavigator,
} from "@react-navigation/native-stack";

import HomeScreen from "./screens/HomeScreen";
import FavoritesScreen from "./screens/FavoritesScreen";

const Stack =
  createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: "PokeExplorer",
          }}
        />

        <Stack.Screen
          name="Favorites"
          component={FavoritesScreen}
          options={{
            title: "Favoritos",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
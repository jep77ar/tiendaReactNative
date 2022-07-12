import { createStackNavigator } from "@react-navigation/stack";

import { COLORS } from "../../../../constants/colors";
import CategoriesScreen from "../../../screens/CategoriesScreen";
import ProductDetailScreen from "../../../screens/ProductDetailScreen";
import CategoriesProductScreen from "../../../screens/CategoriesProductScreen";
import { logout } from "../../../app/services/authApi";
import { Text, TouchableOpacity } from "react-native";

const Stack = createStackNavigator();

const handleSignOut = () => {
  console.log("haciendo logout");
  logout();
};

export default () => (
  <Stack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: COLORS.primary,
      },
      headerTintColor: COLORS.secondary,
      headerTitleStyle: {
        fontWeight: "bold",
      },
      headerRight: (props) => {
        return (
          <TouchableOpacity onPress={handleSignOut}>
            <Text>Log out</Text>
          </TouchableOpacity>
        );
      },
    }}
  >
    <Stack.Screen
      name="Home"
      component={CategoriesScreen}
      options={{ title: "La Panadería" }}
    />
    <Stack.Screen
      name="Products"
      component={CategoriesProductScreen}
      options={({ route }) => ({ title: route.params.name })}
    />
    <Stack.Screen
      name="Details"
      component={ProductDetailScreen}
      options={({ route }) => ({ title: route.params.name })}
    />
  </Stack.Navigator>
);

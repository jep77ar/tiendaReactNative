import { createStackNavigator } from "@react-navigation/stack";
import { TouchableOpacity } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

import { logout } from "../../../app/services/authApi";

import { COLORS } from "../../../../constants/colors";
import CartScreen from "../../../screens/CartScreen";

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
            <Ionicons name="log-out-outline" size={30} color="#aac0af" />
          </TouchableOpacity>
        );
      },
    }}
  >
    <Stack.Screen
      name="Cart"
      component={CartScreen}
      options={{ title: "Carrito" }}
    />
  </Stack.Navigator>
);

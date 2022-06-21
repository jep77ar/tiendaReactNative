import { createStackNavigator } from "@react-navigation/stack";

import { COLORS } from "../../../constants/colors";
import CartScreen from "../../screens/CartScreen";

const Stack = createStackNavigator();

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
    }}
  >
    <Stack.Screen
      name="Cart"
      component={CartScreen}
      options={{ title: "Carrito" }}
    />
  </Stack.Navigator>
);

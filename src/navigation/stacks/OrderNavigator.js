import { createStackNavigator } from "@react-navigation/stack";

import { COLORS } from "../../../constants/colors";
import OrderScreen from "../../screens/OrderScreen";

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
      name="Order"
      component={OrderScreen}
      options={{ title: "Orden" }}
    />
  </Stack.Navigator>
);

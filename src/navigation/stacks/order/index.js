import { createStackNavigator } from "@react-navigation/stack";
import { Text, TouchableOpacity } from "react-native";
import { logout } from "../../../app/services/authApi";

import { COLORS } from "../../../../constants/colors";
import OrderScreen from "../../../screens/OrderScreen";

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
      name="Order"
      component={OrderScreen}
      options={{ title: "Orden" }}
    />
  </Stack.Navigator>
);

import { createStackNavigator } from "@react-navigation/stack";
import AuthScreen from "../../screens/AuthScreen";
import LoginScreen from "../../screens/LoginScreen";

const Stack = createStackNavigator();

const AuthNavigator = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Registro" component={AuthScreen} />
    <Stack.Screen name="Login" component={LoginScreen} />
  </Stack.Navigator>
);

export default AuthNavigator;

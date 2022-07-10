import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";

import CartNavigator from "../stacks/cart";
import ShopNavigator from "../stacks/shop";
import OrderNavigator from "../stacks/order";

const BottomTabs = createBottomTabNavigator();

const TabNavigator = () => (
  <BottomTabs.Navigator
    screenOptions={{
      headerShown: false,
      tabBarShowLabel: false,
    }}
  >
    <BottomTabs.Screen
      name="ShopTab"
      component={ShopNavigator}
      options={{
        tabBarIcon: () => <Ionicons name="md-home" size={30} color="#000" />,
      }}
    />
    <BottomTabs.Screen
      name="CartTab"
      component={CartNavigator}
      options={{
        tabBarIcon: () => <Ionicons name="md-cart" size={30} color="#000" />,
      }}
    />
    <BottomTabs.Screen
      name="OrderTab"
      component={OrderNavigator}
      options={{
        tabBarIcon: () => (
          <Ionicons name="create-sharp" size={30} color="#000" />
        ),
      }}
    />
  </BottomTabs.Navigator>
);

export default TabNavigator;

import { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import ShopNavigator from "./stacks/shop";
import AuthNavigator from "./user/AuthNavigator";
import TabNavigator from "./tabs";
import { auth } from "../app/firebase";
import { onAuthStateChanged } from "firebase/auth";

const MainNavigator = () => {
  const [isLogged, setIsLogged] = useState(false);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      console.log("En MainNavigator", user, auth);
      if (user) {
        setIsLogged(true);
      } else {
        setIsLogged(false);
      }
    });
  }, []);

  return (
    <NavigationContainer>
      {isLogged ? <TabNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
};

export default MainNavigator;

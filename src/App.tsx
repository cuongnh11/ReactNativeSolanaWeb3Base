import React from "react";
import {NavigationContainer} from "@react-navigation/native";
import {RootNavigator} from "./ui/navigators/root-navigator";
import "@/i18n";

export const App = () => {
  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  );
};

export default App;

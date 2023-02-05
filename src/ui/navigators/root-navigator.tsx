import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {RootStackParamList} from "../../types/root-stacks";
import {CreateWalletScreen, WelcomeScreens} from "../screens";

const RootStack = createNativeStackNavigator<RootStackParamList>();

export const RootNavigator = () => {
  return (
    <RootStack.Navigator initialRouteName="CreateWallet">
      <RootStack.Screen name="Welcome" component={WelcomeScreens} />
      <RootStack.Screen
        options={{headerShown: false}}
        name="CreateWallet"
        component={CreateWalletScreen}
      />
    </RootStack.Navigator>
  );
};

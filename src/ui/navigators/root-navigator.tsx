import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {CreateWalletScreen, WelcomeScreens} from "@/ui/screens";
import {RootStackParamList} from "@/types/root-stacks";

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

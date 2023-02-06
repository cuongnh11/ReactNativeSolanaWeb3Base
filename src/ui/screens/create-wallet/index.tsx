import React from "react";
import {Text, View, Button} from "react-native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {useNavigation} from "@react-navigation/native";
import {CreateWalletStackParamList} from "@/types/root-stacks";

const Stack = createNativeStackNavigator<CreateWalletStackParamList>();

const InputPasswordScreen = () => {
  const navigation = useNavigation();

  return (
    <View>
      <Text>Input password</Text>
      <Button
        title={"Input passphrase"}
        onPress={() =>
          navigation.navigate("CreateWallet", {screen: "InputPassphrase"})
        }
      />
    </View>
  );
};

const InputPassphrase = () => {
  const navigation = useNavigation();

  return (
    <View>
      <Text>Input passphrase</Text>
      <Button title="Welcome" onPress={() => navigation.navigate("Welcome")} />
    </View>
  );
};

export const CreateWalletScreen = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="InputPassword" component={InputPasswordScreen} />
      <Stack.Screen name="InputPassphrase" component={InputPassphrase} />
    </Stack.Navigator>
  );
};

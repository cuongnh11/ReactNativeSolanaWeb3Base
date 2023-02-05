import {NavigatorScreenParams} from "@react-navigation/native";

export type RootStackParamList = {
  Welcome: undefined;
  CreateWallet: NavigatorScreenParams<CreateWalletStackParamList>;
};

export type CreateWalletStackParamList = {
  InputPassword: undefined;
  InputPassphrase: undefined;
};

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

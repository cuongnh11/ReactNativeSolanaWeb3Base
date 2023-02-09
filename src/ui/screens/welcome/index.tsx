import React from "react";
import {Text, View} from "react-native";
import {useTranslation} from "react-i18next";

export const WelcomeScreens = () => {
  const {t} = useTranslation();

  return (
    <View>
      <Text>{t("demon")}</Text>
    </View>
  );
};

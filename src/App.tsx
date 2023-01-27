import React, {useRef} from "react";
import {SafeAreaView, ScrollView, StatusBar, Text, View} from "react-native";

export const App = () => {
  const scrollViewRef = useRef<null | ScrollView>(null);

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          ref={ref => (scrollViewRef.current = ref)}
          contentInsetAdjustmentBehavior="automatic">
          <View>
            <Text>Hello World</Text>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default App;

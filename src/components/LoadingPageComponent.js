import React from 'react';
import { ActivityIndicator, Text, View, Image } from 'react-native';

export const LoadingPageComponent = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Image source={require("../assets/undraw_fast_loading_0lbh.png")}
             style={{height: 300, width: 300}}
      />
      <Text>
        Loading data....
      </Text>
      <ActivityIndicator size="large" color="#0000ff"/>
    </View>
  );
}


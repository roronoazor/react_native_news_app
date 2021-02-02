import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from "react-redux";
import  store  from "./store.js";
import  { BottomTab }  from "./src/navigation/rootBottomBarNavigation";
import  { DrawerNav }  from "./src/navigation/rootDrawerNavigation";
import { Root } from "native-base";
import * as Font from 'expo-font';



export default function App() {


  useEffect(() => {
  (async () => await Font.loadAsync({
    Roboto: require('native-base/Fonts/Roboto.ttf'),
    Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
  }))();
   }, [])

  return (
    
    <NavigationContainer> 
      <Provider store={store}>
        <Root>
          <DrawerNav />
        </Root>
      </Provider> 
  </NavigationContainer>
  
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

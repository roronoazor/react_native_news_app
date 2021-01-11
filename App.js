import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from "react-redux";
import  store  from "./store.js";
import  { BottomTab }  from "./src/navigation/rootBottomBarNavigation";
import  { DrawerNav }  from "./src/navigation/rootDrawerNavigation";
import { Root } from "native-base";


export default function App() {
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

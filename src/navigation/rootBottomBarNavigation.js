import * as React from 'react';
import { Button, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from '@expo/vector-icons/Ionicons';
import  HomePageComponent  from "../components/HomeComponent";
import  NewsDetailComponent   from "../components/NewsDetailComponent";
import  EntertainmentDetailComponent   from "../components/EntertainmentDetailComponent";
import EntertainmentPageComponent from '../components/EntertainmentPageComponent';


function DetailsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Details!</Text>
    </View>
  );
}

function openDrawerButton(navigation){
    return (
        <Button 
        title="please press this button"
        onPress={() => navigation.openDrawer()} />
    )
}


function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home screen</Text>
      <Button
        title="opendrawer"
        onPress={() => navigation.openDrawer()}
      />
    </View>
  );
}

function SettingsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
}

const HomeStack = createStackNavigator();

function HomeStackScreen(props) {
  return (
    <HomeStack.Navigator
       screenOptions={{
         headerStyle: {
          backgroundColor: "#00BFFF"
         },
         headerTintColor: "#fff"
        }}
       // screenOptions={{
      //      headerTitle: (props) => <openDrawerButton {...props} />
     //   }}
    >
      <HomeStack.Screen name="Home" component={HomePageComponent}/>
      <HomeStack.Screen name="news-detail" component={NewsDetailComponent} />
    </HomeStack.Navigator>
  );
}

const EntertainmentStack = createStackNavigator();

function EntertainmentStackScreen() {
  return (
    <EntertainmentStack.Navigator>
      <EntertainmentStack.Screen name="entertainment" component={EntertainmentPageComponent} />
      <EntertainmentStack.Screen name="entertainment-detail" component={EntertainmentDetailComponent} />
    </EntertainmentStack.Navigator>
  );
}

const Tab = createBottomTabNavigator();

// this function handles my bottom bar root navigation
export function BottomTab(){  
    // this defines my root bottom navigator
    return ( 
        <Tab.Navigator 
        screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
  
              if (route.name === "general") {
                iconName = focused
                  ? 'ios-newspaper'
                  : 'ios-newspaper-outline';
              } else if (route.name === 'entertainment') {
                iconName = focused ? 'play-circle' : 'play-circle-outline';
              } else if (route.name === 'sports') {
                iconName = focused ? 'football' : 'football-outline';
              } else if (route.name === 'business') {
                 iconName = focused ? 'business' : 'business-outline';
              } else{
                iconName = focused ? 'home-outline' : 'home-outline'; 
              }
  
              // You can return any component that you like here!
              return <Ionicons name={iconName} size={size} color={color} />;
            },
          })}
          tabBarOptions={{
            activeTintColor: 'tomato',
            inactiveTintColor: 'gray',
          }}
        >
          <Tab.Screen name="general" component={HomeStackScreen} />
          <Tab.Screen name="entertainment" component={EntertainmentStackScreen}/>
          <Tab.Screen name="sports" component={HomeStackScreen} />
          <Tab.Screen name="business" component={HomeStackScreen} /> 
        </Tab.Navigator>
  );
}


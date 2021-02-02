import * as React from 'react';
import { Button, SafeAreaView, Text, View, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from '@expo/vector-icons/Ionicons';
import  HomePageComponent  from "../components/HomeComponent";
import  NewsDetailComponent   from "../components/NewsDetailComponent";
import  EntertainmentDetailComponent   from "../components/EntertainmentDetailComponent";
import EntertainmentPageComponent from '../components/EntertainmentPageComponent';
import GenericPageComponent from '../components/GenericNewsComponent';
import GenericDetailComponent from '../components/GenericDetailComponent';


// implements my custom header function
function CustomHeader({navigation}){
  return (
    <View style={{backgroundColor:"#fff", marginTop:5, marginBottom:5, padding:10, flexDirection:"row", justifyContent:"space-between"}}>
      <TouchableOpacity onPress={()=>navigation.openDrawer()}>
        <Ionicons name="menu" size={30}/>
      </TouchableOpacity>
      <Text>Hello world</Text>
    </View>
  )
}

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
          backgroundColor: "#FFF"  // use this to style the header backgorund color
         },
         headerTintColor: "#fff"
        }}
       // screenOptions={{
      //      headerTitle: (props) => <openDrawerButton {...props} />
     //   }}
    >
      <HomeStack.Screen name="Home" 
      component={HomePageComponent}
      options={{ header: ({ scene, previous, navigation }) => <CustomHeader navigation={navigation} /> }}
      />
      <HomeStack.Screen name="news-detail"
       component={NewsDetailComponent}
       options={{ title: 'reader mode',
                   header: ({ scene, previous, navigation }) => <CustomHeader navigation={navigation} />
       }}
       />

    </HomeStack.Navigator>
  );
}

const EntertainmentStack = createStackNavigator();

function EntertainmentStackScreen() {
  return (
    <EntertainmentStack.Navigator>
      <EntertainmentStack.Screen name="entertainment" component={EntertainmentPageComponent} />
      <EntertainmentStack.Screen name="entertainment-detail"
       component={EntertainmentDetailComponent}
       options={{ title: 'reader mode' }}
       />
    </EntertainmentStack.Navigator>
  );
}


// this handles the sports stack screen
const SportStack = createStackNavigator();

function SportStackScreen() {
  return (
    <SportStack.Navigator>
      <SportStack.Screen name="sports" title={"soft"} component={GenericPageComponent} />
      <SportStack.Screen name="generic-detail" 
      component={GenericDetailComponent}
      options={{ title: 'reader mode' }}
      />
    </SportStack.Navigator>
  );
}

// this handles the business stack screen
const BusinessStack = createStackNavigator();

function BusinessStackScreen() {
  return (
    <BusinessStack.Navigator>
      <BusinessStack.Screen name="business" component={GenericPageComponent} />
      <BusinessStack.Screen name="generic-detail"
       component={GenericDetailComponent}
       options={{ title: 'reader mode' }} />
    </BusinessStack.Navigator>
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
          <Tab.Screen name="sports" component={SportStackScreen} />
          <Tab.Screen name="business" component={BusinessStackScreen} /> 
        </Tab.Navigator>
  );
}


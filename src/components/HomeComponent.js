// this is the entry page of the application
import { getHomePageNews } from "../api/HomeApi"
import { Button, View, Text } from "react-native";
import { connect } from "react-redux";
import store from "../../store";
import React, { Component } from 'react';
import { Image, ScrollView, FlatList, SafeAreaView } from 'react-native';
import { NewsCardComponent } from "../components/NewsCardComponent";
import { Container } from "native-base";
import { uuid } from "uuid";
import { createStackNavigator } from '@react-navigation/stack';


function mapStateToProps(state) {
  const homeNews = state.home.homeNews;
  return { homeNews }
}

// call the api that loads this data
getHomePageNews();


const renderArticle = (data) => {
  let {item} = data;
  return <NewsCardComponent article={item} />
}

const Stack = createStackNavigator();

function HomePageComponent(props) {

  // call this function to get the home page API data
  console.log("props: h", props);
  let homeNews = props.homeNews;
  let loaded = !homeNews.loading;
  let news_list = <View><Text>Noting to see here</Text></View>

  if (loaded) {
    news_list = homeNews.data.articles.map((article, i) => {
      article.key = i ? i : Math.random(); // ensures key uniqueness
      article.navigation = props.navigation;
      console.log("key: ", article.key);
      return article      
    })
  }


  return (
    <Container>
      <Button
        onPress={() => props.navigation.navigate('Notifications')}
        title="batman"
      />
      <SafeAreaView style={{ flex: 1 }}>     
        <FlatList data={news_list}
          renderItem={renderArticle}
          keyExtractor={item => item.key}
          extraData={props}
        />
      </SafeAreaView>
    </Container>
  );
}

export default connect(mapStateToProps)(HomePageComponent)
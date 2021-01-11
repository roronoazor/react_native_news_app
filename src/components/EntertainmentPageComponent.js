// this is the entry page of the application
import { getEntertainmentPageNews } from "../api/HomeApi"
import { Button, View, Text } from "react-native";
import { connect } from "react-redux";
import store from "../../store";
import React, { Component } from 'react';
import { Image, ScrollView, FlatList, SafeAreaView } from 'react-native';
import { EntertainmentCardComponent } from "../components/EntertainmentCardComponent";
import { Container } from "native-base";
import { uuid } from "uuid";
import { createStackNavigator } from '@react-navigation/stack';


function mapStateToProps(state) {
  const entertainmentNews = state.home.entertainmentNews;
  return { entertainmentNews }
}

// call the api that loads this data
getEntertainmentPageNews();


const renderArticle = (data) => {
  let {item} = data;
  return <EntertainmentCardComponent article={item} />
}

const Stack = createStackNavigator();

function EntertainmentPageComponent(props) {

  // call this function to get the home page API data
  console.log("props: h", props);
  console.log("ss: ", store.getState())
  let entertainmentNews = props.entertainmentNews;
  let loaded = !entertainmentNews.loading;
  let news_list = <View><Text>Noting to see here</Text></View>

  if (loaded) {
    news_list = entertainmentNews.data.articles.map((article, i) => {
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

export default connect(mapStateToProps)(EntertainmentPageComponent)
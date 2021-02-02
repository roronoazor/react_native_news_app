// this is the entry page of the application
import { getGenericNews } from "../api/HomeApi"
import { Button, View, Text } from "react-native";
import { connect } from "react-redux";
import store from "../../store";
import React, { Component, useEffect } from 'react';
import { Image, ScrollView, FlatList, SafeAreaView } from 'react-native';
import { NewsCardComponent } from "../components/NewsCardComponent";
import { GenericNewsCardComponent } from "../components/GenericNewsCardComponent";
import { Container } from "native-base";
import { uuid } from "uuid";
import { createStackNavigator } from '@react-navigation/stack';
import { LoadingPageComponent } from "./LoadingPageComponent";

var name_filter = null;
var c = {filter: null}
// i need to pass data to his here
function mapStateToProps(state, props) {
    name_filter = props.route.name;
    c.filter = name_filter;
    console.log("c filter: ", c.filter)
    switch (name_filter){
    case "sports":
        return {sportsNews: state.home.sportsNews};
    case "business":
        return {businessNews: state.home.businessNews};
    default:
        return {homeNews: state.home.entertainmentNews}
  }
}



const renderArticle = (data) => {
  let {item} = data;
  return <GenericNewsCardComponent article={item} />
}

const Stack = createStackNavigator();

function GenericPageComponent(props) {

  // call the api that loads this data
  let news_type = props.route.name;
  useEffect(()=>{getGenericNews(news_type);},[news_type]);
  //getGenericNews(news_type);

  // call this function to get the home page API data
  let genericNews = null;
  if (news_type==="sports"){
    genericNews = props.sportsNews
  }else if(news_type==="business"){
    genericNews = props.businessNews;
  }
  
  
  let loaded = !genericNews.loading;
  let news_list = <View><Text>Noting to see here</Text></View>

  if (loaded) {
    news_list = genericNews.data.articles.map((article, i) => {
      article.key = i ? i : Math.random(); // ensures key uniqueness
      article.navigation = props.navigation;
      return article      
    })
  }

  if (loaded){
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
  }else{
    return(
      <LoadingPageComponent />
    )
  }
}

export default connect(mapStateToProps)(GenericPageComponent)
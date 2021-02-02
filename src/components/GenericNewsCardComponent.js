import React from "react";
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Icon, Left, Body, Right, Button } from 'native-base';
import { Image } from 'react-native';
import { NewsDetailComponent } from "./NewsDetailComponent";
import store  from "../../store";
import { setGenericDetailAction } from "../actions/HomeActionCreators";

function setDetails(payload){
  store.dispatch(setGenericDetailAction(payload))
}


export function GenericNewsCardComponent(props){
    
    let {article} = props;
    let nav = article.navigation;
    

    return (
        <Content>
          <Card>
            <CardItem cardBody>
              <Image source={{uri: article.urlToImage}} style={{height: 200, width: null, flex: 1}}/>
            </CardItem>
            <CardItem button onPress={()=>{setDetails(article); nav.navigate('generic-detail')}}>
              <Left>               
                <Body>
                  <Text>{article.title}</Text>
                  <Text note>{article.description}</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent>
                  <Icon active name="person-circle" />
                  <Text>author: {article.author || "john doe"}</Text>
                </Button>
              </Left>
              <Body>
                <Button transparent>
                  <Icon active name="time" />
                  <Text>published at: {article.publishedAt}</Text>
                </Button>
              </Body>
              <Right>
                <Text>source: {article.source.name || anonymous}</Text>
              </Right>
            </CardItem>
          </Card>
        </Content>
    )
}
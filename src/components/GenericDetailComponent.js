import React from "react";
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Icon, Left, Body, Right, Button } from 'native-base';
import { Image, View, ActivityIndicator } from 'react-native';
import store from "../../store";
import { WebView } from "react-native-webview";


function LoadingIndicatorView() {
  return <ActivityIndicator color='#009b88' size='large' />
}


export default function GenericDetailComponent(props){
    let state = store.getState()
    let {generic_detail} = state.home
    

    return (
      <Container>
        <WebView
          originWhitelist={['*']}
          source={{ uri: generic_detail.url }}  
          renderLoading={LoadingIndicatorView}
          startInLoadingState={true}
        />
      </Container>

    )
}
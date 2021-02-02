import React from 'react';
import { ActivityIndicator, Text, View, Image } from 'react-native';

export const DeveloperComponent = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Image source={require("../assets/developer_cover_photo.jpg")}
             style={{height: 300, width: 300}}
      />
      <Text>
        My name is Odumegwu Ugochukwu Pascal, am a passionate software developer, Data analyst and scientist from Nigeria. am currently working towards my master's degree, i have close to 5 year's experience in the tech industry, am a full-stack developer, my tech stack includes python/django for backend development, java/spring mvc for fintech solutions and react/react-native for front-end and mobile applications. my philosophy in coding is simple is better than complex which is the zen of python, and this principle guides me in writing simple and efficient code, irrespective of the programming language i happen to be working with.
      </Text>
    </View>
  );
}


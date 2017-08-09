/*
* @Author: zuoyan
* @Date:   2017-08-05 15:37:34
* @Last Modified by:   zuoyan
* @Last Modified time: 2017-08-08 22:58:07
*/

'use strict';
//其实这个代码没有实现App.js，export的模式,注意
import React from 'react';
import {
  AppRegistry,
  Text,
  View,
  Button,
} from 'react-native';
//导入stack导航组件
import { StackNavigator } from 'react-navigation';
import PizzaTranslator from './src/containers/PizzaTranslator.js'

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Welcome',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
        <Text>Hello, Chat App!</Text>
        <Button
          onPress={() => navigate('Chat', { user: 'zuoyan' })}
          title="Chat with Lucy"
        />
        <Button
          onPress={() => navigate('PizzaTranslator')}
          title="PizzaTranslator"
        />
      </View>
    );
  }
}

class ChatScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    const {state, setParams} = navigation;
    const isInfo = state.params.mode === 'info';
    const {user} = state.params;
    return {
      title: isInfo ? `${user}'s Contact Info` : `Chat with ${state.params.user}`,
      headerRight: (
        <Button
          title={isInfo ? 'Done' : `${user}'s info`}
          onPress={() => setParams({ mode: isInfo ? 'none' : 'info'})}
        />
      ),
    };
  };
  render() {
    const { params } = this.props.navigation.state;
    return (
      <View>
        <Text>Chat with {params.user}</Text>
      </View>
    );
  }
}


//进行导航的注册
const SimpleApp = StackNavigator({
  Home: { screen: HomeScreen },
  Chat: { screen: ChatScreen },
  PizzaTranslator: {screen: PizzaTranslator},
},{
  navigationOptions:{
    headerBackTitle: null,
  }
});

AppRegistry.registerComponent('SimpleApp', () => SimpleApp);

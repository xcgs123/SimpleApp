/**
 * 处理链接
 */

import React, { Component } from 'react';
import { 
  AppRegistry,
  Text, 
  TextInput, 
  View,
  Linking,
  TouchableHighlight,
  CustomButton,
} from 'react-native';

export default class Link extends Component {
  constructor(props) {
    super(props);
    this.state = {text: ''};
  }

  static navigationOptions = {
    title: 'Linking',
  };

  render() {
    return (
      <Text onPress={()=>Linking.canOpenURL('https://www.baidu.com').then(supported => {
           if (supported) {
               Linking.openURL('https://www.baidu.com');
           } else {
              console.log('无法打开该URI: ');
           }
        })}>点击打开百度页面</Text>
    );
  }
}
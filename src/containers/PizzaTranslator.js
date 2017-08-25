import React, { Component } from 'react';
import { 
  AppRegistry,
  Text, 
  TextInput, 
  View,
  Linking,
  TouchableHighlight,
  CustomButton,
  Animated,
  PanResponder,
  StyleSheet,
   ScrollView,
} from 'react-native';
import ScrollableTabView, {DefaultTabBar,ScrollableTabBar} from 'react-native-scrollable-tab-view'

export default class PizzaTranslator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      fadeAnim: new Animated.Value(0),
      pan: new Animated.ValueXY(),
    };
    this.state.panResponder = PanResponder.create({
       onStartShouldSetPanResponder: () => true,
       onPanResponderMove: Animated.event([null, {
         dx: this.state.pan.x, // x,y are Animated.Value
         dy: this.state.pan.y,
       }]),
       onPanResponderRelease: () => {
         Animated.spring(
           this.state.pan,         // Auto-multiplexed
           {toValue: {x: 0, y: 0}} // Back to zero
         ).start();
       },
     });
  }

  static navigationOptions = {
    title: 'PizzaTranslator',
  };

  componentDidMount(){
    Animated.timing(
      this.state.fadeAnim,
      {toValue: 1},
    ).start();
  }

  render() {
    return (
      <View style={{padding: 10}}>
        <TextInput
          style={{height: 40}}
          placeholder="Type here to translate!"
          onChangeText={(text) => this.setState({text})}
        />
        <Text style={{padding: 10, fontSize: 42}}>
          {this.state.text.split(' ').map((word) => word && '🍕').join(' ')}
        </Text>

        <Animated.View
         {...this.state.panResponder.panHandlers}
         style={this.state.pan.getLayout()}>
         {this.props.children}
         <Text>11111</Text>
       </Animated.View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
  },
  icon: {
    width: 300,
    height: 300,
    alignSelf: 'center',
  },
});
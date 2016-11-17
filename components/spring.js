'use strict';
/* @flow */

import React,{Component} from 'react';
import {View,Animated} from 'react-native';

export default class Spring extends Component {
  constructor(props) {
    super(props);
    this.state = {animationValue:new Animated.Value(0)};
  }
  render() {
    return (
      <Animated.View style={{
        top:this.state.animationValue.interpolate({
          inputRange:[0,1],
          outputRange:[-500,0]
        }),
        width:150,
        height:150,
        backgroundColor:'rgba(255,0,0,1)',
      }}></Animated.View>
    );
  }
  componentDidMount() {
    Animated.spring(this.state.animationValue,{toValue:1,duration:5000}).start();
  }
}

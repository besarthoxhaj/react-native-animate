'use strict';
/* @flow */

import React,{Component} from 'react';
import {View,Animated} from 'react-native';

export default class SimpleInterpolation extends Component {
  constructor(props) {
    super(props);
    this.state = {animationValue:new Animated.Value(0)};
  }
  render() {
    return (
      <Animated.View style={{
        width:150,
        height:150,
        backgroundColor:this.state.animationValue.interpolate({
          inputRange:[0,1],
          outputRange:['rgba(255,0,0,1)','rgba(0,0,255,1)']
        }),
        borderRadius:this.state.animationValue.interpolate({
          inputRange:[0,1],
          outputRange:[0,150]
        }),
        transform:[{rotate:this.state.animationValue.interpolate({
          inputRange:[0,1],
          outputRange:['0deg','360deg']
        })}]
      }}></Animated.View>
    );
  }
  componentDidMount() {
    Animated.timing(this.state.animationValue,{toValue:1,duration:5000}).start();
  }
}

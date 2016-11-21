'use strict';
/* @flow */

import React,{Component} from 'react';
import {View,Animated} from 'react-native';

export default class Shape extends Component {
  constructor(props) {
    super(props);
    this.state = {
      X:new Animated.Value(0),
      Y:new Animated.Value(0),
    };
  }
  render() {
    return (
      <Animated.View style={{
        width:this.state.X.interpolate({inputRange:[0,1],outputRange:[20,250]}),
        height:this.state.Y.interpolate({inputRange:[0,1],outputRange:[20,250]}),
        borderRadius:10,
        backgroundColor:'black',
      }}>
        <Animated.View style={{
          backgroundColor:'black',
          transform:[{rotate:'45deg'}],
          height:this.state.Y.interpolate({inputRange:[0,1],outputRange:[0,40]}),
          width:this.state.X.interpolate({inputRange:[0,1],outputRange:[0,40]}),
          top:this.state.Y.interpolate({inputRange:[0,1],outputRange:[0,220]}),
          alignSelf:'center',
        }}/>
      </Animated.View>
    )
  }
  componentDidMount() {
    this.bounceTo(1);
  }
  bounceTo(XY) {
    Animated.sequence([
      Animated.spring(this.state.X,{toValue:XY}),
      Animated.spring(this.state.Y,{toValue:XY}),
    ]).start(() => {
      this.bounceTo(XY === 0 ? 1 : 0);
    });
  }
}
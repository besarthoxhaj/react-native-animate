'use strict';
/* @flow */

import React,{Component} from 'react';
import {View,Animated} from 'react-native';

export default class Transform extends Component {
  constructor(props) {
    super(props);
    this.state = {XYZ:new Animated.Value(0)};
  }
  render() {
    return (
      <Animated.View style={{
        width:150,
        height:200,
        transform:[
          {perspective:-500},
          // {rotate:this.state.XYZ.interpolate({inputRange:[0,1],outputRange:['0deg','360deg']})},
          // {perspective:this.state.XYZ.interpolate({inputRange:[0,1],outputRange:[200,200]})},
          // {rotateY:this.state.XYZ.interpolate({inputRange:[0,1],outputRange:['0deg','180deg']})},
          {rotateX:this.state.XYZ.interpolate({inputRange:[0,1],outputRange:['-270deg','-360deg']})},
          // {rotateZ:this.state.XYZ.interpolate({inputRange:[0,1],outputRange:['0deg','360deg']})},
        ]
      }}>
        <View style={{
          flex:1,
        }}/>
        <View style={{
          flex:1,
          backgroundColor:'blue'
        }}/>
      </Animated.View>
    )
  }
  componentDidMount() {
    Animated.spring(this.state.XYZ,{toValue:1,friction:2}).start();
  }
}
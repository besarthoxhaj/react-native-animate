'use strict';
/* @flow */

import React,{Component} from 'react';
import {View,Animated} from 'react-native';

export default class Breath extends Component {
  constructor(props) {
    super(props);
    this.state = {XYZ:new Animated.Value(0)};
  }
  render() {
    return (
      <Animated.View style={{
        width:this.state.XYZ.interpolate({inputRange:[0,1],outputRange:[20,250]}),
        height:20,
        borderRadius:10,
        backgroundColor:'black',
      }}/>
    )
  }
  componentDidMount() {
    this.bounceTo(1);
  }
  bounceTo(x) {
    Animated.spring(this.state.XYZ,{
      toValue:x,
    }).start(() => {
      this.bounceTo(x === 0 ? 1 : 0);
    });
  }
}
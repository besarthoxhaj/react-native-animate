'use strict';
/* @flow */

import React,{Component} from 'react';
import {Animated} from 'react-native';

export default class Stamp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      S:new Animated.Value(0),
    };
  }
  render() {
    return (
      <Animated.Text style={{
        color:'black',
        fontSize:50,
        transform:[
          {scale:this.state.S.interpolate({inputRange:[0,1],outputRange:[100,1]})}
        ]
      }}>HELLO!</Animated.Text>
    );
  }
  componentDidMount() {
    Animated.timing(this.state.S,{
      toValue:1,
      timing:1000,
    }).start(() => {
      console.log('DONE!');
    })
  }
}
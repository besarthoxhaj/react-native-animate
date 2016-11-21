'use strict';
/* @flow */

import React,{Component} from 'react';
import {View,Animated} from 'react-native';

import Arrow from './_arrow.js';

export default class ClickMe extends Component {
  constructor(props) {
    super(props);
    this.state = {
      X:new Animated.Value(0),
    };
  }
  render() {
    return (
      <Animated.View style={{
        flex:1,
        flexDirection:'row',
        justifyContent:'space-between',
        width:this.state.X.interpolate({inputRange:[0,1,2],outputRange:[110,150,1000]}),
      }}>
        <Arrow direction={'right'}/>
        {this.props.children}
        <Arrow direction={'left'}/>
      </Animated.View>
    );
  }
  componentDidMount() {
    this.animate(1);
  }
  animate(TO) {
    Animated.timing(this.state.X,{
      toValue:TO,
      duration:800,
    }).start(() => {
      if(this.props.stop === true) {
        this.goAway();
      } else {
        this.animate(TO === 0 ? 1 : 0);
      }
    });
  }
  goAway() {
    Animated.timing(this.state.X,{
      toValue:2,
      duration:1000,
    }).start(() => {
      this.props.done();
    });
  }
}
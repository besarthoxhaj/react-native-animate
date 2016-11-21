'use strict';
/* @flow */

import React,{Component} from 'react';
import {View,Animated,Easing,Dimensions} from 'react-native';
import reactMixin from 'react-mixin';
import TimerMixin from 'react-timer-mixin';

const BALLS = [
  '#FFEBEE',
  '#FFCDD2',
  '#EF9A9A',
  '#E57373',
  // '#EF5350',
  // '#F44336',
  // '#E53935',
  // '#D32F2F',
  // '#C62828',
  // '#B71C1C',
].sort();

class Loading extends Component {
  constructor(props) {
    super(props);
    this.state = BALLS.reduce((acc,elm) => {
      acc[elm] = new Animated.Value(0);
      return acc;
    },{});
  }
  render() {
    return (
        <View style={{
          backgroundColor:'black',
          flexDirection:'row',
          borderColor:'black',
          borderWidth:1,
          height:100,
          width:1000,
          justifyContent:'center',
          alignItems:'center',
          zIndex:0,
        }}>
          {BALLS.map(elm => {
            return (
              <Animated.View key={elm} style={{
                backgroundColor:elm,
                borderRadius:25,
                left:this.state[elm].interpolate({inputRange:[0,1,2],outputRange:[-300,0,300]}),
                height:20,
                width:20,
              }}/>
            );
          }).reverse()}
        </View>
    );
  }
  componentDidMount() {
    this.animate(2);
  }
  animate(TO) {
    var ALL = BALLS.map(elm => {
      return [
        Animated.timing(this.state[elm],{toValue:1,duration:500,easing:Easing.out(Easing.cubic)}),
        Animated.timing(this.state[elm],{toValue:TO,duration:500,easing:Easing.in(Easing.cubic)}),
      ];
    }).map(elm => {
      return Animated.sequence(elm);
    });
    if(TO === 0) {
      ALL.reverse();
    }
    Animated.stagger(200,ALL).start(() => {
      this.animate(TO === 0 ? 2 : 0);
    });
  }
}

reactMixin(Loading.prototype,TimerMixin);

export default Loading;
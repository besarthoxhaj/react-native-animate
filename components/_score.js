'use strict';
/* @flow */

import React,{Component} from 'react';
import {Text,Animated,Dimensions} from 'react-native';

import reactMixin from 'react-mixin';
import TimerMixin from 'react-timer-mixin';

const {width:screenWidth} = Dimensions.get('window');

class Score extends Component {
  constructor(props) {
    super(props);
    this.state = {
      O:new Animated.Value(0),
      num:0,
    };
  }
  render() {
    return (
      <Animated.View style={{
        position:'absolute',
        backgroundColor:'transparent',
        justifyContent:'center',
        alignSelf:'center',
        width:screenWidth,
        height:200,
        bottom:0,
        opacity:this.state.O.interpolate({inputRange:[0,1],outputRange:[0,1]})
      }}>
        <Text style={{
          color:'black',
          textAlign:'center',
          fontSize:60,
          fontWeight:'700',
        }}>{`+${this.state.num}`}</Text>
      </Animated.View>
    );
  }
  componentDidMount() {
    this.animate();
    this.count();
  }
  animate() {
    Animated.timing(this.state.O,{
      toValue:1,
      duration:3500,
    }).start(() => {
      console.log('ALL DONE!');
    });
  }
  count() {
    var timerId = this.setInterval(() => {
      if(this.state.num > 450) {
        this.setState({num:500});
        this.clearInterval(timerId);
      } else {
        if(this.state.num > 250) {
          this.setState({num:this.state.num+13});
        } else if (this.state.num > 50){
          this.setState({num:this.state.num+3});
        } else {
          this.setState({num:this.state.num+1});
        }
      }
    },10);
  }
}

reactMixin(Score.prototype,TimerMixin);

export default Score;
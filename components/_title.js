'use strict';
/* @flow */

import React,{Component} from 'react';
import {View,Animated,Dimensions} from 'react-native';

import TextAnimate from './_text.js';
const {width:screenWidth} = Dimensions.get('window');

export default class Title extends Component {
  constructor(props) {
    super(props);
    this.state = {
      S:new Animated.Value(0),
      text:{start:false}
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
        height:150,
        top:0,
      }}>
        <Animated.Text style={{
          fontSize:70,
          fontWeight:'900',
          color:'black',
          textAlign:'center',
          transform:[
            {scale:this.state.S.interpolate({inputRange:[0,1],outputRange:[100,1]})}
          ]
        }}>BOOM!</Animated.Text>
        <TextAnimate
          start={this.state.text.start}
          style={{
            width:screenWidth,
            position:'absolute',
            bottom:0,
            fontSize:25,
            fontWeight:'500',
            marginLeft:5,
            color:'black',
            textAlign:'center',
          }}
          text={'CONGRATULATIONS!'}
          done={this.props.done}
        />
      </Animated.View>
    );
  }
  componentDidMount() {
    Animated.sequence([
      Animated.timing(this.state.S,{toValue:1,duration:1000}),
      Animated.delay(500),
    ]).start(() => {
      this.setState({text:{start:true}});
    });
  }
}
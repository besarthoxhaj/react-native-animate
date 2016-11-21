'use strict';
/* @flow */

import React,{Component} from 'react';
import {View,Animated} from 'react-native';
import TextAnimate from './_text.js';

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      XX:new Animated.Value(0),
      YY:new Animated.Value(0),
      CC:new Animated.Value(0),
      startText:false,
    };
  }
  render() {
    return (
      <Animated.View style={{
        flexDirection:'row',
        alignSelf:'center',
        height:this.state.YY.interpolate({inputRange:[0,1],outputRange:[0,25]}),
        width:this.state.XX.interpolate({inputRange:[0,1],outputRange:[0,250]}),
      }}>
        <Animated.View style={{
          backgroundColor:'red',
          borderTopLeftRadius:10,
          justifyContent:'flex-start',
          alignItems:'center',
          flexDirection:'row',
          flex:1,
        }}>
          <Animated.Image style={{
            marginLeft:5,
            borderRadius:20/2,
            height:this.state.CC.interpolate({inputRange:[0,1],outputRange:[0,20]}),
            width:this.state.CC.interpolate({inputRange:[0,1],outputRange:[0,20]}),
          }} source={{uri:'https://facebook.github.io/react/img/logo_og.png'}}/>
          <TextAnimate
            start={this.state.startText}
            style={{fontSize:12,marginLeft:5,color:'white'}}
            text={'FOOFOO'}
            done={this.props.done}
          />
        </Animated.View>
        <Animated.View style={{
          backgroundColor:'yellow',
          position:'absolute',
          alignSelf:'center',
          alignItems:'center',
          justifyContent:'center',
          left:((250/2) - (45/2)),
          borderRadius:this.state.CC.interpolate({inputRange:[0,1],outputRange:[0,45]}),
          height:this.state.CC.interpolate({inputRange:[0,1],outputRange:[0,45]}),
          width:this.state.CC.interpolate({inputRange:[0,1],outputRange:[0,45]}),
          zIndex:1,
          top:-10,
        }}>
          <Animated.Image style={{
            borderRadius:30/2,
            height:this.state.CC.interpolate({inputRange:[0,1],outputRange:[0,30]}),
            width:this.state.CC.interpolate({inputRange:[0,1],outputRange:[0,30]}),
          }} source={{uri:'https://facebook.github.io/react/img/logo_og.png'}}/>
        </Animated.View>
        <Animated.View style={{
          backgroundColor:'green',
          borderTopRightRadius:10,
          justifyContent:'flex-end',
          alignItems:'center',
          flexDirection:'row',
          flex:1,
        }}>
          <TextAnimate
            start={this.state.startText}
            style={{fontSize:12,marginRight:5,color:'white'}}
            text={'BARBAR'}
          />
          <Animated.Image style={{
            marginRight:5,
            borderRadius:20/2,
            height:this.state.CC.interpolate({inputRange:[0,1],outputRange:[0,20]}),
            width:this.state.CC.interpolate({inputRange:[0,1],outputRange:[0,20]}),
          }} source={{uri:'https://facebook.github.io/react/img/logo_og.png'}}/>
        </Animated.View>
      </Animated.View>
    )
  }
  componentWillReceiveProps(nextProps) {
    if(this.props.start !== nextProps.start) {
      this.animateSequence(1);
    }
  }
  animateParallel(XY) {
    Animated.parallel([
      Animated.spring(this.state.YY,{toValue:XY}),
      Animated.spring(this.state.XX,{toValue:XY}),
      Animated.spring(this.state.CC,{toValue:XY}),
    ]).start(() => {
      this.setState({startText:true});
    });
  }
  animateSequence(XY) {
    Animated.sequence([
      Animated.spring(this.state.YY,{toValue:XY}),
      Animated.delay(100),
      Animated.spring(this.state.XX,{toValue:XY}),
      Animated.delay(100),
      Animated.spring(this.state.CC,{toValue:XY}),
    ]).start(() => {
      this.setState({startText:true});
    });
  }
}
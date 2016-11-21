'use strict';
/* @flow */

import React,{Component,PropTypes} from 'react';
import {View,Text,Animated,Easing} from 'react-native';

export default class Result extends Component {
  static propTypes = {
    style:PropTypes.object,
    start:PropTypes.bool,
  }
  static defaultProps = {
    start:false,
    style:{},
  }
  constructor(props) {
    super(props);
    this.state = {
      X:new Animated.Value(0),
      XX:new Animated.Value(0),
    };
  }
  render() {
    return (
      <View>
        <Animated.View style={[{
            backgroundColor:'transparent',
            alignSelf:'center',
            top:-130,
            width:220,
            height:270,
            marginTop:15,
            transform:[
              {perspective:1000},
              {rotateX:this.state.X.interpolate({inputRange:[0,1],outputRange:['-90deg','0deg']})},
            ]
          },
          ...this.props.style
        ]}>
          <View style={{flex:1,backgroundColor:'transparent'}}/>
          <View style={{
            flex:1,
            backgroundColor:'red',
            justifyContent:'center',
          }}>
            <Text style={{
              textAlign:'center',
              fontSize:50,
              color:'white',
            }}>FOO</Text>
          </View>
        </Animated.View>
        <Animated.View style={{
          width:220,
          height:100,
          top:-180,
          backgroundColor:'transparent',
          alignSelf:'center',
          transform:[
            {perspective:1000},
            {rotateX:this.state.XX.interpolate({inputRange:[0,1],outputRange:['-90deg','0deg']})},
          ]
        }}>
          <View style={{flex:1,backgroundColor:'transparent'}}/>
          <View style={{
            backgroundColor:'blue',
            justifyContent:'center',
            flex:1,
          }}>
            <Text style={{
              textAlign:'center',
              fontSize:18,
              color:'white',
              fontWeight:'400',
            }}>HELLO, WORLD!</Text>
          </View>
        </Animated.View>
      </View>
    );
  }
  componentWillReceiveProps(nextProps) {
    if(this.props.start !== nextProps.start) {
      this.animate(0);
    }
  }
  animate() {
    Animated.sequence([
      Animated.spring(this.state.X,{toValue:1,friction:2}),
      Animated.spring(this.state.XX,{toValue:1,friction:2}),
    ]).start(() => {
      this.props.done();
    })
  }
}
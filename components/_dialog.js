'use strict';
/* @flow */

import React,{Component} from 'react';
import {View,Animated,TouchableHighlight} from 'react-native';

import Header from './_header.js';
import Result from './_result.js';
import Click from './_click.js';

export default class Dialog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      animation:{
        X:new Animated.Value(0),
        Y:new Animated.Value(0),
        x:new Animated.Value(0),
        y:new Animated.Value(0),
      },
      click:{stop:false},
      header:{start:false,finish:false},
      result:{start:false,finish:false}
    };
    this.clickDone = this.clickDone.bind(this);
    this.headerDone = this.headerDone.bind(this);
    this.resultDone = this.resultDone.bind(this);
  }
  clickDone() {
    this.animate();
  }
  headerDone() {
    this.setState({
      header:{start:false,finish:true},
      result:{start:true}
    });
  }
  resultDone() {
    this.setState({result:{start:false,finish:true}});
    this.littleTriangle();
  }
  render() {
    return (
      <Click stop={this.state.click.stop} done={this.clickDone}>
        <TouchableHighlight style={{
          alignSelf:'center',
          borderRadius:10,
        }} onPress={() => this.setState({click:{stop:true}})}>
          <Animated.View style={{
            width:this.state.animation.X.interpolate({inputRange:[0,1],outputRange:[20,250]}),
            height:this.state.animation.Y.interpolate({inputRange:[0,1],outputRange:[20,250]}),
            borderRadius:10,
            backgroundColor:'black',
            alignSelf:'center',
          }}>
            <Header start={this.state.header.start} done={this.headerDone}/>
            <Result start={this.state.result.start} done={this.resultDone}/>
            <Animated.View style={{
              width:this.state.animation.x.interpolate({inputRange:[0,1],outputRange:[0,30]}),
              height:this.state.animation.x.interpolate({inputRange:[0,1],outputRange:[0,30]}),
              top:this.state.animation.y.interpolate({inputRange:[0,1],outputRange:[-70,-45]}),
              transform:[{rotate:'-45degrees'}],
              backgroundColor:'black',
              alignSelf:'center',
              zIndex:-1,
            }}/>
          </Animated.View>
        </TouchableHighlight>
      </Click>
    )
  }
  animate() {
    Animated.sequence([
      Animated.spring(this.state.animation.X,{toValue:1}),
      Animated.delay(300),
      Animated.stagger(100,[
        Animated.spring(this.state.animation.Y,{toValue:1}),
        Animated.timing(this.state.animation.x,{toValue:1,duration:100}),
      ])
    ]).start(() => {
      this.setState({header:{start:true}});
    });
  }
  littleTriangle() {
    Animated.timing(this.state.animation.y,{
      toValue:1,
      duration:500,
    }).start(() => {
      this.props.done();
    });
  }
}
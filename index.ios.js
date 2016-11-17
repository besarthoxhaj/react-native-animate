'use strict';
/* @flow */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Animated,
} from 'react-native';

import SimpleInterpolation from './components/simple_interpolation.js';
import Spring from './components/spring.js';

export default class AnimationsTutorial extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Spring/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#F5FCFF',
  }
});

AppRegistry.registerComponent('AnimationsTutorial', () => AnimationsTutorial);

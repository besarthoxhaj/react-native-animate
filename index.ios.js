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
import Transform from './components/transform.js';
import Breath from './components/breath.js';
import Shape from './components/shape.js';
import Complex from './components/complex.js';
import Nested from './components/nested.js';
import TextAnimate from './components/_text.js';
import Loading from './components/_loading.js';
import Arrow from './components/_arrow.js';
import ClickMe from './components/_click.js';
import Stamp from './components/_stamp.js';
import Title from './components/_title.js';
import Score from './components/_score.js';

export default class AnimationsTutorial extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Nested/>
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

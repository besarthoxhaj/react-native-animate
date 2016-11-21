'use strict';
/* @flow */

import React,{Component} from 'react';
import {View,Animated} from 'react-native';

import Dialog from './_dialog.js';
import Title from './_title.js';
import Score from './_score.js';

export default class Nested extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title:{start:false,finish:false},
      dialog:{start:false,finish:false},
      score:{start:false,finish:false},
    };
    this.dialogDone = this.dialogDone.bind(this);
    this.titleDone = this.titleDone.bind(this);
  }
  titleDone() {
    this.setState({score:{start:true}});
  }
  dialogDone() {
    this.setState({
      title:{start:true,finish:true},
      dialog:{start:true,finish:true},
    });
  }
  render() {
    return (
      <View style={{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
      }}>
        {this.state.title.start && <Title done={this.titleDone}/>}
        {this.state.dialog.start && <Dialog done={this.dialogDone}/>}
        {this.state.score.start && <Score/>}
      </View>
    );
  }
  componentDidMount() {
    this.setState({dialog:{start:true}});
  }
}
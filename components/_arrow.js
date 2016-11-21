'use strict';
/* @flow */

import React,{Component,PropTypes} from 'react';
import {View,Animated} from 'react-native';

export default class Arrow extends Component {
  static propTypes = {
    direction:PropTypes.oneOf(['left','right']),
    scale:PropTypes.number,
    color:PropTypes.string,
  }
  static defaultProps = {
    scale:1,
    color:'black',
  }
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={{
        flexDirection:'row',
        alignItems:'center',
        transform:[
          {rotate:(this.props.direction === 'right' ? '180deg' : '0deg')}
        ]
      }}>
        <View style={{
          borderStyle:'solid',
          borderTopWidth:(12.5*this.props.scale),
          borderTopColor:'transparent',
          borderRightWidth:(20*this.props.scale),
          borderRightColor:this.props.color,
          borderBottomWidth:(12.5*this.props.scale),
          borderBottomColor:'transparent',
          height:0,
          width:0,
        }}/>
        <View style={{
          left:-1,
          width:(20*this.props.scale),
          height:(12.5*this.props.scale),
          backgroundColor:this.props.color,
        }}/>
      </View>
    );
  }
}
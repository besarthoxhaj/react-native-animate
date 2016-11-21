'use strict';
/* @flow */

import React,{Component,PropTypes} from 'react';
import {View,Text,Animated} from 'react-native';
import reactMixin from 'react-mixin';
import TimerMixin from 'react-timer-mixin';

class TextAnimate extends Component {
  static propTypes = {
    text:PropTypes.string,
    speed:PropTypes.number,
    style:PropTypes.object,
    start:PropTypes.bool,
    done:PropTypes.func,
  }
  static defaultProps = {
    start:false,
    text:'HELLO, WORLD!',
    speed:100,
    style:{},
  }
  constructor(props) {
    super(props);
    this.state = {currentText:''};
  }
  render() {
    return (
      <Text style={this.props.style}>{this.state.currentText}</Text>
    );
  }
  animate(currentPos) {
    const {currentText} = this.state;
    const finalText = this.props.text;
    this.setTimeout(() => {
      if(currentPos !== finalText.length) {
        var nextText = finalText.slice(0,currentPos+1);
        this.setState({currentText:nextText});
        this.animate(currentPos+1);
      } else {
        this.props.done && this.props.done();
      }
    },this.props.speed);
  }
  componentWillReceiveProps(nextProps) {
    if(this.props.start !== nextProps.start) {
      this.animate(0);
    }
  }
}

reactMixin(TextAnimate.prototype,TimerMixin);

export default TextAnimate;
## React Native Animations

A set of React Native animations.

### Run

```
  git clone 
  cd 
  npm install
  react-native run-ios
```

### Summary

Images of possible react native animations

### Intro - Interpolation

The basic block of animations is [interpolation](https://en.wikipedia.org/wiki/Interpolation). The implementation details can be found [here](https://github.com/facebook/react-native/blob/9ee815f6b52e0c2417c04e5a05e1e31df26daed2/Libraries/Animated/src/Interpolation.js).

```js
// from https://github.com/facebook/react-native/blob/master/Libraries/Animated/src/__tests__/Interpolation-test.js
describe('Interpolation', () => {
  it('should work with output range', () => {
    var interpolation = Interpolation.create({
      inputRange:[0,1],
      outputRange:[100,200],
    });

    expect(interpolation(0)).toBe(100);
    expect(interpolation(0.5)).toBe(150);
    expect(interpolation(0.8)).toBe(180);
    expect(interpolation(1)).toBe(200);
  });
  it('should work with output ranges as string', () => {
    var interpolation = Interpolation.create({
      inputRange:[0,1],
      outputRange:['rgba(0,100,200,0)','rgba(50,150,250,0.4)'],
    });

    expect(interpolation(0)).toBe('rgba(0,100,200,0)');
    expect(interpolation(0.5)).toBe('rgba(25,125,225,0.2)');
    expect(interpolation(1)).toBe('rgba(50,150,250,0.4)');
  });
});
```

A simple component implementation may look something like this:
```js
'use strict';
/* @flow */

import React,{Component} from 'react';
import {View,Animated} from 'react-native';

export default class SimpleInterpolation extends Component {
  constructor(props) {
    super(props);
    this.state = {animationValue:new Animated.Value(0)};
  }
  render() {
    return (
      <Animated.View style={{
        backgroundColor:this.state.animationValue.interpolate({
          inputRange:[0,1],
          outputRange:['rgba(255,0,0,1)','rgba(0,0,255,1)']
        }),
        width:150,
        height:150,
        borderRadius:this.state.animationValue.interpolate({
          inputRange:[0,1],
          outputRange:[0,150]
        })
      }}></Animated.View>
    );
  }
  componentDidMount() {
    Animated.timing(this.state.animationValue,{toValue:1,duration:5000}).start();
  }
}
```

### Animated - Timing

[Source Code](https://github.com/facebook/react-native/blob/9ee815f6b52e0c2417c04e5a05e1e31df26daed2/Libraries/Animated/src/AnimatedImplementation.js#L1839). Timing is probably the simplest implementation.

### Animated - Spring

[Source Code](https://github.com/facebook/react-native/blob/9ee815f6b52e0c2417c04e5a05e1e31df26daed2/Libraries/Animated/src/AnimatedImplementation.js#L1810). Spring

### Library of animations

- http://digitalsynopsis.com/design/loading-animations-preloader-gifs-ui-ux-effects/

### References

- https://github.com/browniefed/react-native-animation-book
- https://github.com/oblador/react-native-animatable
- https://gist.github.com/Jpoliachik/0dd83689646d1051b0bc
- https://github.com/dabit3/react-native-animations
- http://xaedes.de/dev/transitions/
- https://scotch.io
- https://css-tricks.com/examples/ShapesOfCSS/

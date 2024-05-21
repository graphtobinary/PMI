import React from 'react';
import {StyleSheet} from 'react-native';
import Video, {FullscreenOrientationType, ResizeMode} from 'react-native-video';
const App = () => {
  const background = require('./TazaaTwist.mp4');

  return (
    <Video
      source={background}
      style={styles.backgroundVideo}
      resizeMode={ResizeMode.CONTAIN}
      fullscreenOrientation={FullscreenOrientationType.LANDSCAPE}
    />
  );
};

// Later on in your styles..
var styles = StyleSheet.create({
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    resizeMode: 'cover',
    backgroundColor: '#000000',
  },
});

export default App;

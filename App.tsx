import {StyleSheet} from 'react-native';
import Video, {FullscreenOrientationType, ResizeMode} from 'react-native-video';

// Within your render function, assuming you have a file called
// "background.mp4" in your project. You can include multiple videos
// on a single screen if you like.

const App = () => {
  const background = require('./TazaaTwist.mp4');

  return (
    // eslint-disable-next-line react/react-in-jsx-scope
    <Video
      source={background}
      style={styles.backgroundVideo}
      resizeMode={ResizeMode.COVER}
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
  },
});

export default App;

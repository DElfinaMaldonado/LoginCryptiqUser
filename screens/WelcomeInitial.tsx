import React from 'react';
import { View, StyleSheet } from 'react-native';
import Video from 'react-native-video';

const WelcomeInitial = () => (
  <View style={styles.container}>
    <Video
      source={require('../assets/Cryptiq_Logo_Animation_V3.mp4')}
      style={styles.video}
      resizeMode="contain"
      paused={false}
      muted={true}
      repeat={false}
      controls={false}
      onLoad={() => console.log('[Video] Cargado')}
      onError={(e) => console.warn('[Video] Error:', e)}
    />
  </View>
);

export default WelcomeInitial;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
  },
  video: {
    width: '100%',
    height: '100%',
  },
});
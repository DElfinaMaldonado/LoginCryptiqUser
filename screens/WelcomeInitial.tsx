import React, { useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import Video from 'react-native-video';

import type { StackNavigationProp } from '@react-navigation/stack';

type WelcomeInitialProps = {
  navigation: StackNavigationProp<any>;
};

export default function WelcomeInitial({ navigation }: WelcomeInitialProps) {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('MainScreen');
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Video
        source={require('../assets/Cryptiq_Logo_Animation_V3.mp4')}
        style={styles.video}
        resizeMode="contain"
        repeat={false}
        muted={true}
        onEnd={() => navigation.replace('MainScreen')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
  },
  video: {
    width: '100%',
    height: '100%',
  },
});
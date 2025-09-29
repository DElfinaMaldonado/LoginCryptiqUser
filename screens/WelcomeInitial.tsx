// Binding element 'navigation' implicitly has an 'any' type.
//React Hook useEffect has a missing dependency: 'navigation'. Either include it or remove the dependency array.
import React, { useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import * as Animatable from 'react-native-animatable';

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
      <Animatable.Image
        animation="zoomIn"
        duration={5000}
        source={require('../assets/logocryptiq.png')}
        style={styles.logo}
        resizeMode="contain"
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
  logo: {
    width: 100,
    height: 100,
  },
});

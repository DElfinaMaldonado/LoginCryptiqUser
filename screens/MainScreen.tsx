import React from 'react';
import { View, StyleSheet, Image } from 'react-native';

export default function WelcomeInitial() {
  return (
    <View style={styles.container}>
    <Image
        source={require("../assets/Cryptiq_WelcomeSplash.png")}
        resizeMode="contain"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
  },
});



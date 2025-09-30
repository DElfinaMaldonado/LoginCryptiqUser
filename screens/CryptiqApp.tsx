import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

export default function Cryptiqabout() {
  return (
    <View style={styles.container}>
            <Image
              source={require('../assets/CryptiqLogo_DrkBack.png')}
              style={styles.WelcomeSplash}
              resizeMode="cover"
            />
      <Text style={styles.title}>What Can You Do With Cryptiq?</Text>
      <Text style={styles.subtitle}> Authenticate users with anti-spoof biometrics. </Text>
      <Text style={styles.subtitle}> Know the identity of your chat partners. </Text>
      <Text style={styles.subtitle}> Securely validate with just your face. </Text>
      <Text style={styles.subtitle}> Send messages and files that can only be read on your device (locked by facial recognition). </Text>
      <Text style={styles.subtitle}> Authorize 3rd-party system access with your face. </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
    backgroundColor: '#000000',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 12,
    marginTop: 20,
    color: '#00D1B2',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 18,
    textAlign: 'left',
    color: '#FFFFFF',
    marginBottom: 12,
  },
    WelcomeSplash: {
    position: 'absolute',
    width: 150,
    height: 150,
    marginBottom: 20,
    top: 0,
  },
});


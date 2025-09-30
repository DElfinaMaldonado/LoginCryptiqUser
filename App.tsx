import React from 'react';
import { View, StatusBar, StyleSheet, useColorScheme } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
// import WelcomeInitial from './screens/WelcomeInitial';
// import MainScreen from './screens/MainScreen';
// import CryptiqAbout from './screens/CryptiqAbout';
import PersonalData from './screens/PersonalData';

export default function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaProvider>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <View style={styles.container}>
        <PersonalData />
      </View>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

import React, { useEffect } from "react";
import { View, StyleSheet, Image } from "react-native";

const WelcomeInitial = ({ navigation }: any) => {
  useEffect(() => {
    // Simula carga antes de ir a Home
    const timer = setTimeout(() => {
      navigation.replace("Home");
    }, 2000);

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/logo.png")} // crea la carpeta assets y mete tu logo aquí
        style={styles.logo}
        resizeMode="contain"
      />
    </View>
  );
};

export default WelcomeInitial;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: 100,
    height: 100,
  },
});

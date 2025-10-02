import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image, Platform } from 'react-native';
export default function PersonalData() {
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleContinue = () => {
    console.log('Número ingresado:', phoneNumber);
  };

  return (
    <View style={styles.container_data}>
      <Image
        source={require('../assets/arrow-return.png')}
        style={styles.data_image_arrow}
        resizeMode="cover"
      />
      <Text style={styles.data_information}>
        <Text style={styles.information_Continue}>Continue Your Request, </Text>
        <Text style={styles.information_Personal}>With Your Personal Data</Text>
      </Text>

<View>
  <Text style={styles.label}>Email</Text>
  <TextInput
    style={styles.input}
    placeholder="Email"
    keyboardType="email-address"
    autoCapitalize="none"
    selectionColor={"white"}
    autoCorrect={false}
  />
</View>
      <View style={styles.data_personal}>
        <Image
          source={require('../assets/USA.png')}
          style={styles.personal_flag}
        />
        <Text style={styles.data_areacode}>+1</Text>
        <TextInput
          style={styles.data_mode}
          placeholder="Phone Number"
          keyboardType="phone-pad"
         selectionColor={"white"}
          value={phoneNumber}
          onChangeText={setPhoneNumber}
        />
      </View>
      <View style={styles.data_security}>
        <Image
          source={require('../assets/Security.png')}
          style={styles.personal_Flafa}
        />
        <Text style={styles.data_alert}>All your information is safe.</Text>
      </View>
      <Text style={styles.disclaimer}>
        By continuing you accept our{' '}
        <Text style={styles.link}>Privacy Notice and </Text>
        <Text style={styles.link}>Terms & Conditions</Text>
      </Text>
      <TouchableOpacity style={styles.button} onPress={handleContinue}>
        <Text style={styles.buttonText}>Accept & Continue</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  container_data: {
    flex: 1,
    padding: 24,
    paddingTop: 70,
    backgroundColor: '#000000',
  },
  data_image_arrow: {
    position: 'absolute',
    width: 24,
    height: 24,
    top: 20,
    left: 24,
  },
  data_information: {
    fontSize: 32,
    fontWeight: 'black',
    textAlign: 'left',
    flexDirection: 'row',
  },
  information_Continue: {
    color: '#00D1B2',
  },
  information_Personal: {
    color: '#FFFFFF',
  },

  data_personal: {
    flexDirection: 'row',
    alignItems: 'center',
    color: '#3A3B41',
    textDecorationLine: 'underline',
    borderWidth: 1,
    borderRadius: 12,
    paddingHorizontal: 12,
    marginBottom: 16,
  },
  personal_flag: {
    textAlign: 'center',
    flexDirection: 'row',
  },
  personal_Flafa: {
    textAlign: 'left',
    flexDirection: 'row',
  },
  data_areacode: {
    fontSize: 18,
    marginRight: 8,
    color: '#555',
  },
  data_mode: {
    flex: 1,
    fontSize: 18,
    paddingVertical: Platform.OS === 'ios' ? 12 : 8,
  },
  data_security: {
    backgroundColor: '#3A3B41',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    textDecorationLine: 'underline',
    borderWidth: 1,
    borderRadius: 6,
    height: 50,
    width: 270,
    marginBottom: 16,
  },
  data_alert: {
    textAlign: 'center',
    color: '#FFFFFF',
    fontSize: 14,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 6,
    // marginBottom: 16,
  },
  button: {
    backgroundColor: '#3A3B41',
    paddingVertical: 14,
    borderRadius: 25,
    alignItems: 'center',
    marginBottom: 20,
    alignSelf: 'center',
  },
  buttonText: {
    color: '#00D1B2',
    fontSize: 18,
    fontWeight: 'bold',
  },
  disclaimer: {
    textAlign: 'left',
    fontSize: 16,
    color: '#FFFFFF',
    paddingHorizontal: 12,
  },
  link: {
    color: '#00D1B2',
    textDecorationLine: 'underline',
  },
  label: {
    color: '#FFFFFF',

  },
  input: {

  },
});
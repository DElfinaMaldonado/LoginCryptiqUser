// Module '"react-native"' has no exported member 'Alert'.
import React from 'react';
import { View, StyleSheet, Image, Text, TouchableOpacity, Alert, Platform, Dimensions, } from 'react-native';

const { width, height } = Dimensions.get('window');

export default function WelcomeInitial() {
    return (
        <View style={styles.container}>
            <Image
                source={require('../assets/Cryptiq_WelcomeSplash.png')}
                style={styles.WelcomeSplash}
                resizeMode="cover"
            />
            <View style={styles.buttonWrapper}>
                <View style={styles.shadowWrapper}>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => Alert.alert('Cannot press this one')}
                        disabled
                    >
                        <Text style={styles.buttonText}>Start / Sign Up</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    WelcomeSplash: {
        position: 'absolute',
        width: width,
        height: height,
    },
    buttonWrapper: {
        position: 'absolute',
        bottom: 80,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    shadowWrapper: {
        ...Platform.select({
            ios: {
                shadowColor: '#00D1B2',
                shadowOffset: { width: 4, height: 4 },
                shadowOpacity: 0.3,
                shadowRadius: 6,
            },
            android: {
                backgroundColor: '#00D1B2',
                border: 'none',
                borderRadius: 100,
                cursor: 'pointer',
                boxShadow: '0 5px 50px 0 hsla(162, 80%, 80%, 0.70)',
                shadowOpacity: 0.9,
            },
        }),
    },
    button: {
        paddingVertical: 14,
        paddingHorizontal: 24,
        backgroundColor: '#3A3B41',
        borderColor: '#00D1B2',
        borderWidth: 2,
        borderRadius: 25,
    },
    buttonText: {
        color: '#00D1B2',
        fontWeight: 'bold',
        fontSize: 18,
    },
});

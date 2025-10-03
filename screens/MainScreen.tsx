import React from 'react';
import { View, StyleSheet, Image, Text, TouchableOpacity, Platform, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../App';

const { width, height } = Dimensions.get('window');

export default function MainScreen() {
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

    return (
        <View style={styles.welcome_container}>
            <Image
                source={require('../assets/Cryptiq_WelcomeSplash.png')}
                style={styles.Welcome_Image}
                resizeMode="cover"
            />
            <View style={styles.button_Welcome}>
                <View style={styles.welcome_Start}>
                    <TouchableOpacity
                        style={styles.button_navigation}
                        onPress={() => navigation.navigate('CryptiqAbout')}
                    >
                        <Text style={styles.button_Start}>Start / Sign Up</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    welcome_container: {
        flex: 1,
    },
    Welcome_Image: {
        position: 'absolute',
        width: width,
        height: height,
    },
    button_Welcome: {
        position: 'absolute',
        bottom: 80,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    welcome_Start: {
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
    button_navigation: {
        paddingVertical: 14,
        paddingHorizontal: 24,
        backgroundColor: '#3A3B41',
        borderColor: '#00D1B2',
        borderWidth: 2,
        borderRadius: 25,
    },
    button_Start: {
        color: '#00D1B2',
        fontWeight: 'bold',
        fontSize: 18,
    },
});

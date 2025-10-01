import React from 'react';
import { View, StyleSheet, Image, Text, TouchableOpacity, Alert, Platform, } from 'react-native';

export default function CryptiqAbout() {
    return (
        <View style={styles.containerAbout}>
            <View style={styles.about_images}>
                <Image
                    source={require('../assets/CryptiqLogo_Black.png')}
                    style={styles.image_about}
                    resizeMode="contain"
                />
                <Image
                    source={require('../assets/arrow-return.png')}
                    style={styles.image_about_arrow}
                    resizeMode="cover"
                />
            </View>

            <Text style={styles.about_title}>What Can You Do With Cryptiq?</Text>

            <View style={styles.about_list}>
                {[
                    'Authenticate users with anti-spoof biometrics.',
                    'Know the identity of your chat partners.',
                    'Securely validate with just your face.',
                    'Send messages and files locked by facial recognition.',
                    'Authorize 3rd-party system access with your face.',
                ].map((text, index) => (
                    <View key={index} style={styles.about_content}>
                        <Image
                            source={require('../assets/checklist.png')}
                            style={styles.content_icon}
                        />
                        <Text style={styles.content_text}>{text}</Text>
                    </View>
                ))}
            </View>

            <View style={styles.buttonWrapper}>
                <View style={styles.shadowWrapper}>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => Alert.alert('Cannot press this one')}
                        disabled
                    >
                        <Text style={styles.buttonText}>Next</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    containerAbout: {
        flex: 1,
        backgroundColor: '#000',
    },
    about_images: {
        alignItems: 'center',
        marginTop: 50,
    },
    image_about: {
        width: 100,
        height: 100,
    },
    image_about_arrow: {
        position: 'absolute',
        width: 24,
        height: 24,
        top: 0,
        left: 24,
    },
    about_title: {
        fontSize: 32,
        fontWeight: '500',
        marginBottom: 10,
        marginTop: 5,
        color: '#00D1B2',
        textAlign: 'center',
        paddingHorizontal: 24,
    },
    about_list: {
        width: '100%',
        paddingHorizontal: 24,
    },
    about_content: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 3,
    },
    content_icon: {
        width: 24,
        height: 24,
        marginRight: 10,
    },
    content_text: {
        fontSize: 18,
        color: '#FFFFFF',
        marginBottom: 10,
        marginTop: 10,
        flexShrink: 1,
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

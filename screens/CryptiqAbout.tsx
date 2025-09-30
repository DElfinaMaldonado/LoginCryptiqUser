import React from 'react';
import { View, StyleSheet, Image, Text, TouchableOpacity, Alert, Platform } from 'react-native';

export default function CryptiqAbout() {
    return (
        <View style={styles.containerAbout}>
            <Image
                source={require('../assets/arrow-return.png')}
                style={styles.about_image_arrow}
                resizeMode="cover"
            />
            <Text style={styles.about_title}>What Can You Do With Cryptiq?</Text>
            <View style={styles.about_content}>
                <Image source={require('../assets/checklist.png')} style={styles.content_icon} />
                <Text style={styles.content_text}>Authenticate users with anti-spoof biometrics.</Text>
            </View>
            <View style={styles.about_content}>
                <Image source={require('../assets/checklist.png')} style={styles.content_icon} />
                <Text style={styles.content_text}>Know the identity of your chat partners.</Text>
            </View>
            <View style={styles.about_content}>
                <Image source={require('../assets/checklist.png')} style={styles.content_icon} />
                <Text style={styles.content_text}>Securely validate with just your face.</Text>
            </View>
            <View style={styles.about_content}>
                <Image source={require('../assets/checklist.png')} style={styles.content_icon} />
                <Text style={styles.content_text}>Send messages and files locked by facial recognition.</Text>
            </View>
            <View style={styles.about_content}>
                <Image source={require('../assets/checklist.png')} style={styles.content_icon} />
                <Text style={styles.content_text}>Authorize 3rd-party system access with your face.</Text>
            </View>
            <View style={styles.about_button}>
                <View style={styles.shadow_button}>
                    <TouchableOpacity
                        style={styles.button_alert}
                        onPress={() => Alert.alert('Cannot press this one')}
                        disabled
                    >
                        <Text style={styles.button_text}>Next</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    containerAbout: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 42,
        backgroundColor: '#000000',
    },

    about_image_arrow: {
        position: 'absolute',
        width: 24,
        height: 24,
        marginBottom: 5,
        top: 20,
        left: 24,
    },
    about_title: {
        fontSize: 32,
        fontWeight: '500',
        marginBottom: 10,
        marginTop: 5,
        paddingTop:180,
        color: '#00D1B2',
        textAlign: 'center',
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
        textAlign: 'left',
        color: '#FFFFFF',
        marginBottom: 10,
        marginTop: 10,
    },
    about_button: {
        position: 'absolute',
        bottom: 80,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    shadow_button: {
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
                boxShadow: '0 5px 50px 0 hsla(162, 80%, 80%, 0.45)',
                shadowOpacity: 0.9,
            },
        }),
    },
    button_alert: {
        paddingVertical: 14,
        paddingHorizontal: 80,
        backgroundColor: '#3A3B41',
        borderColor: '#00D1B2',
        borderWidth: 2,
        borderRadius: 25,
    },
    button_text: {
        color: '#00D1B2',
        fontWeight: 'bold',
        fontSize: 18,
    },
});
import React from 'react';
import { View, StyleSheet, Image, Text} f rom 'react-native';

export default function CryptiqAbout() {
    return (
        <View style={styles.containerAbout}>
            <Image
                source={require('../assets/arrow-return.png')}
                style={styles.about_image_arrow}
                resizeMode="cover"
            />
            <Text style={styles.about_title}>Continue your request, <Text style={styles.about_title_data}>with your personal data </Text></Text>
        </View>
    );
}

const styles = StyleSheet.create({
    containerAbout: {
        flex: 1,
        // paddingRight: 24,
        // paddingLeft: 24,
        backgroundColor: '#000000',
    },
    about_image_arrow: {
        paddingTop:5,
        position: 'absolute',
        width: 24,
        height: 24,
        marginBottom: 5,
        top: 20,
        left: 24,
    },
    about_title: {
        fontSize: 32,
        // fontWeight: '500',
        top: 84,
        paddingLeft: 24,
        paddingRight: 24,
        color: '#00D1B2',
        textAlign: 'left',
    },
    about_title_data: {
        fontSize: 32,
        // fontWeight: '500',
        top: 84,
        paddingLeft: 24,
        paddingRight: 24,
        color: '#FFFFFF',
        textAlign: 'left',
    },
});
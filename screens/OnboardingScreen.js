import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const OnboardingScreen = ({ navigation }) => {

    const [dimensions, setDimensions] = useState({ window: Dimensions.get('window') });
    useEffect(() => {
        const subscription = Dimensions.addEventListener("change", ({ window }) => {
            setDimensions({ window });
        });
        return () => subscription?.remove();
    });

    const { window } = dimensions;

    return (
        <ScrollView contentContainerStyle={[styles.container, { paddingVertical: windowHeight * 0.02 }]}>
            <View style={styles.content}>
                <Text style={[styles.title, { fontSize: windowWidth * 0.08, marginBottom: windowHeight * 0.015 }]}>Welcome to ToDo App</Text>
                <Image source={require('../assets/onboarding-image.png')} style={[styles.image, { width: windowWidth * 0.8, height: windowWidth * 0.8 }]} />
                <Text style={[styles.description, { fontSize: windowWidth * 0.04, marginVertical: windowHeight * 0.015 }]}>Organize your tasks and boost your productivity!</Text>
            </View>
            <TouchableOpacity style={[styles.button, { paddingVertical: windowHeight * 0.015, marginVertical: windowHeight * 0.03 }]} onPress={() => navigation.navigate('SignupScreen')}>
                <Text style={[styles.buttonText, { fontSize: windowWidth * 0.05 }]}>Get Started</Text>
            </TouchableOpacity>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    content: {
        alignItems: 'center',
        marginBottom: 20,
    },
    image: {
        resizeMode: 'contain',
    },
    title: {
        fontWeight: 'bold',
        textAlign: 'center',
    },
    description: {
        textAlign: 'center',
        color: '#888',
    },
    button: {
        backgroundColor: '#5cb85c',
        paddingHorizontal: 30,
        borderRadius: 5,
        alignItems: 'center'
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
    },
});

export default OnboardingScreen;

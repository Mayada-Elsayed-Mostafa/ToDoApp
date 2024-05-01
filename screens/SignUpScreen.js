import React, { useState, useEffect } from "react";
import { View, Image, StyleSheet, Text, TextInput, TouchableOpacity, ScrollView, Dimensions } from "react-native";
import { CheckBox } from 'react-native-elements';


export default function SignupScreen({ navigation }) {
    const [isChecked, setIsChecked] = useState(false);
    const [dimensions, setDimensions] = useState({ window: Dimensions.get('window') });
    useEffect(() => {
        const subscription = Dimensions.addEventListener("change", ({ window }) => {
            setDimensions({ window });
        });
        return () => subscription?.remove();
    });

    const { window } = dimensions;
    const windowWidth = window.width;
    const windowHeight = window.height;

    return (
        <ScrollView contentContainerStyle={[styles.scrollContainer, { paddingVertical: windowHeight * 0.02 }]}>
            <View style={styles.container}>
                <View style={styles.content}>
                    <Image source={require('../assets/logo-image.png')} style={[styles.image, { width: windowWidth * 0.4, height: windowHeight * 0.2 }]} />
                    <Text style={[styles.title, { fontSize: windowWidth * 0.08, marginBottom: windowHeight * 0.015 }]}>Create your account</Text>
                    <Text style={[styles.label, { fontSize: windowWidth * 0.04, marginStart: windowWidth * 0.01 }]}>Full Name</Text>
                    <TextInput style={[styles.input, { height: windowHeight * 0.06, marginVertical: windowHeight * 0.015 }]} />
                    <Text style={[styles.label, { fontSize: windowWidth * 0.04, marginStart: windowWidth * 0.01 }]}>Email Address</Text>
                    <TextInput style={[styles.input, { height: windowHeight * 0.06, marginVertical: windowHeight * 0.015 }]} keyboardType="email-address" />
                    <Text style={[styles.label, { fontSize: windowWidth * 0.04, marginStart: windowWidth * 0.01 }]}>Password</Text>
                    <TextInput style={[styles.input, { height: windowHeight * 0.06, marginVertical: windowHeight * 0.015 }]} keyboardType="visible-password" />
                    <View style={[styles.agreement, { marginVertical: windowHeight * 0.02 }]}>
                        <CheckBox
                            title="I have read & agreed to DayTask Privacy Policy, Terms & Conditions"
                            checked={isChecked}
                            onPress={() => setIsChecked(!isChecked)}
                            containerStyle={styles.checkboxContainer}
                            textStyle={styles.agreementText}
                        />
                    </View>
                </View>
                <TouchableOpacity style={[styles.button, { paddingVertical: windowHeight * 0.015, marginVertical: windowHeight * 0.03 }]} onPress={() => navigation.navigate('ProfileScreen')}>
                    <Text style={[styles.buttonText, { fontSize: windowWidth * 0.05 }]}>Sign Up</Text>
                </TouchableOpacity>
                <View style={[styles.divider, { marginVertical: windowHeight * 0.02 }]}>
                    <View style={[styles.line, { marginVertical: windowHeight * 0.01 }]}></View>
                    <Text style={[styles.orText, { fontSize: windowWidth * 0.045, marginHorizontal: 10 }]}>Or continue with</Text>
                    <View style={[styles.line, { marginVertical: windowHeight * 0.01 }]}></View>
                </View>
                <Text style={[styles.label, styles.centerText, { color: '#5cb85c' }]}>Google</Text>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Text style={[styles.label, { fontSize: windowWidth * 0.04 }]}>Already have an account?{' '}</Text>
                    <TouchableOpacity onPress={() => navigation.navigate('LoginScreen')}>
                        <Text style={[styles.label, styles.linkText, { fontSize: windowWidth * 0.04 }]}>Log In</Text>
                    </TouchableOpacity>
                </View>

            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    scrollContainer: {
        flexGrow: 1,
        justifyContent: 'space-between',
        backgroundColor: '#fff',
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: "center"
    },
    content: {
        paddingHorizontal: '5%',
        width: '100%'
    },
    image: {
        resizeMode: 'contain',
        alignSelf: "center"
    },
    input: {
        borderWidth: 1,
        padding: 10,
    },
    title: {
        fontWeight: 'bold',
        textAlign: 'center',
    },
    label: {
        color: '#333',
    },
    agreement: {
        width: '100%',
        alignSelf: 'center',
    },
    agreementText: {
        color: '#555',
    },
    checkboxContainer: {
        backgroundColor: 'transparent',
        borderWidth: 0,
        padding: 0,
        margin: 0,
    },
    button: {
        backgroundColor: '#5cb85c',
        width: '85%',
        paddingHorizontal: 30,
        borderRadius: 5,
        alignItems: 'center'
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
    },
    divider: {
        flexDirection: 'row',
        alignItems: "center",
    },
    line: {
        borderBottomColor: '#888',
        borderBottomWidth: 1,
        width: '25%',
    },
    orText: {
        color: '#888',
    },
    centerText: {
        alignSelf: 'center'
    },
    linkText: {
        color: '#5cb85c',
    }
});
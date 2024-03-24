import React from "react";
import { View, Image, StyleSheet, Text, TextInput, TouchableOpacity, ScrollView, Dimensions } from "react-native";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function LoginScreen({ navigation }) {
    return (
        <ScrollView contentContainerStyle={styles.scrollContainer}>
            <View style={styles.container}>
                <View style={styles.content}>
                    <Image source={require('../assets/logo-image.png')} style={styles.image} />
                    <Text style={styles.title}>Welcome Back!</Text>
                    <Text style={styles.regularText}>Email Address</Text>
                    <TextInput style={styles.input} keyboardType="email-address" />
                    <Text style={styles.regularText}>Password</Text>
                    <TextInput style={styles.input} keyboardType="visible-password" />
                    <TouchableOpacity >
                        <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('HomeScreen')}>
                    <Text style={styles.buttonText}>Log In</Text>
                </TouchableOpacity>
                <View style={styles.row}>
                    <View style={styles.line}></View>
                    <Text style={styles.orText}>Or continue with</Text>
                    <View style={styles.line}></View>
                </View>
                <Text style={[styles.regularText, styles.centerText]}>Google</Text>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Text style={[styles.regularText, styles.centerText]}>Don’t have an account?{' '}</Text>
                    <TouchableOpacity onPress={() => navigation.navigate('SignupScreen')}>
                        <Text style={[styles.regularText, styles.centerText, styles.signUpText]}>Sign Up</Text>
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
        paddingVertical: 8,
        backgroundColor: '#fff',
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: "center"
    },
    content: {
        marginVertical: windowHeight * 0.03,
        paddingHorizontal: windowWidth * 0.05,
        width: '100%'
    },
    image: {
        width: windowWidth * 0.4,
        height: windowHeight * 0.2,
        resizeMode: 'contain',
        alignSelf: "center"
    },
    input: {
        height: windowHeight * 0.06,
        width: '100%',
        marginVertical: windowHeight * 0.015,
        borderWidth: 1,
        padding: 10,
    },
    title: {
        fontSize: windowWidth * 0.08,
        fontWeight: 'bold',
        marginBottom: windowHeight * 0.015,
        textAlign: 'center',
    },
    regularText: {
        fontSize: windowWidth * 0.04,
        color: '#333',
        marginStart: windowWidth * 0.01,
    },
    forgotPasswordText: {
        fontSize: windowWidth * 0.04,
        textAlign: 'right',
        alignSelf: 'flex-end',
        marginEnd: windowWidth * 0.02,
        marginBottom: windowHeight * 0.01,
        color: '#5cb85c',
    },
    button: {
        backgroundColor: '#5cb85c',
        paddingVertical: windowHeight * 0.015,
        width: '90%',
        marginVertical: windowHeight * 0.03,
        borderRadius: 5,
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        fontSize: windowWidth * 0.05,
        fontWeight: 'bold',
    },
    line: {
        borderBottomColor: '#888',
        borderBottomWidth: 1,
        width: '30%',
        marginVertical: windowHeight * 0.01,
    },
    orText: {
        fontSize: windowWidth * 0.045,
        marginHorizontal: windowWidth * 0.01,
        color: '#888',
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: windowHeight * 0.01,
    },
    centerText: {
        alignSelf: 'center',
    },
    signUpText: {
        color: '#5cb85c',
    },
});

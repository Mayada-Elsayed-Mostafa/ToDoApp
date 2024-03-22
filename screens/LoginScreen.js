import React from "react";
import { View, Image, StyleSheet, Text, TextInput, TouchableOpacity } from "react-native";

export default function LoginScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <Image source={require('../assets/logo-image.png')} style={styles.image} />
                <Text style={styles.title}>Welcome Back!</Text>
                <Text style={styles.regularText}>Email Address</Text>
                <TextInput style={styles.input} keyboardType="email-address" />
                <Text style={styles.regularText}>Password</Text>
                <TextInput style={styles.input} keyboardType="visible-password" />
                <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
            </View>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('HomeScreen')}>
                <Text style={styles.buttonText}>Log In</Text>
            </TouchableOpacity>
            <View style={styles.row}>
                <View style={styles.line}></View>
                <Text style={styles.orText}>Or continue with</Text>
                <View style={styles.line}></View>
            </View>
            <Text style={[styles.regularText, { alignSelf: 'center' }]}>Google</Text>
            <Text style={[styles.regularText, { alignSelf: 'center' }]}>Don’t have an account? Sign Up</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    content: {
        marginVertical: 24,
        marginHorizontal: 12,
    },
    image: {
        width: 100,
        height: 100,
        resizeMode: 'contain',
        alignSelf: "center"
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
        textAlign: 'center',
    },
    regularText: {
        fontSize: 16,
        color: '#333',
        marginStart: 16,
    },
    forgotPasswordText: {
        textAlign: 'right',
        alignSelf: 'flex-end',
        marginEnd: 16,
        marginBottom: 10,
    },
    button: {
        backgroundColor: '#5cb85c',
        paddingVertical: 12,
        width: '85%',
        paddingHorizontal: 30,
        margin: 24,
        borderRadius: 5,
        alignItems: 'center'
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
    line: {
        borderBottomColor: '#888',
        borderBottomWidth: 1,
        width: '30%',
        marginVertical: 10,
    },
    orText: {
        marginHorizontal: 10,
        color: '#888',
    },
    row: {
        flexDirection: 'row',
        alignItems: "center",
        margin: 8,
    },
});
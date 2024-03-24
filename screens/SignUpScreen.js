import React from "react";
import { View, Image, StyleSheet, Text, TextInput, TouchableOpacity, ScrollView, Dimensions } from "react-native";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function SignupScreen({ navigation }) {
    return (
        <ScrollView contentContainerStyle={styles.scrollContainer}>
            <View style={styles.container}>
                <View style={styles.content}>
                    <Image source={require('../assets/logo-image.png')} style={styles.image} />
                    <Text style={styles.title}>Create your account</Text>
                    <Text style={styles.regularText}>Full Name</Text>
                    <TextInput style={styles.input} />
                    <Text style={styles.regularText}>Email Address</Text>
                    <TextInput style={styles.input} keyboardType="email-address" />
                    <Text style={styles.regularText}>Password</Text>
                    <TextInput style={styles.input} keyboardType="visible-password" />
                    <View style={styles.agreement}>
                        <Text style={styles.agreementText}>I have read & agreed to DayTask Privacy Policy, Terms & Condition</Text>
                    </View>
                </View>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('ProfileScreen')}>
                    <Text style={styles.buttonText}>Sign Up</Text>
                </TouchableOpacity>
                <View style={styles.row}>
                    <View style={styles.line}></View>
                    <Text style={styles.orText}>Or continue with</Text>
                    <View style={styles.line}></View>
                </View>
                <Text style={[styles.regularText, styles.centerText]}>Google</Text>
                <Text style={[styles.regularText, styles.centerText]}>Already have an account? Log In</Text>
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
    agreement: {
        width: '90%',
        alignSelf: 'center',
        marginVertical: windowHeight * 0.02,
    },
    agreementText: {
        fontSize: windowWidth * 0.035,
        color: '#555',
    },
    button: {
        backgroundColor: '#5cb85c',
        paddingVertical: windowHeight * 0.015,
        width: '85%',
        paddingHorizontal: 30,
        marginVertical: windowHeight * 0.03,
        borderRadius: 5,
        alignItems: 'center'
    },
    buttonText: {
        color: '#fff',
        fontSize: windowWidth * 0.05,
        fontWeight: 'bold',
    },
    line: {
        borderBottomColor: '#888',
        borderBottomWidth: 1,
        width: '25%',
        marginVertical: windowHeight * 0.01,
    },
    orText: {
        fontSize: windowWidth * 0.045,
        marginHorizontal: 10,
        color: '#888',
    },
    row: {
        flexDirection: 'row',
        alignItems: "center",
        marginVertical: windowHeight * 0.02,
    },
    centerText: {
        alignSelf: 'center'
    }
});

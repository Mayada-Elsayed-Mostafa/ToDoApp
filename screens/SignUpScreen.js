import React, { useState } from "react";
import { View, Image, StyleSheet, Text, TextInput, TouchableOpacity, ScrollView, Dimensions } from "react-native";
import { CheckBox } from 'react-native-elements';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function SignupScreen({ navigation }) {
    const [isChecked, setIsChecked] = useState(false);

    return (
        <ScrollView contentContainerStyle={styles.scrollContainer}>
            <View style={styles.container}>
                <View style={styles.content}>
                    <Image source={require('../assets/logo-image.png')} style={styles.image} />
                    <Text style={styles.title}>Create your account</Text>
                    <Text style={styles.label}>Full Name</Text>
                    <TextInput style={styles.input} />
                    <Text style={styles.label}>Email Address</Text>
                    <TextInput style={styles.input} keyboardType="email-address" />
                    <Text style={styles.label}>Password</Text>
                    <TextInput style={styles.input} keyboardType="visible-password" />
                    <View style={styles.agreement}>
                        <CheckBox
                            title="I have read & agreed to DayTask Privacy Policy, Terms & Conditions"
                            checked={isChecked}
                            onPress={() => setIsChecked(!isChecked)}
                            containerStyle={styles.checkboxContainer}
                            textStyle={styles.agreementText}
                        />
                    </View>
                </View>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('HomeScreen')}>
                    <Text style={styles.buttonText}>Sign Up</Text>
                </TouchableOpacity>
                <View style={styles.divider}>
                    <View style={styles.line}></View>
                    <Text style={styles.orText}>Or continue with</Text>
                    <View style={styles.line}></View>
                </View>
                <Text style={[styles.label, styles.centerText]}>Google</Text>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Text style={[styles.label]}>Already have an account?{' '}</Text>
                    <TouchableOpacity onPress={() => navigation.navigate('LoginScreen')}>
                        <Text style={[styles.label, styles.linkText]}>Log In</Text>
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
    label: {
        fontSize: windowWidth * 0.04,
        color: '#333',
        marginStart: windowWidth * 0.01,
    },
    agreement: {
        width: '100%',
        alignSelf: 'center',
        marginVertical: windowHeight * 0.02,
    },
    agreementText: {
        fontSize: windowWidth * 0.035,
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
    divider: {
        flexDirection: 'row',
        alignItems: "center",
        marginVertical: windowHeight * 0.02,
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
    centerText: {
        alignSelf: 'center'
    },
    linkText: {
        color: '#5cb85c',
    }
});

import React from "react";
import { View, Text, Image, StyleSheet, StatusBar, TouchableOpacity, ScrollView } from "react-native";

import { Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function ProfileScreen() {
    return (
        <ScrollView contentContainerStyle={styles.scrollContainer}>
            <View style={styles.container}>
                <Image style={styles.profileImage} source={require('../assets/profile-image.png')} />

                <View style={styles.section}>
                    <View style={styles.row}>
                        <Image source={require('../assets/profile-icon.png')} style={styles.rightIcon} />
                        <Text style={styles.contentText}>Mayada Elsayed</Text>
                        <Image source={require('../assets/edit-icon.png')} style={styles.leftIcon} />
                    </View>
                    <View style={styles.row}>
                        <Image source={require('../assets/email-icon.png')} style={styles.rightIcon} />
                        <Text style={styles.contentText}>MayadaElsayed@gmail.com</Text>
                    </View>
                    <View style={styles.row}>
                        <Image source={require('../assets/password-icon.png')} style={styles.rightIcon} />
                        <Text style={styles.contentText}>********</Text>
                    </View>
                    <View style={styles.row}>
                        <Image source={require('../assets/my-tasks-icon.png')} style={styles.rightIcon} />
                        <Text style={styles.contentText}>My Tasks</Text>
                    </View>
                    <View style={styles.row}>
                        <Image source={require('../assets/privacy-icon.png')} style={styles.rightIcon} />
                        <Text style={styles.contentText}>Privacy</Text>
                    </View>
                    <View style={styles.row}>
                        <Image source={require('../assets/setting-icon.png')} style={styles.rightIcon} />
                        <Text style={styles.contentText}>Setting</Text>
                    </View>
                </View>

                <TouchableOpacity style={styles.button} onPress={() => console.log("Logout pressed")}>
                    <Text style={styles.buttonText}>Logout</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    scrollContainer: {
        flexGrow: 1,
        justifyContent: 'space-between',
        marginVertical: 10,
        marginHorizontal: 20,
    },
    container: {
        flex: 1,
    },
    rightIcon: {
        height: windowHeight * 0.05,
        resizeMode: 'contain',
    },
    profileImage: {
        width: windowWidth * 0.3,
        height: windowWidth * 0.3,
        borderRadius: windowWidth * 0.15,
        marginTop: windowHeight * 0.05,
        borderWidth: 4,
        borderColor: '#fff',
        alignSelf: "center"
    },
    profileInfo: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: windowHeight * 0.02,
    },
    username: {
        fontSize: 24,
        fontWeight: 'bold',
        marginLeft: 10,
        color: '#333',
    },
    section: {
        width: '100%',
        alignSelf: "center",
        marginVertical: 20,
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
        padding: 8,
        backgroundColor: '#e3f2fd',
    },
    contentText: {
        fontSize: 16,
        marginLeft: 10,
        color: '#555',
    },
    leftIcon: {
        position: 'absolute',
        right: 0,
        height: windowHeight * 0.05,
        resizeMode: 'contain',
    },
    button: {
        backgroundColor: '#dc3545',
        paddingVertical: 12,
        paddingHorizontal: 30,
        borderRadius: 5,
        width: '100%',
        bottom: 0,
        alignSelf: "center",
        position: "absolute"

    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
        alignSelf: 'center'
    },
});

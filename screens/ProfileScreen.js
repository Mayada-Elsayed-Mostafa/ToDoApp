import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView, useWindowDimensions } from "react-native";

export default function ProfileScreen() {

    const windowWidth = useWindowDimensions().width;
    const windowHeight = useWindowDimensions().height;
    return (
        <ScrollView contentContainerStyle={[styles.scrollContainer, { paddingVertical: windowHeight * 0.02 }]}>
            <View style={styles.container}>
                <Image style={[styles.profileImage, {
                    width: windowWidth * 0.3, height: windowWidth * 0.3,
                    borderRadius: windowWidth * 0.15,
                    marginTop: windowHeight * 0.05,
                }]} source={require('../assets/profile-image.png')} />

                <View style={styles.content}>
                    <View style={styles.row}>
                        <Image source={require('../assets/profile-icon.png')} style={styles.rightIcon} />
                        <Text style={styles.contentText}>Mayada Elsayed</Text>
                        <Image source={require('../assets/edit-icon.png')} style={[styles.leftIcon, { height: windowHeight * 0.05, }]} />
                    </View>
                    <View style={styles.row}>
                        <Image source={require('../assets/email-icon.png')} style={[styles.rightIcon, {height: windowHeight * 0.05}]} />
                        <Text style={styles.contentText}>MayadaElsayed@gmail.com</Text>
                    </View>
                    <View style={styles.row}>
                        <Image source={require('../assets/password-icon.png')} style={[styles.rightIcon, {height: windowHeight * 0.05}]} />
                        <Text style={styles.contentText}>********</Text>
                    </View>
                    <View style={styles.row}>
                        <Image source={require('../assets/my-tasks-icon.png')} style={[styles.rightIcon, {height: windowHeight * 0.05}]} />
                        <Text style={styles.contentText}>My Tasks</Text>
                    </View>
                    <View style={styles.row}>
                        <Image source={require('../assets/privacy-icon.png')} style={[styles.rightIcon, {height: windowHeight * 0.05}]} />
                        <Text style={styles.contentText}>Privacy</Text>
                    </View>
                    <View style={styles.row}>
                        <Image source={require('../assets/setting-icon.png')} style={[styles.rightIcon, {height: windowHeight * 0.05}]} />
                        <Text style={styles.contentText}>Setting</Text>
                    </View>
                </View>
                {/* Signup-like content ends here */}

                <TouchableOpacity style={[styles.button, { paddingVertical: windowHeight * 0.015, marginVertical: windowHeight * 0.03 }]} onPress={() => console.log("Logout pressed")}>
                    <Text style={[styles.buttonText, { fontSize: windowWidth * 0.05 }]}>Logout</Text>
                </TouchableOpacity>
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
    rightIcon: {
        resizeMode: 'contain',
    },
    profileImage: {
        borderWidth: 4,
        borderColor: '#fff',
        alignSelf: "center"
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
        resizeMode: 'contain',
    },
    button: {
        backgroundColor: '#dc3545',
        width: '85%',
        paddingHorizontal: 30,
        borderRadius: 5,
        alignItems: 'center'
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
    },
});

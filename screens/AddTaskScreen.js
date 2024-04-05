import React, { useState, useEffect } from "react";
import { View, Text, TextInput, Pressable, StyleSheet, Alert } from "react-native";
import DateTimePicker from '@react-native-community/datetimepicker';
import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase('tasks.db');

export default function AddTaskScreen({ navigation }) {

    const [taskTitle, setTaskTitle] = useState("");
    const [taskDescription, setTaskDescription] = useState("");
    const [date, setDate] = useState(new Date());
    const [time, setTime] = useState(new Date());
    const [showDatePicker, setShowDatePicker] = useState(false);
    const [showTimePicker, setShowTimePicker] = useState(false);

    useEffect(() => {
        db.transaction(tx => {
            tx.executeSql(
                'CREATE TABLE IF NOT EXISTS tasks (id INTEGER PRIMARY KEY AUTOINCREMENT, title TEXT, description TEXT, date TEXT, time TEXT);'
            );
        });
    }, []);

    const handleDateChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShowDatePicker(false);
        setDate(currentDate);
    };

    const handleTimeChange = (event, selectedTime) => {
        const currentTime = selectedTime || time;
        setShowTimePicker(false);
        setTime(currentTime);
    };

    const handleCreateTask = () => {
        db.transaction(tx => {
            tx.executeSql(
                'INSERT INTO tasks (title, description, date, time) VALUES (?, ?, ?, ?)',
                [taskTitle, taskDescription, date.toISOString(), time.toISOString()],
                (_, { rowsAffected }) => {
                    if (rowsAffected > 0) {
                        console.log('Task created successfully');
                        setTaskTitle("");
                        setTaskDescription("");
                        setDate(new Date());
                        setTime(new Date());
                    } else {
                        console.log('Failed to create task');
                    }
                },
                (_, error) => {
                    console.error('Error inserting task:', error);
                }
            );
        });
    };

    return (
        <View style={styles.container}>
            <Text style={styles.label}>Task Title</Text>
            <TextInput
                style={styles.input}
                value={taskTitle}
                onChangeText={setTaskTitle}
            />

            <Text style={styles.label}>Task Description</Text>
            <TextInput
                style={[styles.input, styles.multilineInput]}
                multiline
                value={taskDescription}
                onChangeText={setTaskDescription}
            />
            <Text style={[styles.label, { color: 'black' }]}>Select Date:</Text>
            <Pressable style={styles.dateButton} onPress={() => setShowDatePicker(true)}>
                <Text style={styles.buttonText}>{date.toDateString()}</Text>
            </Pressable>
            {showDatePicker && (
                <DateTimePicker
                    value={date}
                    mode="date"
                    display="default"
                    onChange={handleDateChange}
                />
            )}

            <Text style={[styles.label, { color: 'black' }]}>Select Time:</Text>
            <Pressable style={styles.timeButton} onPress={() => setShowTimePicker(true)}>
                <Text style={styles.buttonText}>{time.toLocaleTimeString()}</Text>
            </Pressable>

            {showTimePicker && (
                <DateTimePicker
                    value={time}
                    mode="time"
                    display="spinner"
                    onChange={handleTimeChange}
                />
            )}

            <Pressable
                style={styles.button} onPress={() => {
                    handleCreateTask();
                    Alert.alert("Task created successfully");
                    navigation.navigate('Home');
                }}>
                <Text style={styles.buttonText}>Create</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20,
        backgroundColor: 'white',
    },
    label: {
        fontSize: 16,
        marginBottom: 5,
        marginTop: 16,
        fontWeight: "bold"
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        padding: 10,
        marginBottom: 10,
        fontSize: 16,
    },
    multilineInput: {
        height: 100,
        textAlignVertical: 'top', // for multiline input
    },
    button: {
        backgroundColor: '#5cb85c',
        width: '100%',
        padding: 15,
        marginVertical: 18,
        borderRadius: 5,
        alignItems: 'center',
        alignSelf: "center",
        position: "absolute",
        bottom: 0
    },
    dateButton: {
        backgroundColor: 'lightblue',
        padding: 15,
        borderRadius: 5,
        marginBottom: 10,
    },
    timeButton: {
        backgroundColor: 'lightgreen',
        padding: 15,
        borderRadius: 5,
        marginBottom: 10,
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
    },
});

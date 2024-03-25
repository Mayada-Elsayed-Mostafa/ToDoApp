import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import DateTimePicker from '@react-native-community/datetimepicker';

const AddTaskScreen = () => {
    const [taskTitle, setTaskTitle] = useState("");
    const [taskDescription, setTaskDescription] = useState("");
    const [date, setDate] = useState(new Date());
    const [time, setTime] = useState(new Date());
    const [showDatePicker, setShowDatePicker] = useState(false);
    const [showTimePicker, setShowTimePicker] = useState(false);

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
        // Handle task creation
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
            <TouchableOpacity style={styles.dateButton} onPress={() => setShowDatePicker(true)}>
                <Text style={styles.buttonText}>{date.toDateString()}</Text>
            </TouchableOpacity>
            {showDatePicker && (
                <DateTimePicker
                    value={date}
                    mode="date"
                    display="default"
                    onChange={handleDateChange}
                />
            )}

            <Text style={[styles.label, { color: 'black' }]}>Select Time:</Text>
            <TouchableOpacity style={styles.timeButton} onPress={() => setShowTimePicker(true)}>
                <Text style={styles.buttonText}>{time.toLocaleTimeString()}</Text>
            </TouchableOpacity>

            {showTimePicker && (
                <DateTimePicker
                    value={time}
                    mode="time"
                    display="spinner"
                    onChange={handleTimeChange}
                />
            )}

            <TouchableOpacity style={styles.button} onPress={handleCreateTask}>
                <Text style={styles.buttonText}>Create</Text>
            </TouchableOpacity>
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
        marginBottom: 24,
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

export default AddTaskScreen;

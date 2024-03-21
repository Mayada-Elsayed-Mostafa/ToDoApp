import React, { useState } from 'react';
import { View, TextInput, Button, Alert } from 'react-native';

const AddTask = ({ onAddTask }) => {
    // Define state to hold the task title
    const [taskTitle, setTaskTitle] = useState('');

    // Function to handle task addition
    const handleAddTask = () => {
        // Check if task title is not empty
        if (taskTitle.trim() === '') {
            Alert.alert('Error', 'Please enter a task title');
            return;
        }

        // Call the onAddTask function passed from parent component with the new task title
        onAddTask(taskTitle);

        // Clear the input field after adding the task
        setTaskTitle('');
    };

    return (
        <View style={{ padding: 10 }}>
            <TextInput
                style={{ borderWidth: 1, borderColor: '#ccc', padding: 10, marginBottom: 10 }}
                placeholder="Enter task title"
                value={taskTitle}
                onChangeText={text => setTaskTitle(text)}
            />
            <Button title="Add Task" onPress={handleAddTask} />
        </View>
    );
};

export default AddTask;

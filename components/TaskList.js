import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';

const TaskList = () => {
    // Define state to hold tasks data
    const [tasks, setTasks] = useState([]);

    // Dummy tasks data for demonstration
    const dummyTasks = [
        { id: 1, title: 'Task 1', completed: false },
        { id: 2, title: 'Task 2', completed: true },
        { id: 3, title: 'Task 3', completed: false },
    ];

    useEffect(() => {
        // Fetch tasks data from an API or local storage
        // For demonstration, using dummyTasks as initial data
        setTasks(dummyTasks);
    }, []);

    // Function to render individual task items
    const renderItem = ({ item }) => (
        <TouchableOpacity style={{ padding: 10 }}>
            <Text style={{ textDecorationLine: item.completed ? 'line-through' : 'none' }}>
                {item.title}
            </Text>
        </TouchableOpacity>
    );

    return (
        <View style={{ flex: 1 }}>
            <FlatList
                data={tasks}
                renderItem={renderItem}
                keyExtractor={item => item.id.toString()}
                ListEmptyComponent={<Text>No tasks available</Text>}
            />
        </View>
    );
};

export default TaskList;

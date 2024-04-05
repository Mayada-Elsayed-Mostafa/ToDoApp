import React, { useState, useEffect } from 'react';
import { Text, View, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase('tasks.db');

const TaskList = ({ tasks }) => {
    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return date.toDateString();
    };

    const formatTime = (timeString) => {
        const time = new Date(timeString);
        return time.toLocaleTimeString();
    };

    return (
        <FlatList
            data={tasks}
            renderItem={({ item }) => (
                <TouchableOpacity style={styles.taskItem}>
                    <Text style={[styles.regularText, styles.taskTitle]}>{item.title}</Text>
                    <Text style={styles.regularText}>Date: {formatDate(item.date)}</Text>
                    <Text style={styles.regularText}>Time: {formatTime(item.time)}</Text>
                </TouchableOpacity>
            )}
            keyExtractor={(item) => item.id.toString()}
        />
    );
};

const HomeScreen = ({ navigation }) => {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        // Fetch tasks from the database
        db.transaction((tx) => {
            tx.executeSql(
                'SELECT * FROM tasks',
                [],
                (_, { rows: { _array } }) => {
                    setTasks(_array);
                },
                (_, error) => {
                    console.error('Error fetching tasks:', error);
                }
            );
        });
    }, []);

    return (
        <View style={styles.container}>
            <TaskList tasks={tasks} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20,
        paddingVertical: 18,
        backgroundColor: 'white',
    },
    taskItem: {
        borderRadius: 8,
        backgroundColor: '#5cb85c',
        padding: 10,
        marginBottom: 10,
    },
    regularText: {
        color: 'white',
        fontSize: 14,
    },
    taskTitle: {
        fontWeight: 'bold',
        fontSize: 18,
    },
});

export default HomeScreen;

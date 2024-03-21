import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

const TaskItem = ({ task, onPress, onLongPress }) => {
    return (
        <TouchableOpacity
            style={{ padding: 10, backgroundColor: task.completed ? '#ddd' : 'transparent' }}
            onPress={onPress}
            onLongPress={onLongPress}>
            <Text style={{ textDecorationLine: task.completed ? 'line-through' : 'none' }}>
                {task.title}
            </Text>
        </TouchableOpacity>
    );
};

export default TaskItem;

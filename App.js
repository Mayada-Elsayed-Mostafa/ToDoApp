import React, { useState } from 'react';
import { View } from 'react-native';
import TaskList from './TaskList';
import AddTask from './AddTask';

export default function App() {
  // Define state to hold tasks data
  const [tasks, setTasks] = useState([]);

  // Function to handle task addition
  const handleAddTask = (taskTitle) => {
    const newTask = { id: Math.random().toString(), title: taskTitle, completed: false };
    setTasks([...tasks, newTask]);
  };

  // Function to toggle task completion status
  const toggleTaskCompletion = (taskId) => {
    setTasks(tasks.map(task => {
      if (task.id === taskId) {
        return { ...task, completed: !task.completed };
      }
      return task;
    }));
  };

  // Function to delete a task
  const deleteTask = (taskId) => {
    setTasks(tasks.filter(task => task.id !== taskId));
  };

  return (
    <View style={{ flex: 1, padding: 20 }}>
      {/* AddTask component for adding new tasks */}
      <AddTask onAddTask={handleAddTask} />

      {/* TaskList component to display existing tasks */}
      <TaskList
        tasks={tasks}
        toggleTaskCompletion={toggleTaskCompletion}
        deleteTask={deleteTask}
      />
    </View>
  );
}

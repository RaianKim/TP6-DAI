import React, { useState, useEffect } from 'react';
import Body from './src/components/Body.js'; 
import { StyleSheet, StatusBar } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-async-storage/async-storage';

const App = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const loadTodos = async () => {
      try {
        const todosString = await AsyncStorage.getItem('todos');
        if (todosString) {
          setTodos(JSON.parse(todosString));
        }
      } catch (error) {
        console.error("Failed to load todos from AsyncStorage:", error);
      }
    };

    loadTodos();
  }, []);

  useEffect(() => {
    const saveTodos = async () => {
      try {
        await AsyncStorage.setItem('todos', JSON.stringify(todos));
      } catch (error) {
        console.error("Failed to save todos to AsyncStorage:", error);
      }
    };

    saveTodos();
  }, [todos]);

  return (
    <GestureHandlerRootView style={styles.container}>
      <Body todos={todos} setTodos={setTodos} />
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default App;

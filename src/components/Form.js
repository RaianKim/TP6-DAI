import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet, Alert } from 'react-native';

const Form = ({ setTodos, todos }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const agregarTarea = () => {
    const trimmedTitle = title.trim();
    const trimmedDescription = description.trim();
    
    if (trimmedTitle && trimmedDescription) {
      const timestamp = new Date().getTime();
      const newTodo = { 
        title: trimmedTitle, 
        description: trimmedDescription, 
        created: timestamp, 
        completed: null 
      };
      setTodos([...todos, newTodo]);
      setTitle('');
      setDescription('');
    } else {
      Alert.alert("Debes ingresar tanto un título como una descripción para la tarea.");
    }
  };

  return (
    <View style={styles.formContainer}>
      <TextInput
        style={styles.input}
        placeholder="Título de la tarea"
        value={title}
        onChangeText={setTitle}
      />
      <TextInput
        style={styles.input}
        placeholder="Descripción de la tarea"
        value={description}
        onChangeText={setDescription}
      />
      <TouchableOpacity onPress={agregarTarea} style={styles.buttonAgregar}>
        <Text style={styles.buttonText}>Agregar</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  formContainer: {
    marginVertical: 16,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 8,
  },
  buttonAgregar: {
    backgroundColor: '#5c95ff',
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Form;

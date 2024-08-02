import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Alert } from 'react-native';

const TareaInput = ({ tareas, setTareas }) => {
  const agregarTarea = () => {
    if (texto.trim() === '') {
      Alert.alert('Error', 'Por favor ingresa una tarea');
      return;
    }

    setTareas([
      ...tareas,
      {
        Texto: texto,
        Check: false,
        TiempoCreado: Date.now(),
        TiempoTerminado: null,
      },
    ]);
    setTexto('');
  };

  const [texto, setTexto] = useState('');

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Escribí lo que tenés que hacer acá"
        value={texto}
        onChangeText={setTexto}
      />
      <Button title="Agregar" onPress={agregarTarea} color="green" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  input: {
    flex: 1,
    height: 40,
    borderColor: 'black',
    borderWidth: 1,
    borderTopLeftRadius: 25,
    borderBottomLeftRadius: 25,
    paddingHorizontal: 10,
  },
  button: {
    borderTopRightRadius: 25,
    borderBottomRightRadius: 25,
    backgroundColor: 'green',
    paddingHorizontal: 20,
    justifyContent: 'center',
  },
});

export default TareaInput;

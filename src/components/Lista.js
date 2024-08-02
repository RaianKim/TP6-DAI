import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { Swipeable } from 'react-native-gesture-handler';

const Tarea = ({
  Texto = "default tarea",
  Check = false,
  TiempoCreado = Date.now(),
  TiempoTerminado = null,
  tareas,
  setTareas,
}) => {
  const [chequeado, setChequeado] = useState(Check);

  const cambioEstadoCheck = () => {
    const indexBuscado = tareas.findIndex((t) => t.TiempoCreado === TiempoCreado);
    if (indexBuscado !== -1) {
      const updatedTareas = [...tareas];
      updatedTareas[indexBuscado].TiempoTerminado = ((Date.now() - TiempoCreado) / 1000).toFixed(1);
      updatedTareas[indexBuscado].Check = !updatedTareas[indexBuscado].Check;
      setTareas(updatedTareas);
      setChequeado(!chequeado);
    }
  };

  const eliminarTarea = () => {
    Alert.alert(
      "Eliminar tarea",
      "¿Estás seguro de eliminar esta tarea?",
      [
        {
          text: "Cancelar",
          style: "cancel"
        },
        {
          text: "Eliminar",
          onPress: () => {
            const updatedTareas = tareas.filter(e => e.TiempoCreado !== TiempoCreado);
            setTareas(updatedTareas);
          }
        }
      ]
    );
  };

  const renderRightActions = () => (
    <TouchableOpacity onPress={eliminarTarea} style={styles.deleteButton}>
      <Text style={styles.deleteText}>Eliminar</Text>
    </TouchableOpacity>
  );

  return (
    <Swipeable renderRightActions={renderRightActions}>
      <View style={styles.centrar}>
        <TouchableOpacity style={styles.checkboxContainer} onPress={cambioEstadoCheck}>
          <Text style={chequeado ? styles.checkeado : styles.noCheckeado}>
            {chequeado ? '✓' : '□'}
          </Text>
          <Text style={chequeado ? styles.checkeado : styles.noCheckeado}>{Texto}</Text>
        </TouchableOpacity>
      </View>
    </Swipeable>
  );
};

const styles = StyleSheet.create({
  checkeado: {
    textDecorationLine: 'line-through',
    color: 'gray',
  },
  noCheckeado: {
    color: 'black',
  },
  centrar: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: 'black',
    borderWidth: 2.5,
    borderRadius: 25,
    height: 100,
    marginBottom: 10,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    marginHorizontal: 20,
  },
  deleteButton: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
    width: 100,
    height: '100%',
  },
  deleteText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default Tarea;

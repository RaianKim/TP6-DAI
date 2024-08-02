import React, { useState } from 'react';
import { StyleSheet, Text, View, CheckBox, Button, Alert, TouchableOpacity } from 'react-native';

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
    let indexBuscado = tareas.findIndex((t) => t.TiempoCreado === TiempoCreado);
    tareas[indexBuscado].TiempoTerminado = ((Date.now() - TiempoCreado) / 1000).toFixed(1);
    tareas[indexBuscado].Check = !tareas[indexBuscado].Check;
    setTareas([...tareas]);
    setChequeado(!chequeado);
  };

  const eliminarTarea = () => {
    Alert.alert(
      "Eliminar tarea",
      "¿Está seguro de eliminar esta tarea?",
      [
        {
          text: "Cancelar",
          style: "cancel"
        },
        {
          text: "Eliminar",
          onPress: () => {
            setTareas(tareas.filter(e => e.TiempoCreado !== TiempoCreado));
          }
        }
      ]
    );
  };

  return (
    <View style={styles.tarea}>
      <View style={styles.centrar}>
        <View style={styles.QWE}>
          <CheckBox value={chequeado} onValueChange={cambioEstadoCheck} />
          <Text style={chequeado ? styles.checkeado : null}>{Texto}</Text>
        </View>
        <TouchableOpacity onPress={eliminarTarea} style={styles.botonEliminar}>
          <Text style={styles.textoBoton}>X</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  checkeado: {
    textDecorationLine: 'line-through',
    color: 'gray',
  },
  centrar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderColor: 'black',
    borderRadius: 25,
    borderWidth: 2.5,
    height: 100,
    padding: 10,
    marginBottom: 10,
  },
  tarea: {
    marginLeft: 0,
  },
  QWE: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  botonEliminar: {
    borderRadius: 50,
    backgroundColor: 'red',
    padding: 10,
  },
  textoBoton: {
    color: 'white',
  },
});

export default Tarea;

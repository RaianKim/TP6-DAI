import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import Lista from './src/components/Lista';
import TareaInput from './src/components/TareaInput';

export default function App() {
  const [tareas, setTareas] = useState([
    {
      Texto: "Limpiar mi cuarto",
      Check: false,
      TiempoCreado: Date.now(),
      TiempoTerminado: 10
    },
    // {
    //   Texto: "Lavar la ropa",
    //   Check: true,
    //   TiempoCreado: Date.now() + 100,
    //   TiempoTerminado: 10
    // }
  ]);

  return (
    <View style={styles.container}>
      <TareaInput tareas={tareas} setTareas={setTareas} />
      <Lista tareas={tareas} setTareas={setTareas} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white ',
  },
});

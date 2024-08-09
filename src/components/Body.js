import React from 'react';
import { View, StyleSheet } from 'react-native';
import Title from './Title';
import Form from './Form';
import Todos from './Todos';

const Body = ({ todos, setTodos }) => {
  return (
    <View style={styles.container}>
      <Title />
      <Form setTodos={setTodos} todos={todos} />
      <Todos todos={todos} setTodos={setTodos} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
});

export default Body;

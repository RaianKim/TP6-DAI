import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import Todo from './Todo';

const Todos = ({ todos, setTodos }) => {
  return (
    <View style={styles.todosContainer}>
      <FlatList
        data={todos}
        renderItem={({ item }) => <Todo setTodos={setTodos} todos={todos} todo={item} />}
        keyExtractor={(item) => item.created.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  todosContainer: {
    marginTop: 16,
    flex: 1,  
  },
});

export default Todos;


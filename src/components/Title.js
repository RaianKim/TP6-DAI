import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const Title = () => {
  return (
    <View style={styles.titleContainer}>
      <Text style={styles.titleText}>TODO LIST</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  titleContainer: {
    alignItems: 'center',
    marginVertical: 16,
    padding: 40,
  },
  titleText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default Title;

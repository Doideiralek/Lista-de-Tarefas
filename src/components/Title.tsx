import React from 'react';
import { Text, StyleSheet } from 'react-native';

export default function Title() {
  return <Text style={styles.title}>Tarefas</Text>;
}

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    fontWeight: 'bolder',
    marginBottom: 22
  }
});

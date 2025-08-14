import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

interface Props {
  onPress: () => void;
}

export default function ButtonAdd({ onPress }: Props) {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.text}>Adicionar</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#4a4cff',
    paddingHorizontal: 15,
    justifyContent: 'center',
    borderRadius: 5,
    marginLeft: 8
  },
  text: {
    color: '#fff',
    fontWeight: 'bold'
  }
});

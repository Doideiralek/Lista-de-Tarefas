import React from 'react';
import { TouchableOpacity, View, StyleSheet } from 'react-native';

interface Props {
  checked: boolean;
  onPress: () => void;
}

export default function Checkbox({ checked, onPress }: Props) {
  return (
    <TouchableOpacity style={styles.checkbox} onPress={onPress}>
      {checked && <View style={styles.inner} />}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  checkbox: {
    width: 20,
    height: 20,
    borderWidth: 1,
    borderColor: '#555',
    marginRight: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  inner: {
    width: 13,
    height: 13,
    backgroundColor: '#4a4cff'
  }
});

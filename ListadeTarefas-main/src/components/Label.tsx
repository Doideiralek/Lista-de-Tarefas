import React from 'react';
import { Text, StyleSheet } from 'react-native';

interface Props {
  text: string;
}

export default function Label({ text }: Props) {
  return <Text style={styles.label}>{text}</Text>;
}

const styles = StyleSheet.create({
  label: {
    fontSize: 16
  }
});

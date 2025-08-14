import React from 'react';
import { View, StyleSheet } from 'react-native';
import Checkbox from './Checkbox';
import Label from './Label';

interface Props {
  task: string;
  completed: boolean;
  onToggle: () => void;
}

export default function TaskItem({ task, completed, onToggle }: Props) {
  return (
    <View style={styles.container}>
      <Checkbox checked={completed} onPress={onToggle} />
      <Label text={task} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8
  }
});

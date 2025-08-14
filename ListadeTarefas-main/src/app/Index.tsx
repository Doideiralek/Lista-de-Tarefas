import React, { useState } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import Title from '../components/Title';
import TextInputTask from '../components/TextInputTask';
import ButtonAdd from '../components/ButtonAdd';
import TaskItem from '../components/TaskItem';

export default function IndexPage() {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState<{ id: string; text: string; completed: boolean }[]>([]);

  const addTask = () => {
    if (task.trim() === '') return;
    setTasks([...tasks, { id: Date.now().toString(), text: task, completed: false }]);
    setTask('');
  };

  const toggleTask = (id: string) => {
    setTasks(tasks.map(t => t.id === id ? { ...t, completed: !t.completed } : t));
  };

  return (
    <View style={styles.container}>
      <Title />
      <View style={styles.inputRow}>
        <TextInputTask value={task} onChangeText={setTask} />
        <ButtonAdd onPress={addTask} />
      </View>
      <FlatList
        data={tasks}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <TaskItem
            task={item.text}
            completed={item.completed}
            onToggle={() => toggleTask(item.id)}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    marginTop: 45
  },
  inputRow: {
    flexDirection: 'row',
    marginBottom: 15
  }
});

import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { KeyboardAvoidingView, Platform, StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import Task from './components/Task';

export default function App() {
  return (
    <View style={styles.container}>
    { /*  TODO */}
    <View style={styles.taskWrapper}>
      <Text style={styles.sectionTitle}>Today's tasks</Text>
      <View style={styles.items}>
        <Task text={'Task 1'}/>
        <Task text={'Task 2'}/>
      </View>
    </View>
    <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding":"height"}
    style={styles.writeTaskWrapper}>
      <TextInput style={styles.input} placeholder={'Write a task'}/>
      <TouchableOpacity>
        <View style={styles.addWrapper}></View>
        <Text style={styles.addText}>+</Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED'
  },
  taskWrapper:{
    paddingTop: 80,
    paddingHorizontal: 20
  },
sectionTitle:{
  fontSize: 24,
  fontWeight: 'bold'
},
items:{
  marginTop: 30
},
writeTaskWrapper: {
  position: 'absolute',
  bottom: 60,
  width: '100%',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center'
},
input: {
  paddingVertical: 15,
  paddingHorizontal: 15,
  width: 250
},
addWrapper: {},
addText: {},
});

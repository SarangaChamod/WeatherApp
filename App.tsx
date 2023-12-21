import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native'; 
import HomePage from './src/component/home_page'; 

export default function App() {
  return (
    <View style={styles.container}>
      <HomePage /> 
      {/* <StatusBar style="dark" /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
   
    backgroundColor: '#fff',
    paddingTop: 10,
    
  },
});

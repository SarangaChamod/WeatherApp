import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native'; 
import HomePage from './src/Pages/home_page'; 

export default function App() {
  return (
    <View style={styles.Homecontainer}>
      <HomePage /> 
      <StatusBar style="dark" />
    </View>
  );
}

const styles = StyleSheet.create({
  Homecontainer: {
    flex:1,
    backgroundColor: '#fff',
    
    
    
  },
});

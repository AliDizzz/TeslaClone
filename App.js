import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import CarItem from './components/CarItem';
import CarsList from './components/CarsList';


export default function App() {
  return (
    <View style={styles.container}>
      <CarsList />

      <CarItem
        name={"Model X"}
        tagLine={"Order Online For"}
        tagLineCTA={"Touchless delivery"}
        image={require('./assets/images/ModelX.jpeg')}
      />


      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

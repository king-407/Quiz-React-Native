import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import Home from './screens/Home';
import Quiz from './screens/Quiz';
import Navigation from './navigation/Navigation';
import {NavigationContainer} from '@react-navigation/native';
import Result from './screens/Result';
const App = () => {
  return (
    <NavigationContainer>
      <Navigation />
    </NavigationContainer>
    // {/* <Home /> */}
    // {/* <Result /> */}
    // {/* <Quiz /> */}
  );
};

export default App;
const styles = StyleSheet.create({});

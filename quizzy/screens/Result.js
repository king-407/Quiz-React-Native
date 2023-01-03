import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import Navigation from '../navigation/Navigation';

const Result = ({navigation, route}) => {
  const score = route.params;
  return (
    <View>
      <View>
        <Text>Result</Text>
      </View>
      <View>
        <Image style={styles.pic} source={require('../pictures/quiz.png')} />
      </View>
      <View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Home')}>
          <Text>{score}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Result;
const styles = StyleSheet.create({
  pic: {
    height: 400,
    width: 400,
    resizeMode: 'contain',
  },
});

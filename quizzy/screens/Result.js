import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import Navigation from '../navigation/Navigation';

const Result = ({navigation, route}) => {
  const {score} = route.params;
  const success = 'https://storyset.com/illustration/awards/cuate';
  return (
    <View>
      <View>
        <Image style={styles.pic} source={{uri: success}} />
      </View>
      <View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Home')}>
          <Text style={{fontSize: 35, fontWeight: '800', alignSelf: 'center'}}>
            {' '}
            Your score is {score}
          </Text>
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

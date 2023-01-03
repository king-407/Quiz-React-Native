import {View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native';
import React from 'react';
import Title from '../component/Title';
const Home = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Title />

      <View style={styles.picConainer}>
        <Image style={styles.pic} source={require('../pictures/quiz.png')} />
      </View>
      <View style={styles.texty}>
        <TouchableOpacity
          onPress={() => navigation.navigate('Quiz')}
          style={styles.button}>
          <Text
            style={{
              fontSize: 35,
              alignSelf: 'center',
              color: 'white',
              fontWeight: '900',
            }}>
            Start
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Home;
const styles = StyleSheet.create({
  container: {
    padding: 10,
    height: '100%',
  },
  pic: {
    height: 400,
    width: 400,

    alignSelf: 'center',
  },
  texty: {
    padding: 5,
    marginBottom: 10,
  },
  picConainer: {
    flex: 1,
    marginTop: 30,
  },
  button: {
    width: '100%',
    backgroundColor: '#83E3FDff',
    padding: 10,
    borderRadius: 40,
  },
});

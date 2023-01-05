import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React, {useEffect, useState} from 'react';
import Navigation from '../navigation/Navigation';

const Quiz = ({navigation}) => {
  const [questions, setQuestion] = useState('');
  const [options, setOptions] = useState([]);
  const [quesNo, setNo] = useState(0);
  const [score, setScore] = useState(0);
  function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
  }
  const quizz = async () => {
    try {
      const result = await fetch(
        `https://opentdb.com/api.php?amount=10&encode=url3986`,
      );
      const data = await result.json();
      setQuestion(data.results[quesNo]);
      console.log(data.results[quesNo].incorrect_answers);
      const arr = data.results[quesNo].incorrect_answers;
      const str = data.results[quesNo].correct_answer;
      const arrNew = shuffleAndAdd(arr, str);
      setOptions(arrNew);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    console.log('hi');
    quizz();
  }, [quesNo]);
  const shuffleAndAdd = (options, str) => {
    const newArr = [...options];
    console.log(newArr);
    newArr.push(str);
    shuffleArray(newArr);

    return newArr;
  };

  const handleAnswer = str => {
    if (str == questions.correct_answer) {
      setScore(score + 10);
    }
    if (quesNo < 9) setNo(quesNo + 1);
    else {
      navigation.navigate('Result', {score});
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <Text style={styles.heading}>
          Q.{quesNo + 1}) {decodeURIComponent(questions.question)}
        </Text>
      </View>
      {options.length > 2 ? (
        <View style={styles.options}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              handleAnswer(options[3]);
            }}>
            <Text style={{fontWeight: '900', fontSize: 22, color: 'white'}}>
              {decodeURIComponent(options[3])}
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              handleAnswer(options[0]);
            }}>
            <Text style={{color: 'white', fontWeight: '900', fontSize: 22}}>
              {decodeURIComponent(options[0])}
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              handleAnswer(options[1]);
            }}>
            <Text style={{color: 'white', fontWeight: '900', fontSize: 22}}>
              {decodeURIComponent(options[1])}
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              handleAnswer(options[2]);
            }}>
            <Text style={{color: 'white', fontWeight: '900', fontSize: 22}}>
              {decodeURIComponent(options[2])}
            </Text>
          </TouchableOpacity>
        </View>
      ) : (
        <View style={styles.options}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              handleAnswer(options[1]);
            }}>
            <Text style={{color: 'white', fontWeight: '900', fontSize: 22}}>
              {decodeURIComponent(options[1])}
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              handleAnswer(options[0]);
            }}>
            <Text style={{color: 'white', fontWeight: '900', fontSize: 22}}>
              {decodeURIComponent(options[0])}
            </Text>
          </TouchableOpacity>
        </View>
      )}
      <View style={styles.bottom}>
        <TouchableOpacity style={{backgroundColor: 'purple', borderRadius: 7}}>
          <Text
            style={{
              padding: 15,
              color: 'white',
              fontWeight: 'bold',
              fontSize: 16,
              width: 100,
            }}>
            Previous
          </Text>
        </TouchableOpacity>

        {quesNo + 1 < 10 ? (
          <TouchableOpacity
            style={{
              backgroundColor: 'purple',
              borderRadius: 7,
              padding: 10,
              justifyContent: 'center',
              alignItems: 'center',
            }}
            onPress={() => {
              setNo(quesNo + 1);
            }}>
            <Text
              style={{
                color: 'white',
                fontWeight: 'bold',
                fontSize: 16,
                width: 100,
                justifyContent: 'center',
                alignSelf: 'center',
                alignContent: 'center',
              }}>
              Next{' '}
            </Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            style={{backgroundColor: 'purple', borderRadius: 7, padding: 10}}
            onPress={() => {
              navigation.navigate('Result', {
                score,
              });
            }}>
            <Text>Finish</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default Quiz;
const styles = StyleSheet.create({
  container: {padding: 2, height: '100%'},
  top: {
    marginVertical: 10,
  },
  heading: {
    marginTop: 20,
    fontSize: 25,
    fontWeight: 'bold',
    color: 'black',
    padding: 2,
    margin: 20,
  },
  options: {
    marginVertical: 10,
    flex: 1,
  },
  button: {
    padding: 30,
    backgroundColor: 'purple',
    margin: 10,
    borderRadius: 20,
  },
  bottom: {
    justifyContent: 'space-between',
    margin: 12,
    padding: 16,
    flexDirection: 'row',
  },
});

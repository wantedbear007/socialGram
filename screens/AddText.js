import React, {useContext, useEffect, useRef, useState} from 'react';
import {View, StyleSheet, TextInput, ToastAndroid} from 'react-native';
import colors from '../assets/Colors';
import TopHeader from '../components/TopHeader';
import PostContext from '../store/PostContext';

const AddText = ({navigation}) => {
  const [word, setWord] = useState('');
  const contextState = useContext(PostContext);

  const buttonHandler = () => {
    if (word.length === 0) {
      ToastAndroid.show('Please enter something !', ToastAndroid.SHORT);
    } else
      [
        navigation.navigate('Home'),
        contextState.addText(word),
        ToastAndroid.show('Posted Successfully !', ToastAndroid.SHORT),
      ];
  };

  return (
    <View>
      <TopHeader
        title="Text"
        post="Post"
        buttonHandler={buttonHandler}
        navigation={navigation}
      />
      <TextInput
        placeholder="Write content here"
        multiline={true}
        style={styles.textInput}
        onChangeText={word => setWord(word)}
        value={word}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  textInput: {
    color: colors.darkGray,
    paddingHorizontal: 10,
  },
});

export default AddText;

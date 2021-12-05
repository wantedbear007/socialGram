import React, {useContext, useState} from 'react';
import {View, StyleSheet, TextInput, ToastAndroid} from 'react-native';
import colors from '../assets/Colors';
import TopHeader from '../components/TopHeader';
import PostContext from '../store/PostContext';

const AddText = ({navigation}) => {
  const {setContent} = useContext(PostContext);
  const [text, setText] = useState('');

  const buttonHandler = () => {
    if (text.length === 0) {
      ToastAndroid.show('Please write something !', ToastAndroid.SHORT);
    } else
      [
        setContent({description: text}),
        ToastAndroid.show('Posted Successfully !', ToastAndroid.SHORT),
        navigation.navigate('Home'),
      ];
  };

  return (
    <View>
      <TopHeader
        title="Text"
        buttonHandler={buttonHandler}
        navigation={navigation}
      />
      <TextInput
        placeholder="Write content here"
        multiline={true}
        style={styles.textInput}
        onChangeText={text => setText(text)}
        value={text}
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

import React, {useContext, useState} from 'react';
import {View, Text, Button, Image, ToastAndroid} from 'react-native';
import PostContext from '../store/PostContext';
import ImagePicker from 'react-native-image-crop-picker';
import TopHeader from '../components/TopHeader';
import {TextInput} from 'react-native-paper';

const AddImage = ({navigation}) => {
  const Context = useContext(PostContext);
  const {images, setPictures} = Context;
  const [pic, setPic] = useState();
  const [text, setText] = useState();
  const [buttonVisibility, setButtonVisibility] = useState(true);

  const buttonHandler = () => {
    let Post = {
      description: text,
      photo: pic,
    };
    if (!pic) {
      ToastAndroid.show('Please select an image !', ToastAndroid.SHORT);
    } else
      [
        setPictures(Post),
        navigation.navigate('Home'),
        ToastAndroid.show('Posted Successfully.', ToastAndroid.SHORT),
      ];
  };

  // For choosing Image from gallery
  const ChooseImageFromGallery = () => {
    ImagePicker.openPicker({
      // width: 300,
      // height: 400,
      cropping: true,
    }).then(image => {
      setPic(image.path);
      setButtonVisibility(false);
    });
  };

  return (
    <View>
      <TopHeader
        title="Image"
        post="Post"
        navigation={navigation}
        buttonHandler={buttonHandler}
      />
      <TextInput
        placeholder="Write content here."
        multiline={true}
        onChangeText={text => setText(text)}
        value={text}
      />
      {!buttonVisibility ? (
        <Image source={{uri: pic}} style={{width: '100%', height: 300}} />
      ) : (
        <Button title="upload" onPress={ChooseImageFromGallery} />
      )}
    </View>
  );
};

export default AddImage;

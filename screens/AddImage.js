import React, {useContext, useState} from 'react';
import {View, Text, Button, Image} from 'react-native';
import PostContext from '../store/PostContext';
import ImagePicker from 'react-native-image-crop-picker';
import TopHeader from '../components/TopHeader';
import {TextInput} from 'react-native-paper';

const AddImage = ({navigation}) => {
  const Context = useContext(PostContext);
  const {images, setPictures} = Context;
  const [pic, setPic] = useState();
  const [text, setText] = useState();

  const clickHandler = () => {
    let Post = {
      description: text,
      photo: pic,
    };
    setPictures(Post);
    console.log(images);
    navigation.navigate('Home');
  };
  const ChooseImageFromGallery = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
    }).then(image => {
      setPic(image.path);
      console.log(pic);
    });
  };

  return (
    <View>
      <TopHeader title="Image" post="Post" navigation={navigation} />
      <TextInput
        placeholder="Write content here."
        multiline={true}
        onChangeText={text => setText(text)}
        value={text}
      />
      <Button title="upload" onPress={ChooseImageFromGallery} />
      <Button title="click" onPress={clickHandler} />
    </View>

    /* <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>

      <Button title="upload" onPress={ChooseImageFromGallery} />

      <Button title="click" onPress={clickHandler} />
    </View>
  ); */
  );
};

export default AddImage;

import React, {useContext, useState} from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  Image,
  StyleSheet,
  ToastAndroid,
  TextInput,
} from 'react-native';
import PostContext from '../store/PostContext';
import ImagePicker from 'react-native-image-crop-picker';
import TopHeader from '../components/TopHeader';
import colors from '../assets/Colors';

const AddImage = ({navigation}) => {
  const {setContent} = useContext(PostContext);
  const [picture, setPicture] = useState();
  const [text, setText] = useState();
  const [buttonVisibility, setButtonVisibility] = useState(true);

  // Post button handler
  const buttonHandler = () => {
    if (!picture) {
      ToastAndroid.show('Please select an image !', ToastAndroid.SHORT);
    } else
      [
        setContent({description: text, photo: picture}),
        ToastAndroid.show('Posted Successfully.', ToastAndroid.SHORT),
        navigation.navigate('Home'),
      ];
  };

  // For choosing Image from gallery
  const ChooseImageFromGallery = () => {
    ImagePicker.openPicker({
      cropping: true,
    }).then(image => {
      setPicture(image.path);
      setButtonVisibility(false);
    });
  };

  return (
    <View>
      <TopHeader
        title="Image"
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
        <Image source={{uri: picture}} style={styles.imageContainer} />
      ) : (
        <UploadButton ChooseImageFromGallery={ChooseImageFromGallery} />
      )}
    </View>
  );
};

const UploadButton = ({ChooseImageFromGallery}) => {
  return (
    <TouchableOpacity
      style={styles.uploadButton}
      onPress={ChooseImageFromGallery}>
      <Text style={styles.uploadText}>Upload</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    width: '100%',
    height: 300,
    resizeMode: 'contain',
    marginTop: 30,
  },
  uploadButton: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  uploadText: {
    fontSize: 15,
    backgroundColor: colors.grey,
    paddingHorizontal: 30,
    paddingVertical: 10,
  },
});

export default AddImage;

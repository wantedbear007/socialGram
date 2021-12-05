import React, {useContext, useEffect, useState} from 'react';
import {View, Text, FlatList, Image, ScrollView} from 'react-native';
import colors from '../assets/Colors';
import BottomNav from '../components/Home/BottomNav';
import PostContext, {PostContextProvider} from '../store/PostContext';
import {Divider} from 'react-native-elements';

const Home = ({navigation}) => {
  const PostText = useContext(PostContext);
  const {images, setImages} = PostText;
  // console.log(images);

  // useEffect(())

  return (
    <View>
      <ScrollView>
        {images.map((img, index) => (
          <View key={index}>
            <Image
              source={{uri: img.photo}}
              style={{
                width: 300,
                height: 300,
                resizeMode: 'contain',
                borderWidth: 2,
              }}
            />
            <Text>{img.description}</Text>
          </View>
        ))}
      </ScrollView>

      <TextList textContent={PostText.text} />
      <BottomNav navigation={navigation} />
    </View>
  );
};

// For rendering text
const TextHandler = ({textContent}) => {
  return (
    <View>
      {textContent.map((text, id) => (
        <View id={id}>
          <Text>{text}</Text>
        </View>
      ))}
    </View>
  );
};

const RenderContainer = ({item}) => {
  return <Text style={{fontSize: 70}}>{item}</Text>;
};
const TextList = ({textContent}) => {
  return (
    <View style={{marginBottom: 45}}>
      <FlatList
        data={textContent}
        keyExtractor={(item, index) => index}
        renderItem={RenderContainer}
      />
    </View>
  );
};

export default Home;

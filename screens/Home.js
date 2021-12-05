import React, {useContext, useEffect, useState} from 'react';
import {View, Text, FlatList, Image, ScrollView} from 'react-native';
import BottomNav from '../components/Home/BottomNav';
import PostContext from '../store/PostContext';

const Home = ({navigation}) => {
  const PostText = useContext(PostContext);
  const {images, setImages} = PostText;

  const FinalRender = ({item}) => {
    return (
      <View>
        <Image
          source={{uri: item.photo}}
          style={{width: '100%', height: 300, resizeMode: 'contain'}}
        />
        <Text>{item.description}</Text>
      </View>
    );
  };

  return (
    <>
      <FlatList
        data={images}
        keyExtractor={item => item.index}
        renderItem={FinalRender}
      />
      {/* <TextList textContent={PostText.text} /> */}
      <BottomNav navigation={navigation} />
    </>
  );
};

export default Home;

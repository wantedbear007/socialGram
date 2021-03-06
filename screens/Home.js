import React, {useContext} from 'react';
import {View, Text, FlatList, Image, StyleSheet} from 'react-native';
import BottomNav from '../components/Home/BottomNav';
import PostContext from '../store/PostContext';
import colors from '../assets/Colors';

const Home = ({navigation}) => {
  const {content} = useContext(PostContext);

  let post;
  console.log(content);

  if (content.length === 0) {
    post = <Text style={styles.noPostMsg}>No post.</Text>;
  } else {
    post = <Content content={content} />;
  }

  return (
    <View style={styles.parentComponent}>
      {post}
      <BottomNav navigation={navigation} />
    </View>
  );
};

// FlatList
const Content = ({content}) => {
  return (
    <FlatList
      data={content}
      keyExtractor={(item, index) => index.toString()}
      renderItem={FinalRender}
    />
  );
};

// FlatList RenderItem
const FinalRender = ({item}) => {
  return (
    <View style={styles.postContainer}>
      {item.photo && (
        <Image source={{uri: item.photo}} style={styles.postImage} />
      )}
      {item.description && (
        <Text style={styles.postText}>{item.description}</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  parentComponent: {
    marginBottom: 50,
    flex: 1,
  },
  postContainer: {
    backgroundColor: colors.white,
    borderBottomWidth: 10,
    borderBottomColor: colors.grey,
  },
  postText: {
    fontSize: 14,
    color: colors.lightGray,
    fontWeight: '600',
    paddingHorizontal: 15,
    paddingVertical: 18,
  },
  postImage: {
    marginTop: 14,
    width: '100%',
    height: 300,
    resizeMode: 'contain',
  },
  noPostMsg: {
    fontSize: 17,
    marginVertical: '80%',
    textAlign: 'center',
  },
});

export default Home;

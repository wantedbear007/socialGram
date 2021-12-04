import React from 'react';
import {View, Text, FlatList} from 'react-native';
import colors from '../assets/Colors';
import BottomNav from '../components/Home/BottomNav';
import DummyData from './DummyData';

const Home = ({navigation}) => {
  const RenderContainer = ({item}) => {
    return <Text style={{fontSize: 70}}>{item.name}</Text>;
  };

  return (
    <View>
      <Text>This is home page.</Text>
      <FlatList
        data={DummyData}
        keyExtractor={item => item.id}
        renderItem={RenderContainer}
      />
      <BottomNav navigation={navigation} />
    </View>
  );
};

export default Home;

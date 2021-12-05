import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import colors from '../assets/Colors';
import ScreenSize from '../assets/ScreenSize';
import TopHeader from '../components/TopHeader';

export default CreatePost = ({navigation}) => {
  return (
    <>
      <TopHeader navigation={navigation} navigateTo="Home" />
      <View style={styles.parentContainer}>
        <CreateButton title="Image" navigation={navigation} />
        <CreateButton title="Text" navigation={navigation} />
      </View>
    </>
  );
};

const CreateButton = props => {
  return (
    <TouchableOpacity
      style={styles.buttonContainer}
      onPress={() => props.navigation.navigate('Add' + props.title)}>
      <Text style={styles.buttonText}>{props.title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  parentContainer: {
    marginTop: ScreenSize.height / 3,
  },
  buttonContainer: {
    marginVertical: 10,
    marginHorizontal: ScreenSize.width / 3,
    textAlign: 'center',
  },
  buttonText: {
    backgroundColor: colors.grey,
    padding: 10,
    textAlign: 'center',
  },
});

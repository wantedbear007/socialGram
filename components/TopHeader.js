import React, { useContext } from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import colors from '../assets/Colors';
import {Divider} from 'react-native-elements/dist/divider/Divider';
import PostContext from '../store/PostContext';

const TopHeader = props => {

  return (
    <>
      <View style={styles.parentComponent}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <TouchableOpacity>
            <MaterialIcons name="arrow-back" size={30} color={colors.grey} />
          </TouchableOpacity>
          <Text style={{fontSize: 19}}>{props.title}</Text>
        </View>
        <TouchableOpacity style={styles.buttonContainer} onPress={props.buttonHandler}>
          <Text>Post</Text>
        </TouchableOpacity>
      </View>
      <Divider width={1} color={colors.grey} />
    </>
  );
};

const styles = StyleSheet.create({
  parentComponent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 9,
    marginHorizontal: 5,
  },
  buttonContainer: {
    backgroundColor: colors.grey,
    textAlign: 'center',
    paddingVertical: 6,
    paddingHorizontal: 17,
  },
});

export default TopHeader;

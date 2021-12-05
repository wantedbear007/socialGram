import React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import colors from '../../assets/Colors';
import ScreenSize from '../../assets/ScreenSize';
import Ionicons from 'react-native-vector-icons/Ionicons';

const BottomNav = ({navigation}) => {
  return (
    <View style={styles.parentContainer}>
      <TouchableOpacity onPress={() => navigation.navigate('CreatePost')}>
        <Ionicons name="add-circle-outline" size={43} color={colors.lightGray} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  parentContainer: {
    position: 'absolute',
    top: ScreenSize.height - 70,
    backgroundColor: colors.grey,
    width: ScreenSize.width,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default BottomNav;

import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import colors from '../assets/Colors';
import {Divider} from 'react-native-elements/dist/divider/Divider';

const TopHeader = props => {
  return (
    <>
      <View style={styles.parentComponent}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <TouchableOpacity
            onPress={() =>
              props.navigation.navigate(
                !props.navigateTo ? 'CreatePost' : 'Home',
              )
            }>
            <MaterialIcons
              name="arrow-back"
              size={30}
              color={colors.lightGray}
            />
          </TouchableOpacity>
          <Text style={{fontSize: 19}}>{props.title}</Text>
        </View>
        {props.post && (
          <TouchableOpacity
            style={styles.buttonContainer}
            onPress={props.buttonHandler}>
            <Text>{props.post}</Text>
          </TouchableOpacity>
        )}
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

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

// Screens
import Home from '../screens/Home';
import CreatePost from '../screens/CreatePost';
import AddImage from '../screens/AddImage';
import AddText from '../screens/AddText';

const Navigator = () => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="CreatePost" component={CreatePost} />
        <Stack.Screen name="AddText" component={AddText} />
        <Stack.Screen name="AddImage" component={AddImage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;

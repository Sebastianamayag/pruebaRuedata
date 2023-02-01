import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer} from '@react-navigation/native';
import { Home } from '../screens/Home';
import { navigationRef } from './NavigationRef';
import { NewImage } from '../screens/NewImage';
import { Images } from '../screens/Images';
import { Bluethooth } from '../screens/Bluethooth';
import { User } from '../screens/User';

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name={'Home'} component={Home} />
        <Stack.Screen name={'User'} component={User} />
        <Stack.Screen name={'NewImage'} component={NewImage} />
        <Stack.Screen name={'Images'} component={Images} />
        <Stack.Screen name={'Bluethooth'} component={Bluethooth} />
      </Stack.Navigator>
    </NavigationContainer>
  )
};

export default StackNavigator;
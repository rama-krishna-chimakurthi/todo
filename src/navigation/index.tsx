import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from '../screens/Home';
import CreateTask from '../screens/create-task';


const Stack = createNativeStackNavigator();

const screenOptions = {
    headerShown: false,
  };

const Navigation = () => {
  return (
    <Stack.Navigator>
        <Stack.Screen name='Home' /* options={screenOptions} */ component={Home} />
        <Stack.Screen name='CreateTask' /* options={screenOptions} */ component={CreateTask} />
    </Stack.Navigator>
  )
}

export default Navigation
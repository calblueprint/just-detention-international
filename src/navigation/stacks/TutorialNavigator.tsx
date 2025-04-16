import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from 'src/screens/Home';
import Tutorial from 'src/screens/Home/Tutorial';
import { HomeStackParams } from '../types';

const HomeStack = createNativeStackNavigator<HomeStackParams>();

export default function HomeNavigator() {
  return (
    <HomeStack.Navigator screenOptions={{ headerShown: false }}>
      <HomeStack.Screen name="Home" component={HomeScreen} />
      <HomeStack.Screen name="Tutorial" component={Tutorial} />
    </HomeStack.Navigator>
  );
}

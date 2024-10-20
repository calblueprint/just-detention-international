import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SeekHelp from '@/screens/SeekHelp';
import ResourceList from '@/screens/SeekHelp/ResourceList';

const Stack = createNativeStackNavigator();
export default function seekHelpNav() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Resource List" component={ResourceList} />
      <Stack.Screen name="Seek Help" component={SeekHelp} />
    </Stack.Navigator>
  );
}

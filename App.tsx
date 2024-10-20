import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HealingResources from '@/screens/HealingResources';
import Home from '@/screens/Home';
import LegalRights from '@/screens/LegalRights/index';
import VideoPage from '@/screens/LegalRights/VideoPage';
import SeekHelp from '@/screens/SeekHelp';
import resourceList from '@/screens/SeekHelp/ResourceList';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Healing Resources" component={HealingResources} />
        <Stack.Screen name="Legal Rights" component={LegalRights} />
        <Stack.Screen name="Seek Help" component={SeekHelp} />
        <Stack.Screen name="Resource List" component={resourceList} />
        <Stack.Screen name="Video Page" component={VideoPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

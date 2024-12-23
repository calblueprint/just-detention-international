import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import NavigationBar from '@/navigation/BottomTabNavigator';

export default function App() {
  return (
    <NavigationContainer>
      <NavigationBar />
    </NavigationContainer>
  );
}

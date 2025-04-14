import * as React from 'react';
import { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import NavigationBar from '@/navigation/BottomTabNavigator';
import getDataOnce from '@/supabase/getDataOnce';

export default function App() {
  useEffect(() => {
    getDataOnce();
  }, []);
  return (
    <NavigationContainer>
      <NavigationBar />
    </NavigationContainer>
  );
}

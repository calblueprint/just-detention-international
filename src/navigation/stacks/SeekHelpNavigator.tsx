import React from 'react';
import { Text, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Logo from 'src/assets/images/logo.svg';
import { colors } from 'src/styles/colors';
import SeekHelp from '@/screens/SeekHelp';

const SeekHelpStack = createNativeStackNavigator();

export default function SeekHelpNavigator() {
  return (
    <SeekHelpStack.Navigator
      screenOptions={{
        headerShown: true,
        headerTitleAlign: 'left',
        headerTitle: '',

        headerLeft: () => (
          <Text
            style={{
              fontSize: 20,
              fontWeight: 'bold',
              color: colors.orange,
              marginLeft: 10,
            }}
          >
            Seek Help
          </Text>
        ),
        headerStyle: {
          backgroundColor: colors.background,
        },

        headerRight: () => (
          <View style={{ paddingRight: '2%' }}>
            <Logo />
          </View>
        ),
      }}
    >
      <SeekHelpStack.Screen name="SeekHelp" component={SeekHelp} />
    </SeekHelpStack.Navigator>
  );
}

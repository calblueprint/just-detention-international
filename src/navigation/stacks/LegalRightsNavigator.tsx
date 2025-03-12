import React from 'react';
import { Text, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Logo from 'src/assets/images/logo.svg';
import { colors } from 'src/styles/colors';
import LegalRights from '@/screens/LegalRights';
import VideoPage from '@/screens/LegalRights/VideoPage';
import BackButton from '../../components/BackButton';

const LegalStack = createNativeStackNavigator();

export default function LegalRightsNavigator() {
  return (
    <LegalStack.Navigator
      screenOptions={{
        headerShown: true,
        headerTitleAlign: 'left',
        headerTitle: '',
        headerStyle: {
          backgroundColor: colors.background,
        },
        headerLeft: () => (
          <Text
            style={{
              fontSize: 20,
              fontWeight: 'bold',
              color: colors.orange,
              marginLeft: 10,
            }}
          >
            Legal Rights
          </Text>
        ),
        headerRight: () => (
          <View style={{ paddingRight: '2%' }}>
            <Logo />
          </View>
        ),
      }}
    >
      <LegalStack.Screen name="LegalRights" component={LegalRights} />
      <LegalStack.Screen
        name="VideoPage"
        component={VideoPage}
        options={{
          headerBackTitle: 'Legal Rights',
          headerTitle: '',
          headerLeft: () => <BackButton label={'Legal Rights'} />,
          headerRight: () => (
            <View style={{ paddingRight: '2%' }}>
              <Logo />
            </View>
          ),
        }}
      />
    </LegalStack.Navigator>
  );
}

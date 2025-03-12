import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BackArrow from 'src/assets/images/back-arrow.svg';
import Logo from 'src/assets/images/logo.svg';
import { colors } from 'src/styles/colors';
import LegalRights from '@/screens/LegalRights';
import VideoPage from '@/screens/LegalRights/VideoPage';
import { LegalStackParams } from '../types';
import styles from './styles';

const LegalStack = createNativeStackNavigator<LegalStackParams>();

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
          headerLeft: () => <BackButton />,
          headerRight: () => (
            <View style={{ paddingRight: '2%' }}>
              <Logo />
            </View>
          ),
        }}
      />
    </LegalStack.Navigator>
  );
  function BackButton() {
    const navigation = useNavigation();

    return (
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={styles.backContainer}
      >
        <BackArrow />
        <Text style={styles.backText}>Legal Rights</Text>
      </TouchableOpacity>
    );
  }
}

import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BackArrow from 'src/assets/images/back-arrow.svg';
import Logo from 'src/assets/images/logo.svg';
import { colors } from 'src/styles/colors';
import HealingResources from '@/screens/HealingResources';
import HealingCatalogue from '@/screens/HealingResources/HealingCatalogue';
import HopeHealingGuide from '@/screens/HealingResources/HopeHealingGuide/';
import { HealingStackParams } from '../types';
import styles from './styles';

const HealingStack = createNativeStackNavigator<HealingStackParams>();

export default function HealingResourcesNavigator() {
  return (
    <HealingStack.Navigator>
      <HealingStack.Screen
        name="HealingResources"
        component={HealingResources}
        options={{
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
              Healing Resources
            </Text>
          ),
          headerRight: () => (
            <View style={{ paddingRight: '2%' }}>
              <Logo />
            </View>
          ),
        }}
      />
      <HealingStack.Screen
        name="HealingCatalogue"
        component={HealingCatalogue}
        options={{
          headerBackTitle: 'Healing Resources',
          headerTitle: '',
          headerLeft: () => <BackButton />,
          headerRight: () => (
            <View style={{ paddingRight: '2%' }}>
              <Logo />
            </View>
          ),
        }}
      />
      <HealingStack.Screen
        name="HopeForHealingGuide"
        component={HopeHealingGuide}
        options={{
          headerBackTitle: 'Healing Resources',
          headerTitle: '',
          headerLeft: () => <BackButton />,
          headerRight: () => (
            <View style={{ paddingRight: '2%' }}>
              <Logo />
            </View>
          ),
        }}
      />
    </HealingStack.Navigator>
  );
  function BackButton() {
    const navigation = useNavigation();

    return (
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={styles.backContainer}
      >
        <BackArrow />
        <Text style={styles.backText}>Healing Resources</Text>
      </TouchableOpacity>
    );
  }
}

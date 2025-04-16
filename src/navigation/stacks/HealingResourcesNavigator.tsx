import React from 'react';
import { Text, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Logo from 'src/assets/images/logo.svg';
import { colors } from 'src/styles/colors';
import BackButton from '@/components/BackButton';
import HealingResources from '@/screens/HealingResources';
import HealingCatalogue from '@/screens/HealingResources/HealingCatalogue';
import HopeHealingGuide from '@/screens/HealingResources/HopeHealingGuide/';

const HealingStack = createNativeStackNavigator();

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
          headerLeft: () => <BackButton label={'Healing Resources'} />,
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
          headerLeft: () => <BackButton label={'Healing Resources'} />,
          headerRight: () => (
            <View style={{ paddingRight: '2%' }}>
              <Logo />
            </View>
          ),
        }}
      />
    </HealingStack.Navigator>
  );
}

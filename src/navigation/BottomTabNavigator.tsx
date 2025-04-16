import * as React from 'react';
import { View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import GreyHealingResourcesIcon from 'src/assets/images/healing-resources-grey.svg';
import OrangeHealingResourcesIcon from 'src/assets/images/healing-resources-orange.svg';
import GreyHelpResourcesIcon from 'src/assets/images/help-resources-grey.svg';
import OrangeHelpResourcesIcon from 'src/assets/images/help-resources-orange.svg';
import GreyHomeIcon from 'src/assets/images/home-grey.svg';
import OrangeHomeIcon from 'src/assets/images/home-orange.svg';
import GreyTutorialIcon from 'src/assets/images/tutorial-grey.svg';
import OrangeTutorialIcon from 'src/assets/images/tutorial-orange.svg';
import Logo from 'src/assets/images/logo.svg';
import GreyPREAIcon from 'src/assets/images/prea-grey.svg';
import OrangePREAIcon from 'src/assets/images/prea-orange.svg';
import HomeScreen from 'src/screens/Home/';
import { colors } from 'src/styles/colors';
import HealingResourcesNavigator from './stacks/HealingResourcesNavigator';
import TutorialNavigator from './stacks/TutorialNavigator';
import LegalRightsNavigator from './stacks/LegalRightsNavigator';
import SeekHelpNavigator from './stacks/SeekHelpNavigator';
import { BottomTabParams } from './types';

const initialRouteName = 'Healing';

const Tab = createBottomTabNavigator<BottomTabParams>();

export default function NavigationBar() {
  return (
    <Tab.Navigator
      initialRouteName={initialRouteName}
      screenOptions={{
        tabBarActiveTintColor: colors.orange,
        headerShown: false,
      }}
    >
      <Tab.Screen
        name="Tutorial"
        component={TutorialNavigator}
        options={{
          headerTitle: '',
          tabBarIcon: ({ focused }) =>
            focused ? <OrangeTutorialIcon /> : <GreyTutorialIcon />,
          headerStyle: {
            backgroundColor: '#F7F9FC',
          },
          headerShown: true,
          headerTitleAlign: 'left',
          headerTitleStyle: {
            fontSize: 20,
            fontWeight: 'bold',
            color: colors.orange,
            marginLeft: '2%',
          },
          headerRight: () => (
            <View style={{ paddingRight: '2%' }}>
              <Logo />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Healing"
        component={HealingResourcesNavigator}
        options={{
          tabBarIcon: ({ focused }) =>
            focused ? (
              <OrangeHealingResourcesIcon />
            ) : (
              <GreyHealingResourcesIcon />
            ),
        }}
      />
      <Tab.Screen
        name="Legal"
        component={LegalRightsNavigator}
        options={{
          tabBarLabel: 'Legal Rights',
          tabBarIcon: ({ focused }) =>
            focused ? <OrangePREAIcon /> : <GreyPREAIcon />,
        }}
      />
      <Tab.Screen
        name="Seek"
        component={SeekHelpNavigator}
        options={{
          tabBarLabel: 'Seek Help',
          tabBarIcon: ({ focused }) =>
            focused ? <OrangeHelpResourcesIcon /> : <GreyHelpResourcesIcon />,
        }}
      />
    </Tab.Navigator>
  );
}

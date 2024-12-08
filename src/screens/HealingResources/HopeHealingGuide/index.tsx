import React, { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import {
  createDrawerNavigator,
  DrawerScreenProps,
} from '@react-navigation/drawer';
import BottomCarrot from 'src/assets/images/bottom-carrot.svg';
import RightCarrot from 'src/assets/images/right-carrot.svg';
import HealingPage from 'src/screens/HealingResources/HFHGuide';
import styles from './styles';

type RootDrawerParamList = {
  Welcome: undefined;
  ChapterOne: undefined;
  ChapterTwo: undefined;
  WelcomeSectionOne: undefined;
  WelcomeSectionTwo: undefined;
  ChapterOneSectionOne: undefined;
  Resource: undefined;
};

function Welcome({
  navigation,
}: DrawerScreenProps<RootDrawerParamList, 'Welcome'>) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <HealingPage
        id="7012e24a-894e-4972-9dcc-612666bff21e"
        navigation={navigation}
      />
    </View>
  );
}

function WelcomeSectionOne({
  navigation,
}: DrawerScreenProps<RootDrawerParamList, 'WelcomeSectionOne'>) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <HealingPage
        id="d72fd68a-2fff-43f7-85dc-7d2ce63f3cb4"
        navigation={navigation}
      />
    </View>
  );
}

function WelcomeSectionTwo({
  navigation,
}: DrawerScreenProps<RootDrawerParamList, 'WelcomeSectionTwo'>) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <HealingPage
        id="e35ce756-9579-4e33-8361-54eeb1eecb2b"
        navigation={navigation}
      />
    </View>
  );
}

function ChapterOne({
  navigation,
}: DrawerScreenProps<RootDrawerParamList, 'ChapterOne'>) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <HealingPage
        id="ac62e7cb-649c-4b43-b979-43f20c5a6760"
        navigation={navigation}
      />
    </View>
  );
}

function ChapterOneSectionOne({
  navigation,
}: DrawerScreenProps<RootDrawerParamList, 'ChapterOneSectionOne'>) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <HealingPage
        id="bc8fc4fe-33cf-40b1-b7b3-e5e62e7f5570"
        navigation={navigation}
      />
    </View>
  );
}

const Drawer = createDrawerNavigator<RootDrawerParamList>();

export default function HopeHealingGuide() {
  const [isWelcomeOpen, setIsWelcomeOpen] = useState(true);
  const [isChapterOneOpen, setIsChapterOneOpen] = useState(false);

  return (
    <Drawer.Navigator
      initialRouteName="Welcome"
      screenOptions={{
        drawerType: 'slide',
        drawerPosition: 'left',
        overlayColor: 'transparent',
        drawerStyle: {
          width: '23%',
          backgroundColor: '#F7F9FC',
        },
      }}
    >
      <Drawer.Screen
        name="Welcome"
        options={{
          headerShown: false,
          drawerLabel: () => (
            <TouchableOpacity
              style={styles.navLabelContainer}
              onPress={() => setIsWelcomeOpen(!isWelcomeOpen)}
            >
              {isWelcomeOpen ? <BottomCarrot /> : <RightCarrot />}
              <Text
                style={
                  isWelcomeOpen
                    ? styles.selectedDrawerLabelText
                    : styles.drawerLabelText
                }
              >
                Welcome
              </Text>
            </TouchableOpacity>
          ),
        }}
        component={Welcome}
      />
      {isWelcomeOpen && (
        <>
          <Drawer.Screen
            name="WelcomeSectionOne"
            options={{
              headerShown: false,

              drawerLabel: () => (
                <Text style={styles.subsectionLabelText}>
                  A Few Words on Language
                </Text>
              ),
            }}
            component={WelcomeSectionOne}
          />
          <Drawer.Screen
            name="WelcomeSectionTwo"
            component={WelcomeSectionTwo}
            options={{
              headerShown: false,
              drawerLabel: () => (
                <Text style={styles.subsectionLabelText}>
                  How to Use This Booklet
                </Text>
              ),
            }}
          />
        </>
      )}
      <Drawer.Screen
        name="ChapterOne"
        component={ChapterOne}
        options={{
          headerShown: false,
          drawerLabel: () => (
            <TouchableOpacity
              style={styles.navLabelContainer}
              onPress={() => setIsChapterOneOpen(!isChapterOneOpen)}
            >
              {isChapterOneOpen ? <BottomCarrot /> : <RightCarrot />}

              <Text
                style={
                  isChapterOneOpen
                    ? styles.selectedDrawerLabelText
                    : styles.drawerLabelText
                }
              >
                Chapter 1
              </Text>
            </TouchableOpacity>
          ),
        }}
      />
      {isChapterOneOpen && (
        <>
          <Drawer.Screen
            name="ChapterOneSectionOne"
            options={{
              headerShown: false,

              drawerLabel: () => (
                <Text style={styles.subsectionLabelText}>
                  Making Sense of What Happened
                </Text>
              ),
            }}
            component={ChapterOneSectionOne}
          />
        </>
      )}
    </Drawer.Navigator>
  );
}

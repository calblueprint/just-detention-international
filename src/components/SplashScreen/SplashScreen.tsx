import React from 'react';
import { View } from 'react-native';
// import { Image } from 'expo-image';
import { Image, Text, ActivityIndicator } from 'react-native';

import styles from './styles';

/*
 * Used as the loading screen for the app
 * The source of the image can be changed to any image to be displayed when the app intially loads
 */
export default function SplashScreen() {
  
  
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require('../../assets/images/JDI_LOGO.png')} />
      <ActivityIndicator style={styles.spinner}/>
      <Text style={styles.text}>Just a moment...</Text>
    </View>
  );
}
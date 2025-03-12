import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { styles } from './styles';

export default function HomeScreen({ navigation }: { navigation: any }) {
  return (
    <View style={styles.container}>
      <View style={styles.welcomeBox}>
        <Text style={styles.welcomeText}>Welcome!</Text>
        <Text style={styles.welcomeBlurb}>
          Welcome to a place of support and healing. This app is here to provide
          you with resources designed to help you reclaim your sense of safety
          and strength. Whether you’re seeking information, connection, or
          guidance, we’re here to offer tools that empower you on your journey.
        </Text>
      </View>
      <View style={styles.tutorialBox}>
        <Text style={styles.viewTutorialText}>
          Ready to start? Click “View Tutorial” to learn how to use the app.
        </Text>
        <TouchableOpacity
          style={styles.Button}
          onPress={() => navigation.navigate('Tutorial')}
        >
          <Text style={styles.buttonText}>View Tutorial</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

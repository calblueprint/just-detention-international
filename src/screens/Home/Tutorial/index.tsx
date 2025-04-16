import React, { useState } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import styles from './styles';

export default function Tutorial() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const tutorialImages = [
    require('src/assets/images/tutorial-photos/Tutorial1.png'),
    require('src/assets/images/tutorial-photos/Tutorial2.png'),
    require('src/assets/images/tutorial-photos/Tutorial3.png'),
    require('src/assets/images/tutorial-photos/Tutorial4.png'),
    require('src/assets/images/tutorial-photos/Tutorial5.png'),
    require('src/assets/images/tutorial-photos/Tutorial6.png'),
    require('src/assets/images/tutorial-photos/Tutorial7.png'),
    require('src/assets/images/tutorial-photos/Tutorial8.png'),
    require('src/assets/images/tutorial-photos/Tutorial9.png'),
    require('src/assets/images/tutorial-photos/Tutorial10.png'),
    require('src/assets/images/tutorial-photos/Tutorial11.png'),
    require('src/assets/images/tutorial-photos/Tutorial12.png'),
    require('src/assets/images/tutorial-photos/Tutorial13.png'),
  ];

  const handleNext = () => {
    if (currentIndex < tutorialImages.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handleBack = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.tutorialBox}>
        <Image source={tutorialImages[currentIndex]} style={styles.image} />
      </View>
      <View style={styles.buttonContainer}>
        <View style={styles.leftButtonWrapper}>
          {currentIndex !== 0 && (
            <TouchableOpacity style={styles.button} onPress={handleBack}>
              <Text style={styles.buttonText}>Back</Text>
            </TouchableOpacity>
          )}
        </View>
        <View style={styles.rightButtonWrapper}>
          {currentIndex !== tutorialImages.length - 1 && (
            <TouchableOpacity style={styles.button} onPress={handleNext}>
              <Text style={styles.buttonText}>Next</Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
    </View>
  );
}

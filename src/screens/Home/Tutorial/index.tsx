import React, { useState } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import styles from './styles';

export default function Tutorial() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const tutorialImages = [
    require('src/assets/images/tutorial-photos/Tutorial0.png'),
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
        <TouchableOpacity
          style={[styles.button, currentIndex === 0 && styles.disabledButton]}
          onPress={handleBack}
          disabled={currentIndex === 0}
        >
          <Text style={styles.buttonText}>Back</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.button,
            currentIndex === tutorialImages.length - 1 && styles.disabledButton,
          ]}
          onPress={handleNext}
          disabled={currentIndex === tutorialImages.length - 1}
        >
          <Text style={styles.buttonText}>Next</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

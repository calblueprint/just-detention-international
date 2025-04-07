import React, { useEffect, useRef, useState } from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { getHealingResourceData } from '@/supabase/queries/generalQueries';
import { HealingResource } from '@/types/types';
import styles from './styles';

const themes = ['Chapter 1', 'Chapter 2', 'Chapter 3', 'Chapter 4'];

export default function HealingCatalogue() {
  const [resources, setResources] = useState<HealingResource[]>([]);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const scrollViewRef = useRef<ScrollView | null>(null);
  const [headerPositions, setHeaderPositions] = useState<number[]>([]);

  useEffect(() => {
    const fetchResources = async () => {
      const data = await getHealingResourceData();
      setResources(data);
    };
    fetchResources();
  }, []);

  const groupedResources = themes.reduce(
    (acc, theme) => {
      acc[theme] = resources.filter(resource =>
        resource.topics.includes(theme),
      );
      return acc;
    },
    {} as Record<string, HealingResource[]>,
  );

  const scrollToTheme = (index: number) => {
    const targetY = headerPositions[index] || 0;
    const paddingTop = 30;
    setSelectedIndex(index);
    scrollViewRef.current?.scrollTo({
      y: targetY - paddingTop,
      animated: true,
    });
  };

  const onLayoutHeader =
    (index: number) => (event: { nativeEvent: { layout: { y: number } } }) => {
      const { y } = event.nativeEvent.layout;
      setHeaderPositions(prevPositions => {
        const newPositions = [...prevPositions];
        newPositions[index] = y;
        return newPositions;
      });
    };

  return (
    <View style={styles.container}>
      <View style={styles.themesContainer}>
        {themes.map((theme, index) => (
          <TouchableOpacity
            key={index}
            style={[styles.themeButton,
              selectedIndex === index && styles.selectedThemeButton

            ]}
            onPress={() => scrollToTheme(index)
            }
   
          >
            <Text style={selectedIndex === index ? styles.selectedButtonText: styles.themeButtonText}>
              {theme}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
      <ScrollView ref={scrollViewRef}>
        <View style={styles.resourcesContainer}>
          {themes.map((theme, index) => (
            <>
              <View
                style={styles.themeHeader}
                onLayout={onLayoutHeader(index)}
                key={index}
              >
                <Text style={styles.themeHeaderText}>{theme}</Text>
              </View>
              <View style={styles.cardsContainer}>
                {groupedResources[theme].map((resource, resourcesIndex) => (
                  <View style={styles.resourceContainer} key={resourcesIndex}>
                    <View style={styles.resourceCard}></View>
                    <Text style={styles.resourceText}>
                      {resource.text_content}
                    </Text>
                  </View>
                ))}
              </View>
            </>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

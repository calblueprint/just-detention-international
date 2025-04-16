import React, { useEffect, useState } from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import RenderHTML, { MixedStyleRecord } from 'react-native-render-html';
import { useFonts } from 'expo-font';
import LeftCarrot from 'src/assets/images/left-carrot.svg';
import RightCarrot from 'src/assets/images/right-carrot.svg';
import {
  getNeighboringSubheadingIds,
  getSubheadingById,
} from '@/supabase/queries/generalQueries';
import styles from './styles';

export default function HFHGuide({
  id,
  navigation,
}: {
  id: string;
  navigation: any;
}) {
  const [htmlContent, setHtmlContent] = useState<string | null>(null);
  const [nextId, setNextId] = useState<string>('placeholder');
  const [prevId, setPrevId] = useState<string>('placeholder');

  const [fontsLoaded] = useFonts({
    'Roboto Serif': require('src/assets/fonts/Roboto_Serif/RobotoSerif-Regular.ttf'),
    'Roboto Serif Bold': require('src/assets/fonts/Roboto_Serif/RobotoSerif-Bold.ttf'),
    'Roboto Serif Italic': require('src/assets/fonts/Roboto_Serif/RobotoSerif-Italic.ttf'),
  });

  useEffect(() => {
    const fetchHtml = async () => {
      const [theNextId, thePrevId] = await getNeighboringSubheadingIds(id);
      setNextId(theNextId);
      setPrevId(thePrevId);
      const url = await getSubheadingById(id);
      if (url) {
        const response = await fetch(url);
        const html = await response.text();
        setHtmlContent(html);
      }
    };
    fetchHtml();
  }, [id]);

  const handleNav = (prev: boolean) => {
    if (prev) {
      navigation.navigate('DynamicHealingPage', { id: prevId });
    } else {
      navigation.navigate('DynamicHealingPage', { id: nextId });
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        {fontsLoaded ? (
          htmlContent ? (
            <RenderHTML
              contentWidth={300}
              source={{ html: htmlContent }}
              tagsStyles={htmlStyles}
              defaultTextProps={{
                style: {
                  fontFamily: 'Roboto Serif',
                  color: '#444',
                },
              }}
            />
          ) : (
            <Text>Loading content...</Text>
          )
        ) : (
          <Text>Loading content...</Text>
        )}
        <View style={styles.buttonContainer}>
          {prevId ? (
            <TouchableOpacity
              style={styles.button}
              onPress={() => handleNav(true)}
            >
              <LeftCarrot />
              <Text style={styles.buttonText}>Back</Text>
            </TouchableOpacity>
          ) : (
            <View />
          )}
          {nextId ? (
            <TouchableOpacity
              style={styles.button}
              onPress={() => handleNav(false)}
            >
              <Text style={styles.buttonText}>Next</Text>
              <RightCarrot />
            </TouchableOpacity>
          ) : (
            <View />
          )}
        </View>
      </ScrollView>
    </View>
  );
}

const htmlStyles: MixedStyleRecord = {
  p: {
    fontFamily: 'Roboto Serif',
    fontSize: 20,
    fontWeight: '200',
    color: '#444',
    lineHeight: 30,
    marginVertical: 6,
    letterSpacing: -0.308,
  },
  h3: {
    fontFamily: 'Roboto Serif Bold',
    fontSize: 30,
    color: '#444',
    lineHeight: 30,
    marginVertical: 6,
    letterSpacing: -0.308,
  },
  li: {
    fontSize: 25,
    lineHeight: 24,
    color: '#444',
  },
  c6: {
    fontSize: 25,
    lineHeight: 24,
    color: '#444',
  },
};

import React, { useEffect, useState } from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import RenderHTML, { MixedStyleRecord } from 'react-native-render-html';
import { useFonts } from 'expo-font';
import LeftCarrot from 'src/assets/images/left-carrot.svg';
import RightCarrot from 'src/assets/images/right-carrot.svg';
import {
  getNextSubheadingId,
  getSubheadingById,
} from '@/supabase/queries/generalQueries';
import styles from './styles';

// mapping of IDs to next screens -- this is not how we should be doing this, just to add some functionality for demo
const idToNextPageMapping: Record<string, string> = {
  '7012e24a-894e-4972-9dcc-612666bff21e': 'WelcomeSectionOne',
  'ac62e7cb-649c-4b43-b979-43f20c5a6760': 'ChapterOneSectionOne',
  'bc8fc4fe-33cf-40b1-b7b3-e5e62e7f5570': '',
  'd72fd68a-2fff-43f7-85dc-7d2ce63f3cb4': 'WelcomeSectionTwo',
  'e35ce756-9579-4e33-8361-54eeb1eecb2b': 'ChapterOne',
};

const findNextPage = (currentId: string) => {
  return idToNextPageMapping[currentId] || null; // Return the next page or null if no mapping exists
};

export default function HFHGuide({
  id,
  navigation,
}: {
  id: string;
  navigation: any;
}) {
  const [htmlContent, setHtmlContent] = useState<string | null>(null);
  const [nextId, setNextId] = useState<string>(
    '7012e24a-894e-4972-9dcc-612666bff21e',
  );

  const [fontsLoaded] = useFonts({
    'Roboto Serif': require('src/assets/fonts/Roboto_Serif/RobotoSerif-Regular.ttf'),
    'Roboto Serif Bold': require('src/assets/fonts/Roboto_Serif/RobotoSerif-Bold.ttf'),
    'Roboto Serif Italic': require('src/assets/fonts/Roboto_Serif/RobotoSerif-Italic.ttf'),
  });

  useEffect(() => {
    const fetchHtml = async () => {
      const nextId = await getNextSubheadingId(id);
      setNextId(nextId);
      const url = await getSubheadingById(id);
      if (url) {
        const response = await fetch(url);
        const html = await response.text();
        setHtmlContent(html);
      }
    };
    fetchHtml();
  }, [id]);

  const handleNext = () => {
    if (nextId) {
      const nextPage = findNextPage(nextId);
      if (nextPage) {
        navigation.navigate(nextPage);
      } else {
        console.warn('Next page not found for this id');
      }
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
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.goBack()}
          >
            <LeftCarrot />
            <Text style={styles.buttonText}>Back</Text>
          </TouchableOpacity>
          {nextId && (
            <TouchableOpacity style={styles.button} onPress={handleNext}>
              <Text style={styles.buttonText}>Next</Text>
              <RightCarrot />
            </TouchableOpacity>
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

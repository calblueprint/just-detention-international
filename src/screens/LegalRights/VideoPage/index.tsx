import { useEffect, useState } from 'react';
import { Pressable, ScrollView, Text, View } from 'react-native';
import { Video } from 'expo-av';
import supabase from '@/supabase/createClient';
import { styles } from './styles';

export default function VideoPage(testProp: any) {
  // var for array of all the pages for the current language
  const [preaData, setPreaData] = useState([
    {
      id: 'string',
      is_short_answer: true,
      page_number: 0,
      parent_id: 'string',
      short_answer: 'string',
      spanish: false,
      survey: 'string',
      video_id: 'Section Title 1',
    },
  ]);
  const [index, setIndex] = useState(0); // index of current page in full array of pages
  const [language, setLanguage] = useState('english'); // which language associated to array of pages

  // video link associated to current page; used for src of video element
  const [videoLink, setVideoLink] = useState(
    'https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',
  );

  const nextPage = () => {
    setIndex(prevIndex => Math.min(prevIndex + 1, preaData.length - 1)); // next index in array of pages
  };

  const prevPage = () => {
    setIndex(prevIndex => Math.max(prevIndex - 1, 0)); // previous index in array of pages
  };

  // read in all the variables passed in from legal rights page; only once when initally rendered
  useEffect(() => {
    setPreaData(testProp['route']['params'][0]);
    setIndex(testProp['route']['params'][1]);
    setLanguage(testProp['route']['params'][2]);
  }, []);

  useEffect(() => {
    let response = supabase.storage // fetch current http link for current page
      .from('PREA_videos')
      .getPublicUrl(language + '/' + preaData[index]['video_id'] + '.mp4');
    let { data } = response;
    setVideoLink(data['publicUrl']); // set link for video link
  }, [index]); // run useEffect every time value of index changes

  return (
    <ScrollView style={styles.container}>
      <Video
        source={{ uri: videoLink }}
        rate={1.0}
        volume={1.0}
        isMuted={false}
        shouldPlay
        isLooping
        style={styles.video}
      />

      <View style={styles.buttonContainer}>
        <Pressable style={[styles.captionButtons]} onPress={prevPage}>
          <Text style={styles.buttonText}>{'<   Previous Section'}</Text>
        </Pressable>
        <Pressable style={[styles.captionButtons]} onPress={nextPage}>
          <Text style={styles.buttonText}>{'Next Section   >'}</Text>
        </Pressable>
      </View>
    </ScrollView>
  );
}

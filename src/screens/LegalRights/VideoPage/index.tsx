import React, { useEffect, useRef, useState } from 'react';
import { Image, Pressable, Text, View } from 'react-native';
import { useVideoPlayer, VideoView } from 'expo-video';
import { useFocusEffect } from '@react-navigation/native';
import leftArrow from '@/assets/images/left-arrow.png';
import rightArrow from '@/assets/images/right-arrow.png';
import { LegalScreenProps } from '@/navigation/types';
import { getVideoLink } from '@/supabase/queries/storageQueries';
import { styles } from './styles';

export default function VideoPage({
  navigation,
  route,
}: LegalScreenProps<'VideoPage'>) {
  const { currentModules, pageNumber, language } = route.params;

  // var for array of all the pages for the current language
  const [preaData, setPreaData] = useState([
    {
      title: 'string',
      id: 'string',
      is_short_answer: true,
      page_number: 0,
      parent_id: 'string',
      spanish: false,
      survey: 'string',
      video_id: 'Section Title 1',
      description: 'string',
    },
  ]);
  const [index, setIndex] = useState(Infinity); // index of current page in full array of pages; have to set to infinite or else if the first page (actually index 0) is pressed, the videopage wont update
  const [title, setTitle] = useState('Title');
  const [description, setDescription] = useState('');

  const videoLinkRef = useRef(
    'https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',
  );

  const player = useVideoPlayer(videoLinkRef.current, thisPlayer => {
    thisPlayer.play();
  });

  const nextPage = () => {
    setIndex(prevIndex => Math.min(prevIndex + 1, preaData.length - 1)); // next index in array of pages
  };

  const prevPage = () => {
    setIndex(prevIndex => Math.max(prevIndex - 1, 0)); // previous index in array of pages
  };

  // read in all the variables passed in from legal rights page; only once when initally rendered
  useEffect(() => {
    setPreaData(currentModules);
    setIndex(pageNumber);
  }, []);

  useEffect(() => {
    const fetchVideoLink = async () => {
      videoLinkRef.current = getVideoLink(language, preaData[index].video_id); // Update the ref with the new video link
    };

    fetchVideoLink();
    player.replace(videoLinkRef.current);

    try {
      setTitle(preaData[index].title);
      setDescription(preaData[index].description || '');
    } catch {
      setTitle('Title');
      setDescription('');
    }
  }, [index]);

  // useFocusEffect(
  //   React.useCallback(() => {
  //     if (playerRef.current) {
  //       playerRef.current.play();
  //     }

  //     return () => {
  //       if (playerRef.current) {
  //         playerRef.current.pause?.(); // Safe check for pause
  //       }
  //     };
  //   }, []),
  // );

  return (
    <View style={styles.container}>
      <Pressable
        style={
          index !== 0
            ? [styles.captionButtons]
            : [styles.captionButtons, styles.noButton]
        }
        onPress={prevPage}
      >
        <Image style={[styles.arrows]} source={leftArrow} />
        <Text style={styles.buttonText}>Back</Text>
      </Pressable>

      <View style={styles.videoAndTitle}>
        <VideoView
          style={styles.video}
          player={player}
          allowsFullscreen
          allowsPictureInPicture
        />

        <View style={{ width: '87%' }}>
          <Text style={styles.title}>{title}</Text>
          {description ? (
            <Text style={styles.description}>{description}</Text>
          ) : null}
        </View>
      </View>

      <Pressable
        style={
          index !== preaData.length - 1
            ? [styles.captionButtons]
            : [styles.captionButtons, styles.noButton]
        }
        onPress={nextPage}
      >
        <Text style={styles.buttonText}>Next</Text>
        <Image style={[styles.arrows]} source={rightArrow} />
      </Pressable>
    </View>
  );
}

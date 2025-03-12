import { useCallback, useEffect, useState } from 'react';
import { FlatList, Pressable, ScrollView, Text, View} from 'react-native';
import {Image} from 'expo-image'
import LegalRightsItem from '@/components/LegalRightsItem';
import { LegalScreenProps } from '@/navigation/types';
import { getPreaByLanguage } from '@/supabase/queries/generalQueries';
import { VideoResource } from '@/types/types';
import { styles } from './styles';
import SplashScreenComponent from '@/components/SplashScreen/SplashScreen';
import * as SplashScreen2 from 'expo-splash-screen';
import { getPosterLink } from '@/supabase/queries/storageQueries';


export default function LegalRights({
  navigation,
}: LegalScreenProps<'LegalRights'>) {
  const [englishPressed, setEnglishPressed] = useState(true); // english or spanish
  const [isLoading, setIsLoading] = useState(true);

  const [englishModules, setEnglishModules] = useState<VideoResource[]>([]);
  const [spanishModules, setSpanishModules] = useState<VideoResource[]>([]);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    try {
      const engData = await getPreaByLanguage(false);
      const spaData = await getPreaByLanguage(true);
      let englishUrls = engData.map(({video_id})=>{
        return getPosterLink("english", video_id) ?? ''
      })
      await Image.prefetch(englishUrls, 'memory')
      // await Promise.allSettled(spaData.map(({video_id})=>{
      //   let url = getPosterLink("spanish", video_id)
      //   if (url) {
      //     return Image.prefetch(url)
      //   }
      // }))
      setEnglishModules(engData);
      setSpanishModules(spaData);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setIsLoading(false);
      await SplashScreen2.hideAsync();
    }
  }

  const currentModules = englishPressed ? englishModules : spanishModules;

  // navigate to video player
  const goToVideo = (pageNumber: number, language: string) => {
    navigation.navigate('VideoPage', {
      currentModules,
      pageNumber: pageNumber - 1,
      language,
    });
  };
  // hi

  // show splash screen while loading
  // Show different splash screen while loading
  // if (isLoading) {
  //   return (
  //     <View style={styles.container}>
  //       <Image style={styles.logo} source={require('../../assets/images/JDI_LOGO.png')} />
  //       <Text style={styles.text}>Just a moment...</Text>
  //   </View>
  //   );
  // }


  return (
    <View style={{display: isLoading ? 'none' : 'flex'}}>
      <Text style={styles.title}>Legal Rights</Text>
      <View style={styles.buttonContainer}>
        <Pressable
          style={[
            styles.captionButtons,
            englishPressed && styles.captionButtonsPressed,
          ]}
          onPress={() => setEnglishPressed(true)}
        >
          <Text style={styles.buttonText}>English CC</Text>
        </Pressable>
        <Pressable
          style={[
            styles.captionButtons,
            !englishPressed && styles.captionButtonsPressed,
          ]}
          onPress={() => setEnglishPressed(false)}
        >
          <Text style={styles.buttonText}>Español CC</Text>
        </Pressable>
      </View>

      <ScrollView>
        <FlatList
          style={styles.preaGrid}
          data={currentModules}
          renderItem={({ item }) => (
            <LegalRightsItem key={item.id} section={item} onPress={goToVideo} />
          )}
          numColumns={3}
          columnWrapperStyle={{
            justifyContent: 'space-between',
            gap: 40,
            marginBottom: 10,
          }}
        />
      </ScrollView>
    </View>
  );
}

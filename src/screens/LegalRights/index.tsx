import { useEffect, useState } from 'react';
import { FlatList, Pressable, ScrollView, Text, View } from 'react-native';
import LegalRightsItem from '@/components/LegalRightsItem';
import { LegalScreenProps } from '@/navigation/types';
import { getPreaByLanguage } from '@/supabase/queries/generalQueries';
import { VideoResource } from '@/types/types';
import { styles } from './styles';

export default function LegalRights({
  navigation,
}: LegalScreenProps<'LegalRights'>) {
  const [englishPressed, setEnglishPressed] = useState(true); // english or spanish 🧍‍♂️

  // english pages var mhm
  const [englishModules, setEnglishModules] = useState<VideoResource[]>([
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

  // spanish pages var mhm
  const [spanishModules, setSpanishModules] = useState<VideoResource[]>([
    {
      title: 'string',
      id: 'string',
      is_short_answer: true,
      page_number: 0,
      parent_id: 'string',
      spanish: true,
      survey: 'string',
      video_id: 'Título de la Sección 1',
      description: 'string',
    },
  ]);

  // get data from supabase on render; only once fr
  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    setEnglishModules(await getPreaByLanguage(false)); // update relative useStates
    setSpanishModules(await getPreaByLanguage(true));
  }

  const currentModules = englishPressed ? englishModules : spanishModules; // pages actually being rendered; conditiioned on lanugage boolean

  // navigate to video player
  const goToVideo = (pageNumber: number, language: string) => {
    navigation.navigate('VideoPage', {
      currentModules: currentModules,
      pageNumber: pageNumber - 1,
      language: language,
    });
  };

  return (
    <>
      <Text style={styles.title}>Legal Rights</Text>
      <View style={styles.buttonContainer}>
        <Pressable
          style={[
            styles.captionButtons,
            englishPressed && styles.captionButtonsPressed,
          ]}
          onPress={() => {
            if (!englishPressed) {
              setEnglishPressed(!englishPressed);
            }
          }}
        >
          <Text style={styles.buttonText}>English CC</Text>
        </Pressable>
        <Pressable
          style={[
            styles.captionButtons,
            !englishPressed && styles.captionButtonsPressed,
          ]}
          onPress={() => {
            if (englishPressed) {
              setEnglishPressed(!englishPressed);
            }
          }}
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
    </>
  );
}

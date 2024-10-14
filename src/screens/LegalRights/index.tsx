import { Button, Image, ScrollView, Text, View } from 'react-native';
import placeholderPoster from '@/assets/images/placeholder.png';
import { styles } from './styles';

export default function LegalRights({ navigation }: { navigation: any }) {
  function rick_rolls() {
    navigation.navigate('Video Page');
    // console.log('working');
  }

  const placeholderModules = [
    {
      title: 'Section Title 1',
      poster_url: placeholderPoster,
      onClickFunction: rick_rolls,
    },
    {
      title: 'Section Title 2',
      poster_url: placeholderPoster,
      onClickFunction: rick_rolls,
    },
    {
      title: 'Section Title 3',
      poster_url: placeholderPoster,
      onClickFunction: rick_rolls,
    },
    {
      title: 'Section Title 4',
      poster_url: placeholderPoster,
      onClickFunction: rick_rolls,
    },
    {
      title: 'Section Title 5',
      poster_url: placeholderPoster,
      onClickFunction: rick_rolls,
    },
    {
      title: 'Section Title 6',
      poster_url: placeholderPoster,
      onClickFunction: rick_rolls,
    },
    {
      title: 'Section Title 7',
      poster_url: placeholderPoster,
      onClickFunction: rick_rolls,
    },
    {
      title: 'Section Title 8',
      poster_url: placeholderPoster,
      onClickFunction: rick_rolls,
    },
    {
      title: 'Section Title 9',
      poster_url: placeholderPoster,
      onClickFunction: rick_rolls,
    },
  ];

  return (
    <>
      <Text style={styles.title}>Legal Rights</Text>
      <ScrollView>
        <View style={styles.preaModulesView}>
          {placeholderModules.map(section => (
            <View
              style={styles.preaModule}
              onTouchStart={section['onClickFunction']}
            >
              <Image
                style={styles.modulePoster}
                source={section['poster_url']}
              />
              <Text style={styles.moduleTitle}>{section['title']}</Text>
            </View>
          ))}
        </View>
      </ScrollView>
    </>
  );
}

// import React, { useEffect, useState } from 'react';
// import { Button, Text, View } from 'react-native';
// import styles from './styles';

// export default function SeekHelp({ navigation }: { navigation: any }) {
//   return(
//     <View style={styles.buttonContainer}>
//       <Button title='State Resources' onPress={() => navigation.navigate('Resource List')} />
//       <Button title='National Resources' onPress={() => navigation.navigate('Resource List')} />
//     </View>
//   )
// }

import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { styles } from './styles'; // Make sure this is the correct path

export default function SeekHelp({ navigation }: { navigation: any }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Resource List')}
      >
        <Text style={styles.buttonText}>California</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Resource List')}
      >
        <Text style={styles.buttonText}>National</Text>
      </TouchableOpacity>
    </View>
  );
}

/*
  const [summaries, setSummaries] = useState<Resource[]>([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const data = await getSeekHelpData();
      setSummaries(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <View>
      <Button title="Fetch Data" onPress={fetchData} />
      {summaries.length > 0 ? (
        summaries.map((resource, index) => (
          <Text key={index}>{resource.summary}</Text>
        ))
      ) : (
        <Text>Loading...</Text>
      )}
    </View>
  );
}
  */

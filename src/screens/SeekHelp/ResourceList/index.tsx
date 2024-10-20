import React, { useEffect, useState } from 'react';
import { Button, Text, TouchableOpacity, View } from 'react-native';
import { getSeekHelpData } from '@/supabase/queries/generalQueries';
import { Resource } from '@/types/types';
import { styles } from './styles';

export default function ResourceList() {
  const filters = [
    'General Resources',
    'Health Organizations',
    'LGBT Organizations',
    'Legal Services',
    'Government Resources',
  ];
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
    <View style={styles.container}>
      <View style={styles.leftPanel}>
        {filters.map((filter, index) => (
          <TouchableOpacity key={index} style={styles.filterButton}>
            <Text>{filter}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <View style={styles.rightPanel}>
        <View>
          {summaries.length > 0 ? (
            summaries.map((resource, index) => (
              <Text key={index}>{resource.summary}</Text>
            ))
          ) : (
            <Text>Loading...</Text>
          )}
        </View>
      </View>
    </View>
  );
}
// return(
//   <View style={styles.container}>

//     <View style={styles.leftPanel}>
//       <Button title="General Resources" />
//       <Button title="Health Organizations" />
//       <Button title="LGBT Organizations"  />
//       <Button title="Legal Services" />
//       <Button title="Government Resources" />
//     </View>

//     <View style={styles.rightPanel}>
//       <Button title="Resource 1" />
//       <Button title="Resource 2" />
//       <Button title="Resource 3" />
//     </View>
//   </View>
// )

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

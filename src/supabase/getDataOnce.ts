import AsyncStorage from '@react-native-async-storage/async-storage';
import { transformToDrawerItems } from '../utils/utils';
import supabase from './createClient';

const DATA_STORAGE_KEY = 'mySupabaseData'; // is this good practice???

const getDataOnce = async () => {
  try {
    const storedDataString = await AsyncStorage.getItem(DATA_STORAGE_KEY);

    if (storedDataString) {
      return JSON.parse(storedDataString);
    }

    const { data, error } = await supabase.from('hfh_subheading').select('*');

    if (error) throw error;

    const formattedData = transformToDrawerItems(data);

    await AsyncStorage.setItem(DATA_STORAGE_KEY, JSON.stringify(formattedData));
  } catch (err) {
    console.error('Failed to fetch or store data:', err);
    return null;
  }
};

export default getDataOnce;

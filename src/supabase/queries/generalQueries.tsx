import { subheadingId } from '@/navigation/types';
import { HealingResource, Resource, VideoResource } from '@/types/types';
import supabase from '../createClient';
import { gethfhHTML } from './storageQueries';

export const getHealingResourceData = async (): Promise<HealingResource[]> => {
  const { data, error } = await supabase.from('healing_resources').select('*');
  if (error) {
    throw new Error(`Error fetching resources: ${error.message}`);
  }
  return data.map(resource => ({
    ...resource,
    topics: resource.topics
      ? resource.topics.split(',').map((topic: string) => topic.trim())
      : [],
  }));
};

export const getSeekHelpData = async (): Promise<Resource[]> => {
  const { data, error } = await supabase
    .from('state_resources')
    .select('*')
    .in('state', ['California', 'National']);

  if (error) {
    throw new Error(`Error fetching resources: ${error.message}`);
  }
  return data as Resource[];
};

export const getPreaByLanguage = async (
  languageBool: boolean,
): Promise<VideoResource[]> => {
  const { data, error } = await supabase // grab all the not spanish pages from the supabase table
    .from('prea_page')
    .select()
    .eq('spanish', languageBool);
  if (error) {
    throw error;
  }
  data.sort((a, b) => a.page_number - b.page_number); // sort the array based on pages' page_number
  return data;
};

export const getSubheadingById = async (id: subheadingId): Promise<string> => {
  const { data, error } = await supabase
    .from('hfh_subheading')
    .select()
    .eq('id', id);
  if (error) {
    throw error;
  }
  const htmlLink = data[0].html_link;
  return gethfhHTML(htmlLink);
};

export const getNextSubheadingId = async (
  id: subheadingId,
): Promise<string> => {
  const { data, error } = await supabase
    .from('hfh_subheading')
    .select()
    .eq('id', id);
  if (error) {
    throw error;
  }
  const nextId = data[0].next;
  return nextId;
};

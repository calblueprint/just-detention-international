import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { VideoResource } from '@/types/types';

export type subheadingId = string;

export type LegalStackParams = {
  LegalRights: undefined;
  VideoPage: {
    currentModules: VideoResource[];
    pageNumber: number;
    language: string;
  };
};

export type HealingStackParams = {
  HealingResources: undefined;
  HopeForHealingGuide: {
    id: subheadingId;
  };
  HealingCatalogue: undefined;
};

export type SeekHelpStackParams = {
  SeekHelp: undefined;
  ResourceList: undefined;
};

export type BottomTabParams = {
  Legal: undefined;
  Healing: undefined;
  Seek: undefined;
  Tutorial: undefined;
};
export type HomeStackParams = {
  Home: undefined;
  Tutorial: undefined;
};

export type LegalScreenProps<T extends keyof LegalStackParams> =
  NativeStackScreenProps<LegalStackParams, T>;

export type HealingScreenProps<T extends keyof HealingStackParams> =
  NativeStackScreenProps<HealingStackParams, T>;

export type SeekHelpScreenProps<T extends keyof SeekHelpStackParams> =
  NativeStackScreenProps<SeekHelpStackParams, T>;

export type BottomTabScreenProps<T extends keyof BottomTabParams> =
  BottomTabNavigationProp<BottomTabParams, T>;

export type HomeScreenProps<T extends keyof HomeStackParams> =
  NativeStackScreenProps<HomeStackParams, T>;

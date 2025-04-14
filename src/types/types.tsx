export interface Resource {
  summary: string;
  [key: string]: string;
}

export type HealingResource = {
  id: number;
  video_id: number;
  text_content: string;
  is_video: boolean;
  topics: string[];
};

export interface SeekHelpProps {
  org_name: string;
  summary: string;
  address: string;
  phone_number: string;
  hotline_number: string;
  office_hours: string;
  tags: string;
}
export type VideoResource = {
  title: string;
  id: string;
  is_short_answer: boolean;
  page_number: number;
  parent_id: string;
  spanish: boolean;
  survey: string;
  video_id: string;
  description: string;
};

export interface VideoSectionItemProps {
  section: VideoResource;
  onPress: (pageNumber: number, language: string) => void;
}

import { DrawerItem, HFHPage } from '@/types/types';

export const transformToDrawerItems = (data: HFHPage[]): DrawerItem[] => {
  const chapters = new Map<number, DrawerItem>();

  for (const page of data) {
    const { chapter_number, subheading_number, chapter_name, id } = page;

    // main chapter heading
    if (subheading_number === 0) {
      chapters.set(chapter_number, {
        title: chapter_name,
        mainPageId: id,
        subItems: [],
      });
    } else {
      const chapter = chapters.get(chapter_number);
      if (chapter) {
        chapter.subItems.push({
          title: chapter_name,
          pageId: id,
        });
      } else {
        // chapter doesn't exist yet - create a placeholder for now
        chapters.set(chapter_number, {
          title: `Chapter ${chapter_number}`, // will be overwritten
          mainPageId: '', // will be overwritten
          subItems: [
            {
              title: chapter_name,
              pageId: id,
            },
          ],
        });
      }
    }
  }
  const formattedData = Array.from(chapters.entries())
    .sort((a, b) => a[0] - b[0])
    .map(([, item]) => item);
  return formattedData;
};

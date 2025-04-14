import { DrawerItem, HFHPage } from '@/types/types';

export const transformToDrawerItems = (data: HFHPage[]): DrawerItem[] => {
  const chapters = new Map<number, DrawerItem>();

  for (const page of data) {
    const { chapter_number, subheading_number, title, id } = page;

    // main chapter heading
    if (subheading_number === 0) {
      chapters.set(chapter_number, {
        title,
        mainPageId: id,
        subItems: [],
      });
    } else {
      const chapter = chapters.get(chapter_number);
      if (chapter) {
        chapter.subItems.push({
          title,
          pageId: id,
        });
      } else {
        // chapter doesn't exist yet - create a placeholder for now
        chapters.set(chapter_number, {
          title: `Chapter ${chapter_number}`, // will be overwritten
          mainPageId: '', // will be overwritten
          subItems: [
            {
              title,
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
  console.log(JSON.stringify(formattedData, null, 2));
  return formattedData;
};

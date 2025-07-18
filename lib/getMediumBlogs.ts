import Parser from 'rss-parser';

type CustomItem = {
  title: string;
  link: string;
  content: string;
  'content:encoded': string;
  'media:thumbnail'?: { url: string };
};

type BlogPost = {
  title: string;
  link: string;
  thumbnail: string;
};

const getMediumBlogs = async (): Promise<BlogPost[]> => {
  const parser: Parser<{}, CustomItem> = new Parser({
    customFields: {
      item: ['media:thumbnail', 'content:encoded'],
    },
  });

  const feed = await parser.parseURL('https://medium.com/feed/@m.areebbinnadeem');

  const posts = feed.items.map(item => {
    // First try media:thumbnail
    const thumbnailFromMedia = item['media:thumbnail']?.url;

    // Then try extracting from content HTML
    const content = item['content:encoded'] || item.content || '';
    const imgMatch = content.match(/<img[^>]+src="([^">]+)"/);
    const thumbnailFromContent = imgMatch ? imgMatch[1] : null;

    const thumbnail = thumbnailFromMedia || thumbnailFromContent || '/blogs/default.jpg';

    return {
      title: item.title ?? '',
      link: item.link ?? '#',
      thumbnail,
    };
  });

  return posts.slice(0, 3);
};

export default getMediumBlogs;

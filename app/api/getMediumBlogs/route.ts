import { NextResponse } from 'next/server';
import Parser from 'rss-parser';

export async function GET() {
  const parser = new Parser({
    customFields: {
      item: ['media:content', 'content:encoded'],
    },
  });

  const feed = await parser.parseURL('https://medium.com/feed/@m.areebbinnadeem'); 

  const items = feed.items.map((item) => {
    // Try to extract image from media:content or from content HTML
    let thumbnail = '';

    // @ts-ignore
    if (item['media:content']?.$?.url) {
      // Case 1: <media:content> exists
      // @ts-ignore
      thumbnail = item['media:content'].$.url;
    } else if (item['content:encoded']) {
      // Case 2: Extract first <img> from content HTML
      const match = item['content:encoded'].match(/<img[^>]+src="?([^"\s]+)"?[^>]*>/);
      if (match?.[1]) {
        thumbnail = match[1];
      }
    }

    return {
      title: item.title,
      link: item.link,
      pubDate: item.pubDate,
      thumbnail,
    };
  });

  return NextResponse.json({ items });
}

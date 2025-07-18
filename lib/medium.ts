// lib/medium.ts
import Parser from "rss-parser";

const parser = new Parser();

export async function getMediumPosts(limit = 5) {
  const feed = await parser.parseURL("https://medium.com/feed/@m.areebbinnadeem");
  return feed.items.slice(0, limit).map(post => ({
    title: post.title || "",
    link: post.link || "",
    pubDate: post.pubDate || "",
    contentSnippet: post.contentSnippet || "",
  }));
}

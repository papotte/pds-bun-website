import { Client } from "@notionhq/client";
import * as fs from "fs";
import { NotionToMarkdown } from "notion-to-md";
import path from "path";
import { remark } from "remark";
import mdx from "remark-mdx";
import formatDate from "./dates";

const notionClient = new Client({
  auth: process.env.NOTION_INTEGRATION_TOKEN,
});

const POSTS_DIR = path.join(process.cwd(), "posts");
const METADATA_DIR = path.join(POSTS_DIR, "metadata");
if (!fs.existsSync(POSTS_DIR)) {
  fs.mkdirSync(POSTS_DIR);
}
if (!fs.existsSync(METADATA_DIR)) {
  fs.mkdirSync(METADATA_DIR);
}

type BlogPost = any;

export async function getPosts(databaseId: string): Promise<BlogPost[]> {
  const response = await notionClient.databases.query({
    database_id: databaseId,
  });

  return response.results;
}

const n2m = new NotionToMarkdown({ notionClient });

export function extractPostMetadata(post: BlogPost) {
  const uuid = post.id;
  const slug = post.properties.slug.rich_text[0].plain_text;
  const title = post.properties.page.title[0].plain_text;
  const abstract = post.properties.abstract.rich_text[0]?.plain_text;
  const tags = post.properties.tags.multi_select;
  const createdTime = formatDate(post.created_time);
  return { uuid, slug, title, abstract, tags, createdTime };
}

export async function createPosts(posts: BlogPost[]) {
  const response = [];
  for (const post of posts) {
    const metadata = extractPostMetadata(post);
    const mdBlocks = await n2m.pageToMarkdown(metadata.uuid);
    const mdString = n2m.toMarkdownString(mdBlocks);
    const mdxFilename = `${POSTS_DIR}/${metadata.slug}.mdx`;
    const metadataFilename = `${METADATA_DIR}/${metadata.slug}.json`;
    try {
      fs.writeFile(mdxFilename, mdString.parent, (err) => {
        err !== null && console.log("FSWrite", err);
      });
      fs.writeFile(metadataFilename, JSON.stringify(metadata), (err) => {
        err !== null && console.log("FSWrite", err);
      });
    } catch (e) {
      console.log("FSWrite", e);
    }
    response.push(metadata);
  }
  return response;
}
export function filterPosts(posts: BlogPost[]) {
  return posts.filter((post) => post.properties.published.checkbox);
}

export function getPostIds() {
  const fileNames = fs.readdirSync(POSTS_DIR);

  return fileNames.map((fileName) => {
    return {
      slug: fileName.replace(/\.mdx$/, ""),
    };
  });
}

export function getPostMetadata(id: string) {
  const fullPath = path.join(METADATA_DIR, `${id}.json`);
  const fileContents = fs.readFileSync(fullPath, "utf8");

  return JSON.parse(fileContents);
}

export async function getPostData(id: string) {
  const fullPath = path.join(POSTS_DIR, `${id}.mdx`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const processedContent = await remark().use(mdx).process(fileContents);
  return processedContent.toString();
}

// Sort posts in chronological order (newest first)
export function sortPosts(posts: BlogPost[]) {
  return posts.sort((a, b) => {
    let dateA = new Date(a.created_time).getTime();
    let dateB = new Date(b.created_time).getTime();

    return dateB - dateA;
  });
}

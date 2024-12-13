import { getCollection } from 'astro:content';

export async function getAllPosts() {
  const posts = await getCollection('blog', ({ data }) => {
    return data.draft !== true;
  });
  
  return posts.sort((a, b) => b.data.publishDate.getTime() - a.data.publishDate.getTime());
}

export async function getLatestPosts(count: number) {
  const posts = await getAllPosts();
  return posts.slice(0, count);
}
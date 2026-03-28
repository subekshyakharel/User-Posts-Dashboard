import { Post } from "@/types/post";

// 🔹 create unique key per user
const getStorageKey = (userId: number) => `local_posts_user_${userId}`;

// 🔹 get posts from localStorage
export const getLocalPostsByUser = (userId: number): Post[] => {
  if (typeof window === "undefined") return [];

  const data = localStorage.getItem(getStorageKey(userId));
  return data ? JSON.parse(data) : [];
};

// 🔹 save posts to localStorage
export const saveLocalPostsByUser = (userId: number, posts: Post[]) => {
  if (typeof window === "undefined") return;

  localStorage.setItem(getStorageKey(userId), JSON.stringify(posts));
};
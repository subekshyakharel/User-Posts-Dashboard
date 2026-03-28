"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import AddPostForm from "@/components/posts/addPostForm";
import Pagination from "@/components/posts/Pagination";
import PostList from "@/components/posts/postList";
import Loader from "@/components/common/loader";
import ErrorMessage from "@/components/common/errorMessage";
import { getPostsByUserId } from "@/lib/api";
import { getLocalPostsByUser, saveLocalPostsByUser } from "@/lib/localStorage";
import { RootState, AppDispatch } from "@/store/store";
import {
  addPostForUser,
  setPostsError,
  setPostsForUser,
  setPostsLoading,
} from "@/store/slices/postSlice";
import { Post } from "@/types/post";

const UserPostsClient = ({ userId }: { userId: number }) => {
  const dispatch = useDispatch<AppDispatch>();
  const { postsByUser, apiIsLoading, error } = useSelector(
    (state: RootState) => state.posts,
  );

  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 5;

  useEffect(() => {
    const fetchPosts = async () => {
      dispatch(setPostsLoading(true));
      dispatch(setPostsError(null));

      try {
        const apiPosts = await getPostsByUserId(userId);
        const localPosts = getLocalPostsByUser(userId);

        dispatch(
          setPostsForUser({
            userId,
            posts: [...localPosts, ...apiPosts],
          }),
        );
      } catch {
        dispatch(setPostsError("Something went wrong"));
      } finally {
        dispatch(setPostsLoading(false));
      }
    };

    fetchPosts();
  }, [dispatch, userId]);

  const allPosts = postsByUser[userId] || [];

  const totalPages = Math.ceil(allPosts.length / postsPerPage);

  const paginatedPosts = useMemo(() => {
    const startIndex = (currentPage - 1) * postsPerPage;
    const endIndex = startIndex + postsPerPage;
    return allPosts.slice(startIndex, endIndex);
  }, [allPosts, currentPage]);

  const handleAddPost = (title: string, body: string) => {
    const newPost: Post = {
      id: Date.now(),
      userId,
      title,
      body,
      isLocal: true,
    };

    dispatch(addPostForUser({ userId, post: newPost }));

    const updatedLocalPosts = [newPost, ...getLocalPostsByUser(userId)];
    saveLocalPostsByUser(userId, updatedLocalPosts);

    setCurrentPage(1);
  };
  return (
    <main className="min-h-screen bg-gray-50 px-4 py-10">
      <div className="mx-auto max-w-4xl">
        <div className="mb-6">
          <Link
            href="/users"
            className="mb-4 inline-block text-sm font-medium text-gray-700 hover:text-gray-900"
          >
            ← Back to Users
          </Link>

          <h1 className="text-3xl font-bold text-gray-900">User Posts</h1>
          <p className="mt-2 text-sm text-gray-600">
            View posts and add a new post locally.
          </p>
        </div>

        <div className="mb-8">
          <AddPostForm onSubmitPost={handleAddPost} />
        </div>

        {apiIsLoading && <Loader message="Loading posts..." />}

        {error && <ErrorMessage message={error} />}

        {!apiIsLoading && !error && (
          <>
            <PostList posts={paginatedPosts} />
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={setCurrentPage}
            />
          </>
        )}
      </div>
    </main>
  );
};

export default UserPostsClient;

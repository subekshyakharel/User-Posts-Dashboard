import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Post } from "@/types/post";

interface PostsState {
  postsByUser: Record<number, Post[]>;
  apiIsLoading: boolean;
  error: string | null;
}

const initialState: PostsState = {
  postsByUser: {},
  apiIsLoading: false,
  error: null,
};

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    setPostsForUser: (
      state,
      action: PayloadAction<{ userId: number; posts: Post[] }>,
    ) => {
      state.postsByUser[action.payload.userId] = action.payload.posts;
    },
    addPostForUser: (
      state,
      action: PayloadAction<{ userId: number; post: Post }>,
    ) => {
      const currentPosts = state.postsByUser[action.payload.userId] || [];
      state.postsByUser[action.payload.userId] = [
        action.payload.post,
        ...currentPosts,
      ];
    },
    setPostsLoading: (state, action: PayloadAction<boolean>) => {
      state.apiIsLoading = action.payload;
    },
    setPostsError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },
  },
});

export const {
  setPostsForUser,
  addPostForUser,
  setPostsLoading,
  setPostsError,
} = postsSlice.actions;

export default postsSlice.reducer;

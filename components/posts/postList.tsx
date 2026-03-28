import { Post } from "@/types/post";
import PostCard from "./postCard";

const PostList = ({ posts }: { posts: Post[] }) => {
  if (posts.length === 0) {
    return <p className="text-sm text-gray-600">No posts found.</p>;
  }

  return (
    <div className="space-y-4">
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
};

export default PostList;

import { Post } from "@/types/post";

const postCard = ({ post }: { post: Post }) => {
  return (
    <div className="border rounded p-4 bg-white shadow">
      <h3 className="text-lg font-semibold">{post.title}</h3>

      <p className="mt-2 text-sm">{post.body}</p>

      {post.isLocal && (
        <span className="mt-2 inline-block bg-green-100 text-green-700 px-2 py-1 text-xs rounded">
          Local Post
        </span>
      )}
    </div>
  );
};

export default postCard;

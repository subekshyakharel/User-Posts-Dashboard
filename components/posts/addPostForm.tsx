"use client";

import { useState } from "react";
import { addPostSchema } from "@/lib/validator";

interface AddPostFormProps {
  onSubmitPost: (title: string, body: string) => void;
}

const AddPostForm = ({ onSubmitPost }: AddPostFormProps) => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [errors, setErrors] = useState<{
    title?: string;
    body?: string;
  }>({});

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const result = addPostSchema.safeParse({ title, body });

    if (!result.success) {
      const fieldErrors = result.error.flatten().fieldErrors;
      setErrors({
        title: fieldErrors.title?.[0],
        body: fieldErrors.body?.[0],
      });
      return;
    }

    setErrors({});
    onSubmitPost(title.trim(), body.trim());
    setTitle("");
    setBody("");
  };

  return (
    <div className="border p-5 rounded bg-white shadow">
      <h2 className="mb-3 text-lg font-semibold">Add New Post</h2>

      <form onSubmit={handleSubmit} className="space-y-3">
        <div>
          <label className="block text-sm mb-1">Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter post title"
            className="w-full border p-2 rounded"
          />
          {errors.title && (
            <p className="text-sm text-red-500">{errors.title}</p>
          )}
        </div>

        <div>
          <label className="block text-sm mb-1">Body</label>
          <textarea
            rows={4}
            value={body}
            onChange={(e) => setBody(e.target.value)}
            placeholder="Write post body..."
            className="w-full border p-2 rounded"
          />
          {errors.body && <p className="text-sm text-red-500">{errors.body}</p>}
        </div>

        <button
          type="submit"
          className="bg-black text-white px-4 py-2 rounded mt-2"
        >
          Add Post
        </button>
      </form>
    </div>
  );
};

export default AddPostForm;

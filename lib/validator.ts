import { z } from "zod";

export const addPostSchema = z.object({
  title: z
    .string()
    .trim()
    .min(3, "Title must be at least 3 characters"),
  body: z
    .string()
    .trim()
    .min(5, "Body must be at least 5 characters"),
});

export type AddPostFormValues = z.infer<typeof addPostSchema>;
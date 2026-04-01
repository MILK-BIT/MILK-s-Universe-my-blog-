import { defineCollection, z } from 'astro:content';

// 笔记集合
const notesCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    date: z.date(),
    tags: z.array(z.string()).optional().default([]),
    image: z.string().optional(),
  }),
});

// 摄影集合
const photographyCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.date(),
    location: z.string().optional(),
    camera: z.string().optional(),
    image: z.string(),
  }),
});

// 科研集合
const researchCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.date(),
    authors: z.array(z.string()).optional().default([]),
    venue: z.string().optional(),
    tags: z.array(z.string()).optional().default([]),
    pdf: z.string().optional(),
    code: z.string().optional(),
  }),
});

// 其他集合
const othersCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.date(),
    tags: z.array(z.string()).optional().default([]),
  }),
});

export const collections = {
  notes: notesCollection,
  photography: photographyCollection,
  research: researchCollection,
  others: othersCollection,
};

import { defineCollection, z } from 'astro:content';

const articlesCollection = defineCollection({
  schema: z.object({
    author: z.string().optional(),
    cta: z.string().optional(),
    description: z.string(),
    disableTOC: z.boolean().default(false),
    excludeFromNav: z.boolean().default(false),
    icon: z.string().optional(),
    section: z.string(),
    title: z.string(),
    sortTitle: z.string().optional(),
    featured: z.boolean().default(false),
  }),
});

const devToolsCollection = defineCollection({
  schema: z.object({
    author: z.string().optional(),
    cta: z.string().optional(),
    color: z.string().optional(),
    description: z.string(),
    disableTOC: z.boolean().default(false),
    faIcon: z.string().optional(),
    icon: z.string().optional(),
    title: z.string()
  }),
});

const quickstartsCollection = defineCollection({
  schema: z.object({
    author: z.string().optional(),
    cta: z.string().optional(),
    description: z.string(),
    disableTOC: z.boolean().default(false),
    excludeFromNav: z.boolean().default(false),
    icon: z.string().optional(),
    section: z.string(),
    title: z.string(),
    sortTitle: z.string().optional(),
    featured: z.boolean().default(false),
  }),
});

export const collections = {
  'articles': articlesCollection,
  'dev-tools': devToolsCollection,
  'quickstarts': quickstartsCollection,
};

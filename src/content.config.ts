import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { docsLoader } from '@astrojs/starlight/loaders';
import { docsSchema } from '@astrojs/starlight/schema';

export const collections = {
  docs: defineCollection({
    loader: docsLoader(),
    schema: docsSchema({
      extend: z.object({
        description: z.string(),
        owner: z.string().optional(),
        status: z.string().optional(),
        tags: z.array(z.string()).optional(),
        scope: z.string().optional(),
        created: z.string().optional(),
        lastReviewed: z.string().optional(),
        reviewCycle: z.string().optional(),
        relatedLinks: z.array(z.string()).optional(),
      }),
    }),
  }),
};

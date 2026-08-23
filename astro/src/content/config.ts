import { defineCollection, z } from 'astro:content';

const site = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    route: z.string(),
    pageType: z.string(),
    primaryKeyword: z.string().optional(),
    audience: z.string().optional(),
    intent: z.string().optional(),
    buyerStage: z.string().optional(),
    status: z.string().default('draft'),
    primaryCta: z.string().optional(),
    primaryCtaHref: z.string().optional(),
    proofStatus: z.string().optional(),
    reviewers: z.array(z.string()).default([]),
  }),
});

export const collections = { site };

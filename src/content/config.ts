import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
    schema: z.object({
        title: z.string().min(5, { message: "Title must be at least 5 characters" }),
        description: z.string().min(20, { message: "Description must provide more context" }),
        pubDate: z.coerce.date(),
        updatedDate: z.coerce.date().optional(),
        heroImage: z.string().url({ message: "Must be a valid URL" }).optional(),
        tags: z.array(z.string()).default([]),
        author: z.object({
            name: z.string(),
            bio: z.string().optional(),
            avatar: z.string().url().optional(),
            social: z.object({
                twitter: z.string().optional(),
                linkedin: z.string().optional()
            }).optional()
        }),
        draft: z.boolean().default(false),
        canonicalURL: z.string().url().optional(),
        readTime: z.number().min(1).optional(),
        category: z.enum([
            'Desarrollo Web', 
            'Inteligencia Artificial', 
            'Ciberseguridad', 
            'Tecnología', 
            'Innovación'
        ]).default('Tecnología')
    }),
});

const services = defineCollection({
    schema: z.object({
        title: z.string(),
        description: z.string(),
        icon: z.string().optional(),
        order: z.number().optional()
    })
});

export const collections = { 
    blog,
    services
};
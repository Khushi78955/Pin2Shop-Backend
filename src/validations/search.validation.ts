import { z } from "zod";

export const searchSchema = z.object({
    query: z
        .string()
        .trim()
        .min(1, "Query is required")
        .max(200, "Query is too long")
});
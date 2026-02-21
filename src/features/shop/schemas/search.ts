import z from "zod";

export const AluSearchSchema = z.object({ 
    keyword: z.string().optional() 
});

export type AluSearchData = z.infer<typeof AluSearchSchema>;
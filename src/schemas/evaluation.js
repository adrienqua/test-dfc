import { z } from "zod"

export const evaluationSchema = z.object({
    name: z.string(),
    creation_date: z.coerce.date(),
    validation_date: z.coerce.date(),
    status: z.string(),
})

import { z } from "zod"

export const projectSchema = z
    .object({
        status: z.enum(["in_progress", "scoping", "completed"]),
        risk_model_id: z.number().int(),
    })
    .partial()

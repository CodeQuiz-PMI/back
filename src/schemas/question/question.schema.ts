import {z} from "zod"

export const questionSchema = z.object({
    sectionId: z.number(),
    title: z.string(),
    text: z.string(),
    answer: z.string(),
    response_1: z.string(),
    response_2: z.string(),
    response_3: z.string(),
    response_4: z.string(),
    correctResponse: z.string(),
    type: z.string(),
    points: z.number(),
})

export const questionUpdateSchema = questionSchema.partial()

export const questionReturnSchema = questionSchema.extend({id:z.number()})

export const questionReturnAllSchema = z.array(questionReturnSchema)
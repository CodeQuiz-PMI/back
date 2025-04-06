import {z} from "zod"
import { questionReturnAllSchema, questionReturnSchema, questionSchema, questionUpdateSchema } from "../../schemas"

export type tQuestionRequest = z.infer<typeof questionSchema> 
export type tQuestionUpdateRequest = z.infer<typeof questionUpdateSchema>
export type tQuestionReturn = z.infer<typeof questionReturnSchema>
export type tQuestionReturnAll = z.infer<typeof questionReturnAllSchema>
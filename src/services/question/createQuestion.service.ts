import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { Question } from "../../entities";
import { tQuestionRequest, tQuestionReturn } from "../../interfaces";
import { questionReturnSchema } from "../../schemas";

export const questionCreateService = async (questionData: tQuestionRequest): Promise<tQuestionReturn> => {
    const questionRepository: Repository<Question> = AppDataSource.getRepository(Question) 
    const newQuestion = questionRepository.create(questionData)
    await questionRepository.save(newQuestion)
    const question = questionReturnSchema.parse(newQuestion)
    return question
}
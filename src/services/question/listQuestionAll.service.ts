import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { Question } from "../../entities";
import { tQuestionReturnAll } from "../../interfaces";

export const questionListAllService = async (): Promise<tQuestionReturnAll> => {
    const questionRepository: Repository<Question> = AppDataSource.getRepository(Question)
    const questionAll = await questionRepository.find()
    return questionAll
}
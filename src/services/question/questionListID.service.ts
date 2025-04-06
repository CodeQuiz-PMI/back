import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { Question } from "../../entities";
import { tQuestionUpdateRequest } from "../../interfaces";
import { AppError } from "../../errors";

export const questionListByIdService = async (id:number): Promise<tQuestionUpdateRequest> => {
    const questionRepository: Repository<Question> = AppDataSource.getRepository(Question)
    const question = await questionRepository.findOne({
        where: {
            id:id
        }
    })
    if (!question) {
        throw new AppError("Question not found", 404)
    }
    return question
}
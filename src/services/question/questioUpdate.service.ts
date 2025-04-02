import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { Question } from "../../entities";
import { tQuestionRequest, tQuestionReturn } from "../../interfaces";
import { questionReturnSchema } from "../../schemas";

export const questionUpdateService = async (id: number, questionData: Partial<tQuestionRequest>): Promise<tQuestionReturn> => {
    const questionRepository: Repository<Question> = AppDataSource.getRepository(Question);
    const question = await questionRepository.findOne({ where: { id } });

    if (!question) {
        throw new Error("Question not found");
    }

    Object.assign(question, questionData);
    await questionRepository.save(question);
    const updatedQuestion = questionReturnSchema.parse(question);
    return updatedQuestion;
};




import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { Question } from "../../entities";

export const questionDeleteService = async (id: number): Promise<void> => {
    const questionRepository: Repository<Question> = AppDataSource.getRepository(Question);
    
    const question = await questionRepository.findOne({ where: { id } });

    if (!question) {
        throw new Error("Question not found");
    }

    await questionRepository.remove(question);
};

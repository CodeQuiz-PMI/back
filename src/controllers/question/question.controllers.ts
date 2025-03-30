import { Request, Response } from "express";
import { questionCreateService, questionListAllService, questionListByIdService } from "../../services";

export const questionCreateController = async(request: Request, response: Response): Promise<any> => {
    const questionData = request.body
    const newQuestion = await questionCreateService(questionData)
    return response.json(newQuestion).status(201)
}

export const questionListAllController = async(request: Request, response: Response): Promise<any> => {
    const questionList = await questionListAllService()
    return response.json(questionList).status(200)
}

export const questionListIdController = async(request: Request, response: Response): Promise<any> => {
    const questionId = Number(request.params.id)
    const question = await questionListByIdService(questionId)
    return response.json(question).status(200)
}

export const questionUpdateController = async(request: Request, response: Response): Promise<any> => {
    const questionId = Number(request.params.id)
    const questionData = request.body
    const question = await questionUpdateService(questionId, questionData)
    return response.json(question).status(200)
}

export const questionDeleteController = async(request: Request, response: Response): Promise<any> => {
    const questionId = Number(request.params.id)
    await questionUpdateService(questionId)
    return response.json().status(204)
}
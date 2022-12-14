import { response } from "express";
import { CategoriesRepository } from "../repositories/CategoriesRepository";


interface IRequest {
    name: string;
    description: string;
}


class CreateCategoryService {
    constructor(private categoriesRepository: CategoriesRepository){}

    execute({ description, name }: IRequest):void {
        const categoryAlreadyExist = this.categoriesRepository.findByName(name);

        if(categoryAlreadyExist){
            throw new Error("Category already exists!")
        }
    
        this.categoriesRepository.create({name, description})
    }
}

export { CreateCategoryService };
import { Injectable } from "@nestjs/common";
import { MessagesRepository } from "./messages.repository";

// @Injectable for registration in the DI container/injector
@Injectable()
export class MessagesService {
    
    constructor(private messagesRepository: MessagesRepository) {
    }

    async findOne(id: string) {
    return this.messagesRepository.findOne(id);
    }

    async findAll() {
    return this.messagesRepository.findAll();
    }

    async create(message: string) {
    return this.messagesRepository.create(message);
    }

}
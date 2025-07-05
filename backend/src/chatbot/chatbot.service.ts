import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Chatbot } from "./chatbot.entity";
import { Repository } from "typeorm";
import { CreateChatbotDto } from "./dto/create-chatbot.dto";
import { UpdateChatbotDto } from "./dto/update-chatbot.dto";

// chatbot.service.ts
@Injectable()
export class ChatbotService {
  constructor(@InjectRepository(Chatbot) private repo: Repository<Chatbot>) {}

  create(data: CreateChatbotDto) {
    const nuevo = this.repo.create(data);
    return this.repo.save(nuevo);
  }

  findAll() {
    return this.repo.find();
  }

  findOne(id: string) {
    return this.repo.findOneBy({ id });
  }

  update(id: string, data: UpdateChatbotDto) {
    return this.repo.update(id, data);
  }

  remove(id: string) {
    return this.repo.delete(id);
  }
}

import { TypeOrmModule } from "@nestjs/typeorm";
import { Chatbot } from "./chatbot.entity";
import { ChatbotController } from "./chatbot.controller";
import { ChatbotService } from "./chatbot.service";
import { Module } from "../app.module";

// chatbot.module.ts
@Module({
    imports: [TypeOrmModule.forFeature([Chatbot])],
    controllers: [ChatbotController],
    providers: [ChatbotService],
})
export class ChatbotModule {}

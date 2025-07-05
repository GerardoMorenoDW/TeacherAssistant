import { Body, Controller, Post, Get, Param, Patch, Delete } from "@nestjs/common";
import { ChatbotService } from "./chatbot.service";
import { CreateChatbotDto } from "./dto/create-chatbot.dto";
import { UpdateChatbotDto } from "./dto/update-chatbot.dto";

// chatbot.controller.ts
@Controller('chatbots')
export class ChatbotController {
  constructor(private readonly service: ChatbotService) {}

  @Post()
  create(@Body() body: CreateChatbotDto) {
    return this.service.create(body);
  }

  @Get()
  findAll() {
    return this.service.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.service.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() body: UpdateChatbotDto) {
    return this.service.update(id, body);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.service.remove(id);
  }
}

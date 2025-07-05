// src/chatbot/dto/create-chatbot.dto.ts
import { IsString, IsOptional, IsNumber, IsIn } from 'class-validator';

export class CreateChatbotDto {
  @IsString()
  nombre: string;

  @IsOptional()
  @IsString()
  descripcion?: string;

  @IsOptional()
  @IsString()
  @IsIn(['es', 'en', 'pt'])
  lenguaje?: string;

  @IsOptional()
  @IsNumber()
  temperatura?: number;
}

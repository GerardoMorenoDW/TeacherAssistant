import { Controller, Post, Body } from '@nestjs/common';
import { IaService } from './ia.service';

@Controller('/ia')
export class IaController {
  constructor(private readonly iaService: IaService) {}

  @Post('/actividad')
  async generarDesdePrompt(@Body('prompt') prompt: string) {
    return this.iaService.generarActividad(prompt);
  }

  @Post('/test')
  async generarTest(@Body('prompt') prompt: string) {
    return this.iaService.generarTests(prompt);
  }
}

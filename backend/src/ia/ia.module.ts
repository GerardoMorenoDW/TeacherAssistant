import { Module } from '@nestjs/common';
import { IaService } from './ia.service';
import { IaController } from './is.controller';

@Module({
  controllers: [IaController],
  providers: [IaService],
})
export class IaModule {}

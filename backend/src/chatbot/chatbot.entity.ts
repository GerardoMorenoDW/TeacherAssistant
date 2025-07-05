// chatbot.entity.ts
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, ManyToOne } from 'typeorm';

@Entity('chatbots')
export class Chatbot {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  nombre: string;

  @Column({ nullable: true })
  descripcion: string;

  @Column({ default: 'es' })
  lenguaje: string;

  @Column({ type: 'float', default: 0.7 })
  temperatura: number;

  @CreateDateColumn()
  creadoEn: Date;
}

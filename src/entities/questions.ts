import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { Section } from "./section";

@Entity("questions")
export class Question {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column({ type: "int" })
  sectionId: number;

  @Column({ type: "varchar", length: 250 })
  title: string;

  @Column({ type: "varchar", length: 250 })
  text: string;

  @Column({ type: "text" })
  answer: string;

  @Column({ type: "varchar", length: 250 })
  response_1: string;

  @Column({ type: "varchar", length: 250 })
  response_2: string;

  @Column({ type: "varchar", length: 250 })
  response_3: string;

  @Column({ type: "varchar", length: 250 })
  response_4: string;

  @Column({ type: "varchar", length: 250 })
  correctResponse: string;

  @Column({
    type: "varchar",
    enum: { multipla_escolha: "Múltipla escolha", codigo: "Código" },
  })
  type: string; // exemplo: 'multipla_escolha' ou 'codigo'

  @Column({ type: "int" })
  points: number;

  @Column({ type: "timestamp" })
  createdAt: string | Date;

  @ManyToOne(() => Section, (section) => section.questions)
  section: Section;
}

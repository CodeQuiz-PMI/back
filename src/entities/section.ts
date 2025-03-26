import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
} from "typeorm";
import { Level } from "./level";
import { Question } from "./questions";

@Entity("sections")
export class Section {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column({ type: "int" })
  levelId: number;

  @Column({ type: "varchar", length: 250 })
  title: string;

  @Column({ type: "varchar", length: 250 })
  description: string;

  @Column({ type: "timestamp" })
  createdAt: string | Date;

  @ManyToOne(() => Level, (level) => level.sections)
  level: Level;

  @OneToMany(() => Question, (question) => question.section)
  questions: Question[];
}

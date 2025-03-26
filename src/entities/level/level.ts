import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Section } from "..";

@Entity("levels")
export class Level {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column({ type: "varchar", length: 250 })
  title: string;

  @Column({ type: "varchar", length: 250 })
  description: string;

  @Column({ type: "varchar", length: 250 })
  difficulty: string;

  @Column({ type: "timestamp" })
  createdAt: string | Date;

  @OneToMany(() => Section, (section) => section.level)
  sections: Section[];
}

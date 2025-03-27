import { hashSync } from "bcryptjs";
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BeforeInsert,
  BeforeUpdate,
} from "typeorm";

@Entity("users")
export class User {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column({ type: "varchar", length: 250 })
  name: string;

  @Column({ type: "varchar", length: 250, unique: true })
  email: string;

  @Column({ type: "varchar", length: 250 })
  password: string;

  @Column({ type: "int", nullable: true })
  currentLevel: number;

  @Column({ type: "int", nullable: true })
  currentSection: number;

  @Column({ type: "int", nullable: true })
  currentQuestion: number;

  @Column({ type: "int", default: 0 })
  trophies: number;

  @Column({ type: "int", default: 0 })
  totalPoints: number;

  @Column({ type: "timestamp" })
  createdAt: string | Date;

  @BeforeInsert()
  @BeforeUpdate()
  hashPass() {
    this.password = hashSync(this.password, 9);
  }
}

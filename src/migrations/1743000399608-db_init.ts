import { MigrationInterface, QueryRunner } from "typeorm";

export class DbInit1743000399608 implements MigrationInterface {
    name = 'DbInit1743000399608'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "users" ("id" SERIAL NOT NULL, "name" character varying(250) NOT NULL, "email" character varying(250) NOT NULL, "password" character varying(250) NOT NULL, "currentLevel" integer, "currentSection" integer, "currentQuestion" integer, "trophies" integer NOT NULL DEFAULT '0', "totalPoints" integer NOT NULL DEFAULT '0', "createdAt" TIMESTAMP NOT NULL, CONSTRAINT "UQ_97672ac88f789774dd47f7c8be3" UNIQUE ("email"), CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "levels" ("id" SERIAL NOT NULL, "title" character varying(250) NOT NULL, "description" character varying(250) NOT NULL, "difficulty" character varying(250) NOT NULL, "createdAt" TIMESTAMP NOT NULL, CONSTRAINT "PK_05f8dd8f715793c64d49e3f1901" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "questions" ("id" SERIAL NOT NULL, "sectionId" integer NOT NULL, "title" character varying(250) NOT NULL, "text" character varying(250) NOT NULL, "answer" text NOT NULL, "response_1" character varying(250) NOT NULL, "response_2" character varying(250) NOT NULL, "response_3" character varying(250) NOT NULL, "response_4" character varying(250) NOT NULL, "correctResponse" character varying(250) NOT NULL, "type" character varying NOT NULL, "points" integer NOT NULL, "createdAt" TIMESTAMP NOT NULL, CONSTRAINT "PK_08a6d4b0f49ff300bf3a0ca60ac" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "sections" ("id" SERIAL NOT NULL, "levelId" integer NOT NULL, "title" character varying(250) NOT NULL, "description" character varying(250) NOT NULL, "createdAt" TIMESTAMP NOT NULL, CONSTRAINT "PK_f9749dd3bffd880a497d007e450" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "questions" ADD CONSTRAINT "FK_8f1e03cfa6eea6e8472e3c250db" FOREIGN KEY ("sectionId") REFERENCES "sections"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "sections" ADD CONSTRAINT "FK_cc7c97b1866ce23434b50780029" FOREIGN KEY ("levelId") REFERENCES "levels"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "sections" DROP CONSTRAINT "FK_cc7c97b1866ce23434b50780029"`);
        await queryRunner.query(`ALTER TABLE "questions" DROP CONSTRAINT "FK_8f1e03cfa6eea6e8472e3c250db"`);
        await queryRunner.query(`DROP TABLE "sections"`);
        await queryRunner.query(`DROP TABLE "questions"`);
        await queryRunner.query(`DROP TABLE "levels"`);
        await queryRunner.query(`DROP TABLE "users"`);
    }

}

import { MigrationInterface, QueryRunner } from 'typeorm';

export class RenameCoffeeName1775282533534 implements MigrationInterface {
  name = 'RenameCoffeeName1775282533534';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "coffee" RENAME COLUMN "name" TO "title"`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "coffee" RENAME COLUMN "title" TO "name"`,
    );
  }
}

import { MigrationInterface, QueryRunner } from 'typeorm';

export class RenameFlavorName1775283313669 implements MigrationInterface {
  name = 'RenameFlavorName1775283313669';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "flavor" RENAME COLUMN "name" TO "title"`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "flavor" RENAME COLUMN "title" TO "name"`,
    );
  }
}

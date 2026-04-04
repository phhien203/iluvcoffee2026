import { DataSource } from 'typeorm';

import { Coffee } from 'src/coffees/entities/coffee.entity';
import { Flavor } from 'src/coffees/entities/flavor.entity';
import { Event } from 'src/events/entities/event.entity';
import { RenameCoffeeName1775282533534 } from 'src/migrations/1775282533534-RenameCoffeeName';
import { RenameFlavorName1775283313669 } from 'src/migrations/1775283313669-RenameFlavorName';

export default new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'pass123',
  database: 'postgres',
  entities: [Coffee, Flavor, Event],
  migrations: [RenameCoffeeName1775282533534, RenameFlavorName1775283313669],
});

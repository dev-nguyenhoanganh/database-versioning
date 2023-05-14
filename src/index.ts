import { sequelize } from './schema';
import { synchronizeDB, insertDataToTable } from './services';
import { SequelizeTypescriptMigration } from 'sequelize-typescript-migration-lts';
import { join } from 'path';

const app = async () => {
    try {
        await sequelize.authenticate();
        await synchronizeDB();
        await insertDataToTable();
        await SequelizeTypescriptMigration.makeMigration(sequelize, {
            outDir: join(__dirname, './migrations'),
            migrationName: 'create-table',
            preview: false,
        });
    } catch (error: unknown) {
        console.log('Something wrong!!', error);
    }
};

app();

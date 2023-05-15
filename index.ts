import { SequelizeTypescriptMigration } from 'sequelize-typescript-migration-lts';
import { Sequelize } from 'sequelize-typescript';
import { join } from 'path';
import dotenv from 'dotenv';

import { TBLDeTai, TBLGiangVien, TBLHuongDan, TBLKhoa, TBLSinhVien } from 'models';
import { Dialect } from 'sequelize';

dotenv.config();

const bootstrap = async () => {
    const sequelize: Sequelize = new Sequelize({
        username: process.env.DATABASE_USER,
        password: process.env.DATABASE_PASS,
        database: process.env.DATABASE_NAME,
        host: process.env.DATABASE_HOST,
        dialect: process.env.DATABASE_DIALECT as Dialect,
        models: [TBLKhoa, TBLGiangVien, TBLSinhVien, TBLDeTai, TBLHuongDan],
        timezone: process.env.DATABASE_TIMEZONE,
        logging: false,
        pool: {
            max: 20,
            min: 0,
            acquire: 30000,
            idle: 10000,
        },
        quoteIdentifiers: true,
        define: {
            freezeTableName: false,
        },
    });
    try {
        await sequelize.authenticate();
        await sequelize.sync({ alter: true });

        const result = await SequelizeTypescriptMigration.makeMigration(sequelize, {
            outDir: join(__dirname, './db/migrations'),
            migrationName: 'init',
            useSnakeCase: false,
        });
        console.log(result);
    } catch (e) {
        console.log(e);
    }
};

bootstrap();

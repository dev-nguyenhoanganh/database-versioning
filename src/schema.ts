import { DataTypes, Dialect } from 'sequelize';
import dotenv from 'dotenv';
import { Sequelize } from 'sequelize-typescript';

dotenv.config();

const connection = {
    database: process.env.DATABASE ?? '',
    username: process.env.DB_USER ?? '',
    password: process.env.DB_PASS ?? '',
    host: process.env.DB_HOST ?? '',
    dialect: process.env.DB_TYPE as Dialect,
};

const sequelize: Sequelize = new Sequelize(
    connection.database,
    connection.username,
    connection.password,
    {
        host: connection.host,
        dialect: connection.dialect, // 'mysql'|'mariadb'|'sqlite'|'postgres'|'mssql',
        pool: {
            max: 5,
            min: 0,
            idle: 10000,
        },
    }
);

const tblKhoa = sequelize.define(
    'TBLKhoa',
    {
        Makhoa: {
            primaryKey: true,
            type: DataTypes.STRING(10),
        },
        Tenkhoa: DataTypes.STRING(30),
        Dienthoai: DataTypes.STRING(10),
    },
    { tableName: 'TBLKhoa' }
);

const tblGiangVien = sequelize.define(
    'TBLGiangVien',
    {
        Magv: {
            primaryKey: true,
            type: DataTypes.BIGINT,
        },
        Hotengv: DataTypes.STRING(30),
        Luong: DataTypes.DECIMAL(10, 2),
        Makhoa: {
            type: DataTypes.STRING(10),
            references: {
                model: tblKhoa,
                key: 'Makhoa',
            },
        },
    },
    { tableName: 'TBLGiangVien' }
);

const tblSinhVien = sequelize.define(
    'TBLSinhVien',
    {
        Masv: {
            primaryKey: true,
            type: DataTypes.BIGINT,
        },
        Hotensv: DataTypes.STRING(40),
        Namsinh: DataTypes.STRING(30),
        Quequan: DataTypes.STRING(30),
        Makhoa: {
            type: DataTypes.STRING(10),
            references: {
                model: tblKhoa,
                key: 'Makhoa',
            },
        },
    },
    { tableName: 'TBLSinhVien' }
);

const tblDeTai = sequelize.define(
    'TBLDeTai',
    {
        Madt: {
            primaryKey: true,
            type: DataTypes.STRING(10),
        },
        Tendt: DataTypes.STRING(30),
        Kinhphi: DataTypes.BIGINT,
        Noithuctap: DataTypes.STRING(30),
    },
    { tableName: 'TBLDeTai' }
);

const tblHuongDan = sequelize.define(
    'TBLHuongDan',
    {
        Masv: {
            primaryKey: true,
            type: DataTypes.BIGINT,
        },
        KetQua: DataTypes.DECIMAL(5, 2),
        Madt: {
            type: DataTypes.STRING(10),
            references: {
                model: tblDeTai,
                key: 'Madt',
            },
        },
        Magv: {
            type: DataTypes.BIGINT,
            references: {
                model: tblGiangVien,
                key: 'Magv',
            },
        },
    },
    { tableName: 'TBLHuongDan' }
);

tblSinhVien.belongsTo(tblKhoa, { foreignKey: 'Makhoa' });
tblGiangVien.belongsTo(tblKhoa, { foreignKey: 'Makhoa' });
tblHuongDan.belongsTo(tblDeTai, { foreignKey: 'Madt' });
tblHuongDan.belongsTo(tblGiangVien, { foreignKey: 'Magv' });

export { sequelize, tblKhoa, tblGiangVien, tblSinhVien, tblDeTai, tblHuongDan };

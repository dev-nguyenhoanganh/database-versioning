import {
    Table,
    Model,
    Column,
    ForeignKey,
    BelongsTo,
    PrimaryKey,
    DataType,
} from 'sequelize-typescript';

import { TBLKhoa } from './TBLKhoa.model';

@Table({ tableName: 'TBLSinhVien' })
export class TBLSinhVien extends Model<TBLSinhVien> {
    @PrimaryKey
    @Column(DataType.BIGINT)
    Masv!: BigInt;

    @Column(DataType.STRING(40))
    Hotensv!: string;

    @Column(DataType.STRING(30))
    HotNamsinhensv!: string;

    @Column(DataType.STRING(30))
    Quequan!: string;

    @ForeignKey(() => TBLKhoa)
    @Column
    Makhoa!: string;

    @BelongsTo(() => TBLKhoa)
    Khoa!: TBLKhoa;
}

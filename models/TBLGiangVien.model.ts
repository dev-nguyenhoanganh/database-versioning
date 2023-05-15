import {
    Table,
    Model,
    Column,
    ForeignKey,
    BelongsTo,
    PrimaryKey,
    DataType,
    HasMany,
} from 'sequelize-typescript';

import { TBLKhoa } from './TBLKhoa.model';
import { TBLHuongDan } from './TBLHuongDan.model';

@Table({ tableName: 'TBLGiangVien' })
export class TBLGiangVien extends Model<TBLGiangVien> {
    @PrimaryKey
    @Column(DataType.BIGINT)
    Magv!: BigInt;

    @Column(DataType.STRING(30))
    Hotengv!: string;

    @Column(DataType.DECIMAL(10, 2))
    Luong!: number;

    @ForeignKey(() => TBLKhoa)
    @Column
    Makhoa!: string;

    @BelongsTo(() => TBLKhoa)
    Khoa!: TBLKhoa;

    @HasMany(() => TBLHuongDan)
    HuongDan!: TBLHuongDan[];
}

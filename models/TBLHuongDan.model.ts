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
import { TBLDeTai } from './TBLDeTai.model';
import { TBLGiangVien } from './TBLGiangVien.model';

@Table({ tableName: 'TBLHuongDan' })
export class TBLHuongDan extends Model<TBLHuongDan> {
    @PrimaryKey
    @Column(DataType.BIGINT)
    Masv!: BigInt;

    @Column(DataType.DECIMAL(5, 2))
    KetQua!: number;

    @ForeignKey(() => TBLDeTai)
    @Column
    Madt!: string;

    @ForeignKey(() => TBLGiangVien)
    @Column
    Magv!: BigInt;

    @BelongsTo(() => TBLDeTai)
    DeTai!: TBLKhoa;

    @BelongsTo(() => TBLGiangVien)
    GiangVien!: TBLGiangVien;
}

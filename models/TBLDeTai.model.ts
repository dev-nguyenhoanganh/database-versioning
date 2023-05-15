import { Table, Model, Column, PrimaryKey, DataType, HasMany } from 'sequelize-typescript';

import { TBLHuongDan } from './TBLHuongDan.model';

@Table({ tableName: 'TBLDeTai', freezeTableName: true })
export class TBLDeTai extends Model<TBLDeTai> {
    @PrimaryKey
    @Column(DataType.STRING(10))
    Madt!: string;

    @Column(DataType.STRING(30))
    Tendt!: string;

    @Column(DataType.BIGINT)
    Kinhphi!: number;

    @Column(DataType.STRING(30))
    Noithuctap!: string;

    @HasMany(() => TBLHuongDan)
    HuongDan!: TBLHuongDan[];
}

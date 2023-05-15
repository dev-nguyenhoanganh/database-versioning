import { Table, Model, Column, PrimaryKey, DataType, HasMany } from 'sequelize-typescript';
import { TBLGiangVien } from './TBLGiangVien.model';
import { TBLSinhVien } from './TBLSinhVien.model';

@Table({ tableName: 'TBLKhoa' })
export class TBLKhoa extends Model<TBLKhoa> {
    @PrimaryKey
    @Column(DataType.STRING(10))
    Makhoa!: string;

    @Column(DataType.STRING(30))
    Tenkhoa!: string;

    @Column(DataType.STRING(10))
    Dienthoai!: string;

    @HasMany(() => TBLGiangVien)
    GiangVien!: TBLGiangVien[];

    @HasMany(() => TBLSinhVien)
    SinhVien!: TBLSinhVien[];
}

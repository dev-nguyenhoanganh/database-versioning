import { tblKhoa, tblGiangVien, tblSinhVien, tblDeTai, tblHuongDan } from './schema';
import data from './data.json';

// checks what is the current state of the table in the database
// (which columns it has, what are their data types, etc),
// and then performs the necessary changes in the table to make it match the model.
const synchronizeDB = async () => {
    try {
        await tblKhoa.sync({ alter: true });
        await tblGiangVien.sync({ alter: true });
        await tblSinhVien.sync({ alter: true });
        await tblDeTai.sync({ alter: true });
        await tblHuongDan.sync({ alter: true });

        console.log('Synchronize table change successfully.');
    } catch (error: unknown) {
        console.log('Unable to synchronize table change');
        throw error;
    }
};

const insertDataToTable = async () => {
    try {
        await tblKhoa.bulkCreate(data.tblKhoa);
        await tblGiangVien.bulkCreate(data.tblGiangVien);
        await tblSinhVien.bulkCreate(data.tblSinhVien);
        await tblDeTai.bulkCreate(data.tblDeTai);
        await tblHuongDan.bulkCreate(data.tblHuongDan);

        console.log('Insert data to table successfully');
    } catch (error: unknown) {
        console.log('Unable to insert data to table');
        throw error;
    }
};

export { synchronizeDB, insertDataToTable };

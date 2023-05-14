# database-versioning

Sample of database versioning using node.js

```shell
# Create an empty project
npx sequelize-cli init

# Create model
npx sequelize-cli model:generate --name User --attributes firstName:string,lastName:string,email:string


"dotenv": "^16.0.1",
    "pg": "^8.7.3",
    "sequelize": "^6.23.2",
    "sequelize-cli": "^6.5.1",
    "sequelize-typescript": "^2.1.3",
    "typescript": "^4.3.5"
    "ts-node": "^10.0.0"

    npm i dotenv pg sequelize sequelize-cli sequelize-typescript typescript ts-node
```

```sql
CREATE TABLE TBLKhoa
(Makhoa varchar(10) primary key,
Tenkhoa varchar(30),
Dienthoai varchar(10));

CREATE TABLE TBLGiangVien(
Magv bigint primary key,
Hotengv varchar(30),
Luong decimal(5,2),
Makhoa varchar(10),
FOREIGN KEY (Makhoa) REFERENCES TBLKhoa(Makhoa));

CREATE TABLE TBLSinhVien(
Masv bigint primary key,
Hotensv varchar(40),
Namsinh varchar(30),
Quequan varchar(30),
Makhoa varchar(10),
FOREIGN KEY (Makhoa) REFERENCES TBLKhoa(Makhoa));

CREATE TABLE TBLDeTai(
Madt varchar(10) primary key,
Tendt varchar(30),
Kinhphi bigint,
Noithuctap varchar(30));

CREATE TABLE TBLHuongDan(
Masv bigint primary key,
Madt varchar(10),
Magv bigint,
KetQua decimal(5,2),
foreign key (Madt) references TBLDeTai(Madt),
foreign key (Magv) references TBLGiangVien(Magv));


INSERT INTO TBLKhoa VALUES
('Geo','Dia ly va QLTN',3855413),
('Math','Toan',3855411),
('Bio','Cong nghe Sinh hoc',3855412);


INSERT INTO TBLGiangVien VALUES
(11,'Thanh Binh',700,'Geo'),
(12,'Thu Huong',500,'Math'),
(13,'Chu Vinh',650,'Geo'),
(14,'Le Thi Ly',500,'Bio'),
(15,'Tran Son',900,'Math');

INSERT INTO TBLSinhVien VALUES
(1,'Le Van Son',1990,'Nghe An','Bio'),
(2,'Nguyen Thi Mai',1990,'Thanh Hoa','Geo'),
(3,'Bui Xuan Duc',1992,'Ha Noi','Math'),
(4,'Nguyen Van Tung',null,'Ha Tinh','Bio'),
(5,'Le Khanh Linh',1989,'Ha Nam','Bio'),
(6,'Tran Khac Trong',1991,'Thanh Hoa','Geo'),
(7,'Le Thi Van',null,'null','Math'),
(8,'Hoang Van Duc',1992,'Nghe An','Bio');

INSERT INTO TBLDeTai VALUES
('Dt01','GIS',100,'Nghe An'),
('Dt02','ARC GIS',500,'Nam Dinh'),
('Dt03','Spatial DB',100, 'Ha Tinh'),
('Dt04','MAP',300,'Quang Binh' );

INSERT INTO TBLHuongDan VALUES
(1,'Dt01',13,8),
(2,'Dt03',14,0),
(3,'Dt03',12,10),
(5,'Dt04',14,7),
(6,'Dt01',13,Null),
(7,'Dt04',11,10),
(8,'Dt03',15,6);

```

```ts
// Backup
import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import { buffer } from 'stream/consumers';

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

app.get('/', (req: Request, res: Response) => {
    res.send('Homepage 1');
});

app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
```

```js
// Tạo data cho từng table
tblKhoa.bulkCreate([
    { Makhoa: 'Geo', Tenkhoa: 'Dia ly va QLTN', Dienthoai: 3855413 },
    { Makhoa: 'Math', Tenkhoa: 'Toan', Dienthoai: 3855411 },
    { Makhoa: 'Bio', Tenkhoa: 'Cong nghe Sinh hoc', Dienthoai: 3855412 },
]);

tblGiangVien.bulkCreate([
    { Magv: 11, Hotengv: 'Thanh Binh', Luong: 700, Makhoa: 'Geo' },
    { Magv: 12, Hotengv: 'Thu Huong', Luong: 500, Makhoa: 'Math' },
    { Magv: 13, Hotengv: 'Chu Vinh', Luong: 650, Makhoa: 'Geo' },
    { Magv: 14, Hotengv: 'Le Thi Ly', Luong: 500, Makhoa: 'Bio' },
    { Magv: 15, Hotengv: 'Tran Son', Luong: 900, Makhoa: 'Math' },
]);

tblSinhVien.bulkCreate([
    { Masv: 1, Hotensv: 'Le Van Son', Namsinh: 1990, Quequan: 'Nghe An', Makhoa: 'Bio' },
    { Masv: 2, Hotensv: 'Nguyen Thi Mai', Namsinh: 1990, Quequan: 'Thanh Hoa', Makhoa: 'Geo' },
    { Masv: 3, Hotensv: 'Bui Xuan Duc', Namsinh: 1992, Quequan: 'Ha Noi', Makhoa: 'Math' },
    { Masv: 4, Hotensv: 'Nguyen Van Tung', Namsinh: null, Quequan: 'Ha Tinh', Makhoa: 'Bio' },
    { Masv: 5, Hotensv: 'Le Khanh Linh', Namsinh: 1989, Quequan: 'Ha Nam', Makhoa: 'Bio' },
    { Masv: 6, Hotensv: 'Tran Khac Trong', Namsinh: 1991, Quequan: 'Thanh Hoa', Makhoa: 'Geo' },
    { Masv: 7, Hotensv: 'Le Thi Van', Namsinh: null, Quequan: null, Makhoa: 'Math' },
    { Masv: 8, Hotensv: 'Hoang Van Duc', Namsinh: 1992, Quequan: 'Nghe An', Makhoa: 'Bio' },
]);

tblDeTai.bulkCreate([
    { Madt: 'Dt01', Tendt: 'GIS', Kinhphi: 100, Noithuctap: 'Nghe An' },
    { Madt: 'Dt02', Tendt: 'ARC GIS', Kinhphi: 500, Noithuctap: 'Nam Dinh' },
    { Madt: 'Dt03', Tendt: 'Spatial DB', Kinhphi: 100, Noithuctap: 'Ha Tinh' },
    { Madt: 'Dt04', Tendt: 'MAP', Kinhphi: 300, Noithuctap: 'Quang Binh' },
]);

tblHuongDan.bulkCreate([
    { Masv: 1, Madt: 'Dt01', Magv: 13, KetQua: 8 },
    { Masv: 2, Madt: 'Dt03', Magv: 14, KetQua: 0 },
    { Masv: 3, Madt: 'Dt03', Magv: 12, KetQua: 10 },
    { Masv: 5, Madt: 'Dt04', Magv: 14, KetQua: 7 },
    { Masv: 6, Madt: 'Dt01', Magv: 13, KetQua: null },
    { Masv: 7, Madt: 'Dt04', Magv: 11, KetQua: 10 },
    { Masv: 8, Madt: 'Dt03', Magv: 15, KetQua: 6 },
]);
```

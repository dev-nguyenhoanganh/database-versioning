CREATE DATABASE IF NOT EXISTS university;

USE university;

CREATE TABLE
    TBLKhoa (
        Makhoa varchar(10) primary key,
        Tenkhoa varchar(30),
        Dienthoai varchar(10)
    );

CREATE TABLE
    TBLGiangVien(
        Magv bigint primary key,
        Hotengv varchar(30),
        Luong decimal(5, 2),
        Makhoa varchar(10),
        FOREIGN KEY (Makhoa) REFERENCES TBLKhoa(Makhoa)
    );

CREATE TABLE
    TBLSinhVien(
        Masv bigint primary key,
        Hotensv varchar(40),
        Namsinh varchar(30),
        Quequan varchar(30),
        Makhoa varchar(10),
        FOREIGN KEY (Makhoa) REFERENCES TBLKhoa(Makhoa)
    );

CREATE TABLE
    TBLDeTai(
        Madt varchar(10) primary key,
        Tendt varchar(30),
        Kinhphi bigint,
        Noithuctap varchar(30)
    );

CREATE TABLE
    TBLHuongDan(
        Masv bigint primary key,
        Madt varchar(10),
        Magv bigint,
        KetQua decimal(5, 2),
        foreign key (Madt) references TBLDeTai(Madt),
        foreign key (Magv) references TBLGiangVien(Magv)
    );

INSERT INTO TBLKhoa
VALUES (
        'Geo',
        'Dia ly va QLTN',
        3855413
    ), ('Math', 'Toan', 3855411), (
        'Bio',
        'Cong nghe Sinh hoc',
        3855412
    );

INSERT INTO TBLGiangVien
VALUES (11, 'Thanh Binh', 700, 'Geo'), (12, 'Thu Huong', 500, 'Math'), (13, 'Chu Vinh', 650, 'Geo'), (14, 'Le Thi Ly', 500, 'Bio'), (15, 'Tran Son', 900, 'Math');

INSERT INTO TBLSinhVien
VALUES (
        1,
        'Le Van Son',
        1990,
        'Nghe An',
        'Bio'
    ), (
        2,
        'Nguyen Thi Mai',
        1990,
        'Thanh Hoa',
        'Geo'
    ), (
        3,
        'Bui Xuan Duc',
        1992,
        'Ha Noi',
        'Math'
    ), (
        4,
        'Nguyen Van Tung',
        null,
        'Ha Tinh',
        'Bio'
    ), (
        5,
        'Le Khanh Linh',
        1989,
        'Ha Nam',
        'Bio'
    ), (
        6,
        'Tran Khac Trong',
        1991,
        'Thanh Hoa',
        'Geo'
    ), (
        7,
        'Le Thi Van',
        null,
        'null',
        'Math'
    ), (
        8,
        'Hoang Van Duc',
        1992,
        'Nghe An',
        'Bio'
    );

INSERT INTO TBLDeTai
VALUES ('Dt01', 'GIS', 100, 'Nghe An'), (
        'Dt02',
        'ARC GIS',
        500,
        'Nam Dinh'
    ), (
        'Dt03',
        'Spatial DB',
        100,
        'Ha Tinh'
    ), (
        'Dt04',
        'MAP',
        300,
        'Quang Binh'
    );

INSERT INTO TBLHuongDan
VALUES (1, 'Dt01', 13, 8), (2, 'Dt03', 14, 0), (3, 'Dt03', 12, 10), (5, 'Dt04', 14, 7), (6, 'Dt01', 13, Null), (7, 'Dt04', 11, 10), (8, 'Dt03', 15, 6);
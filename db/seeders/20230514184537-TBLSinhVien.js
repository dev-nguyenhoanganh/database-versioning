'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.bulkInsert(
            'TBLSinhVien',
            [
                {
                    Masv: 1,
                    Hotensv: 'Le Van Son',
                    Namsinh: 1990,
                    Quequan: 'Nghe An',
                    Makhoa: 'Bio',
                },
                {
                    Masv: 2,
                    Hotensv: 'Nguyen Thi Mai',
                    Namsinh: 1990,
                    Quequan: 'Thanh Hoa',
                    Makhoa: 'Geo',
                },
                {
                    Masv: 3,
                    Hotensv: 'Bui Xuan Duc',
                    Namsinh: 1992,
                    Quequan: 'Ha Noi',
                    Makhoa: 'Math',
                },
                {
                    Masv: 4,
                    Hotensv: 'Nguyen Van Tung',
                    Namsinh: null,
                    Quequan: 'Ha Tinh',
                    Makhoa: 'Bio',
                },
                {
                    Masv: 5,
                    Hotensv: 'Le Khanh Linh',
                    Namsinh: 1989,
                    Quequan: 'Ha Nam',
                    Makhoa: 'Bio',
                },
                {
                    Masv: 6,
                    Hotensv: 'Tran Khac Trong',
                    Namsinh: 1991,
                    Quequan: 'Thanh Hoa',
                    Makhoa: 'Geo',
                },
                {
                    Masv: 7,
                    Hotensv: 'Le Thi Van',
                    Namsinh: null,
                    Quequan: null,
                    Makhoa: 'Math',
                },
                {
                    Masv: 8,
                    Hotensv: 'Hoang Van Duc',
                    Namsinh: 1992,
                    Quequan: 'Nghe An',
                    Makhoa: 'Bio',
                },
            ],
            {}
        );
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.bulkDelete('TBLSinhVien', null, {});
    },
};

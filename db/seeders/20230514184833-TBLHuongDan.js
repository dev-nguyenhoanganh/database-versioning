'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.bulkInsert(
            'TBLHuongDan',
            [
                {
                    Masv: 1,
                    Madt: 'Dt01',
                    Magv: 13,
                    KetQua: 8,
                },
                {
                    Masv: 2,
                    Madt: 'Dt03',
                    Magv: 14,
                    KetQua: 0,
                },
                {
                    Masv: 3,
                    Madt: 'Dt03',
                    Magv: 12,
                    KetQua: 10,
                },
                {
                    Masv: 5,
                    Madt: 'Dt04',
                    Magv: 14,
                    KetQua: 7,
                },
                {
                    Masv: 6,
                    Madt: 'Dt01',
                    Magv: 13,
                    KetQua: null,
                },
                {
                    Masv: 7,
                    Madt: 'Dt04',
                    Magv: 11,
                    KetQua: 10,
                },
                {
                    Masv: 8,
                    Madt: 'Dt03',
                    Magv: 15,
                    KetQua: 6,
                },
            ],
            {}
        );
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.bulkDelete('TBLHuongDan', null, {});
    },
};

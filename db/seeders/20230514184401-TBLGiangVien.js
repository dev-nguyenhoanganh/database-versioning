'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.bulkInsert(
            'TBLGiangVien',
            [
                {
                    Magv: 11,
                    Hotengv: 'Thanh Binh',
                    Luong: 700,
                    Makhoa: 'Geo',
                },
                {
                    Magv: 12,
                    Hotengv: 'Thu Huong',
                    Luong: 500,
                    Makhoa: 'Math',
                },
                {
                    Magv: 13,
                    Hotengv: 'Chu Vinh',
                    Luong: 650,
                    Makhoa: 'Geo',
                },
                {
                    Magv: 14,
                    Hotengv: 'Le Thi Ly',
                    Luong: 500,
                    Makhoa: 'Bio',
                },
                {
                    Magv: 15,
                    Hotengv: 'Tran Son',
                    Luong: 900,
                    Makhoa: 'Math',
                },
            ],
            {}
        );
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.bulkDelete('TBLGiangVien', null, {});
    },
};

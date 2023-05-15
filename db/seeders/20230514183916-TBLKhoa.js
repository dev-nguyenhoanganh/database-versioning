'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.bulkInsert(
            'TBLKhoa',
            [
                {
                    Makhoa: 'Geo',
                    Tenkhoa: 'Dia ly va QLTN',
                    Dienthoai: 3855413,
                },
                {
                    Makhoa: 'Math',
                    Tenkhoa: 'Toan',
                    Dienthoai: 3855411,
                },
                {
                    Makhoa: 'Bio',
                    Tenkhoa: 'Cong nghe Sinh hoc',
                    Dienthoai: 3855412,
                },
            ],
            {}
        );
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.bulkDelete('TBLKhoa', null, {});
    },
};

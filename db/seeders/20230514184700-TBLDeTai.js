'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.bulkInsert(
            'TBLDeTai',
            [
                {
                    Madt: 'Dt01',
                    Tendt: 'GIS',
                    Kinhphi: 100,
                    Noithuctap: 'Nghe An',
                },
                {
                    Madt: 'Dt02',
                    Tendt: 'ARC GIS',
                    Kinhphi: 500,
                    Noithuctap: 'Nam Dinh',
                },
                {
                    Madt: 'Dt03',
                    Tendt: 'Spatial DB',
                    Kinhphi: 100,
                    Noithuctap: 'Ha Tinh',
                },
                {
                    Madt: 'Dt04',
                    Tendt: 'MAP',
                    Kinhphi: 300,
                    Noithuctap: 'Quang Binh',
                },
            ],
            {}
        );
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.bulkDelete('TBLDeTai', null, {});
    },
};

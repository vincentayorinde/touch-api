'use strict'
module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('peoples', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            voters_id: {
                type: Sequelize.STRING,
            },
            first_name: {
                type: Sequelize.STRING,
            },
            last_name: {
                type: Sequelize.STRING,
            },
            other_name: {
                type: Sequelize.STRING,
            },
            polling_station: {
                type: Sequelize.STRING,
            },
            positionId: {
                type: Sequelize.STRING,
            },
            electoralId: {
                type: Sequelize.STRING,
            },
            memberType: {
                type: Sequelize.ENUM,
                values: [
                    'General membership',
                    'Polling Station executives',
                    'Coordinators',
                    'Constituency executives',
                    'Patrons',
                    'Council of elders',
                ],
            },
            userId: {
                type: Sequelize.INTEGER,
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE,
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE,
            },
        })
    },
    down: async (queryInterface, Sequelize) => {
        await queryInterface.dropTable('peoples')
    },
}

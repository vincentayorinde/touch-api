const Sequelize = require('sequelize');
const db = require('../../db/models');

const { Op } = Sequelize;

module.exports = {
    getUsers: async (req, res) => {
        try {
            const { user } = req;
        } catch (e) {
            res.status(500).json({
                message: 'something went wrong',
                error: e
            });
        }
    }
};

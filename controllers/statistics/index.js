import Sequelize from 'sequelize';
import db from '../../db/models';

export default {
    getStats: async (req, res) => {
        let stats = {};
        try {
            const electorals = await db.electorals.findAndCountAll();
            const positions = await db.positions.findAndCountAll();
            const modules = await db.modules.findAndCountAll();
            const poeples = await db.peoples.findAndCountAll();
            const dues = await db.dues.findAndCountAll();
            

            stats['electorals'] = electorals.count;
            stats['positions'] = positions.count;
            stats['modules'] = modules.count;
            stats['poeples'] = poeples.count;
            stats['dues'] = dues.count;
            return res.status(200).json({
                message: 'Stats Retrieved Successfully',
                stats,
            });
        } catch (e) {
            console.log('the error', e);
            /* istanbul ignore next */
            return res.status(500).json({
                error: e.message,
            });
        }
    },
};

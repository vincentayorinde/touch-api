import db from '../../db/models';

export default {
    addPosition: async (req, res) => {
        try {
            const checkPosition = await db.position.findOne({
                where: { name: req.body.name },
            });
            if (checkPosition) {
                return res.status(403).send({
                    error: 'Position already exists',
                });
            }
           
            const position = await db.position.create({
                name: req.body.name
            });
            return res.status(201).json({
                message: 'Position added successfully',
                position,
            });
        } catch (e) {
            console.log('the error', e);
            /* istanbul ignore next */
            return res.status(500).json({
                error: e.message,
            });
        }
    },

    getPositions: async (req, res) => {
        try {
            const positions = await db.position.findAndCountAll({});
            if (positions) {
                return res.status(200).json({
                    message: 'Positions Retrieved Successfully',
                    positions,
                });
            }
        } catch (e) {
            console.log('the error', e);
            /* istanbul ignore next */
            return res.status(500).json({
                error: e.message,
            });
        }
    },

    updatePosition: async (req, res) => {
        try {
            const foundPosition = await db.position.findOne({
                where: { id: req.params.id },
            });
            if (!foundPosition) {
                return res.status(404).send({
                    error: 'Position does not exist',
                });
            }
            
            const position = await foundPosition.update({
                name: req.body.name
            });
            res.status(200).json({
                message: 'Position updated successfully',
                position,
            });
        } catch (e) {
            console.log('the error', e);
            /* istanbul ignore next */
            return res.status(500).json({
                error: e.message,
            });
        }
    },

    deletePosition: async (req, res) => {
        try {
            const foundPosition = await db.position.findOne({
                where: { id: req.params.id },
            });
            if (!foundPosition) {
                return res.status(404).send({
                    error: 'Position does not exist',
                });
            }
            await foundPosition.destroy();
            res.status(200).json({
                message: 'Position deleted successfully',
                foundPosition,
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

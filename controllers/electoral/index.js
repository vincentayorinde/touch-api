import db from '../../db/models';

export default {
    addElectoralArea: async (req, res) => {
        try {
            const checkElectoralArea = await db.electorals.findOne({
                where: { name: req.body.name },
            });
            if (checkElectoralArea) {
                return res.status(403).send({
                    error: 'Electoral area already exists',
                });
            }
           
            const electoralArea = await db.electorals.create({
                name: req.body.name
            });
            return res.status(201).json({
                message: 'Electoral area added successfully',
                electoralArea,
            });
        } catch (e) {
            console.log('the error', e);
            /* istanbul ignore next */
            return res.status(500).json({
                error: e.message,
            });
        }
    },

    getElectoralAreas: async (req, res) => {
        try {
            const electoralAreas = await db.electorals.findAndCountAll({
                order: [
                    ['createdAt', 'DESC']
                ]
            });
            if (electoralAreas) {
                return res.status(200).json({
                    message: 'Electoral Areas Retrieved Successfully',
                    electoralAreas,
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

    updateElectoralArea: async (req, res) => {
        try {
            const foundElectoralArea = await db.electorals.findOne({
                where: { id: req.params.id },
            });
            if (!foundElectoralArea) {
                return res.status(404).send({
                    error: 'Electoral area does not exist',
                });
            }
            
            const electoralArea = await foundElectoralArea.update({
                name: req.body.name
            });
            res.status(200).json({
                message: 'Electoral area updated successfully',
                electoralArea,
            });
        } catch (e) {
            console.log('the error', e);
            /* istanbul ignore next */
            return res.status(500).json({
                error: e.message,
            });
        }
    },

    deleteElectoralArea: async (req, res) => {
        try {
            const foundElectoralArea = await db.electorals.findOne({
                where: { id: req.params.id },
            });
            if (!foundElectoralArea) {
                return res.status(404).send({
                    error: 'Electoral area does not exist',
                });
            }
            await foundElectoralArea.destroy();
            res.status(200).json({
                message: 'Electoral area deleted successfully',
                foundElectoralArea,
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

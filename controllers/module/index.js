import db from '../../db/models';

export default {
    addModule: async (req, res) => {
        try {
            const checkModule = await db.modules.findOne({
                where: { name: req.body.name },
            });
            if (checkModule) {
                return res.status(403).send({
                    error: 'Module already exists',
                });
            }
           
            const module = await db.modules.create({
                name: req.body.name
            });
            return res.status(201).json({
                message: 'Module added successfully',
                module,
            });
        } catch (e) {
            console.log('the error', e);
            /* istanbul ignore next */
            return res.status(500).json({
                error: e.message,
            });
        }
    },

    getModules: async (req, res) => {
        try {
            const modules = await db.modules.findAndCountAll({
                order: [
                    ['createdAt', 'DESC']
                ]
            });
            if (modules) {
                return res.status(200).json({
                    message: 'Modules Retrieved Successfully',
                    modules,
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

    updateModule: async (req, res) => {
        try {
            const foundModule = await db.modules.findOne({
                where: { id: req.params.id },
            });
            if (!foundModule) {
                return res.status(404).send({
                    error: 'Module does not exist',
                });
            }
            
            const module = await foundElectoralArea.update({
                name: req.body.name
            });
            res.status(200).json({
                message: 'Module updated successfully',
                module,
            });
        } catch (e) {
            console.log('the error', e);
            /* istanbul ignore next */
            return res.status(500).json({
                error: e.message,
            });
        }
    },

    deleteModule: async (req, res) => {
        try {
            const foundModule = await db.modules.findOne({
                where: { id: req.params.id },
            });
            if (!foundModule) {
                return res.status(404).send({
                    error: 'Module does not exist',
                });
            }
            await foundModule.destroy();
            res.status(200).json({
                message: 'Module deleted successfully',
                foundModule,
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

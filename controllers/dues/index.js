import db from '../../db/models'
export default {
    addDue: async (req, res) => {
        const {
            peopleId,
            positionId,
            amount,
            purpose,
            type,
            from,
            to,
            userId,
        } = req.body

        try {
            const user = await db.user.findOne({
                where: { id: userId, role: 'admin' },
            })
            if (!user) {
                return res.status(403).json({
                    message: 'You prohibited from performing operation',
                })
            }
            const people = await db.peoples.findOne({
                where: { id: peopleId },
            })
            if (!people) {
                return res.status(404).json({
                    message: 'Person does not exist',
                })
            }
            const position = await db.positions.findOne({
                where: { id: positionId },
            })
            if (!position) {
                return res.status(404).json({
                    message: 'Position does not exist',
                })
            }

            const due = await db.dues.create({
                peopleId,
                positionId,
                amount,
                purpose,
                type,
                from,
                to,
                userId,
            })

            return res.status(201).json({
                message: 'Dues added Successfully',
                due,
            })
        } catch (e) {
            console.log('the error', e)
            /* istanbul ignore next */
            return res.status(500).json({
                error: e.message,
            })
        }
    },

    getDues: async (req, res) => {
        try {
            const dues = await db.dues.findAndCountAll({
                order: [
                    ['createdAt', 'DESC']
                ]
            })
            if (dues) {
                return res.status(200).json({
                    message: 'All Dues Retrieved Successfully',
                    dues,
                })
            }
        } catch (e) {
            console.log('the error', e)
            /* istanbul ignore next */
            return res.status(500).json({
                error: e.message,
            })
        }
    },
    updateDue: async (req, res) => {
        const {
            peopleId,
            positionId,
            amount,
            purpose,
            type,
            from,
            to,
            userId,
        } = req.body

        try {
            const user = await db.user.findOne({
                where: { id: userId, role: 'admin' },
            })
            if (!user) {
                return res.status(403).json({
                    message: 'You prohibited from performing operation',
                })
            }

            const dues = await db.dues.findOne({
                where: { id: req.params.id },
            })
            if (!dues) {
                return res.status(404).json({
                    message: 'Due does not exist',
                })
            }

            const people = await db.peoples.findOne({
                where: { id: peopleId },
            })
            if (!people) {
                return res.status(404).json({
                    message: 'Person does not exist',
                })
            }
            const position = await db.positions.findOne({
                where: { id: positionId },
            })
            if (!position) {
                return res.status(404).json({
                    message: 'Position does not exist',
                })
            }

            const updatedDues = await dues.update({
                peopleId,
                positionId,
                amount,
                purpose,
                type,
                from,
                to,
                userId,
            })
            res.status(200).json({
                message: 'Dues updated successfully',
                dues: updatedDues,
            })
        } catch (e) {
            console.log('the error', e)
            /* istanbul ignore next */
            return res.status(500).json({
                error: e.message,
            })
        }
    },
}

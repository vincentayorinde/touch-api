import db from '../../db/models'
export default {
    addDue: async (req, res) => {
        const {
            peopleId,
            positionId,
            amount,
            purpose,
            type,
            no_of_days,
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
            const people = await db.people.findOne({
                where: { id: peopleId },
            })
            if (!people) {
                return res.status(404).json({
                    message: 'Person does not exist',
                })
            }
            const position = await db.position.findOne({
                where: { id: positionId },
            })
            if (!position) {
                return res.status(404).json({
                    message: 'Position does not exist',
                })
            }

            console.log('the people id', peopleId)

            const due = await db.dues.create({
                peopleId,
                positionId,
                amount,
                purpose,
                type,
                no_of_days,
                userId,
            })
            console.log('the due', due)

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
            const dues = await db.dues.findAndCountAll({})
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
    updatePeople: async (req, res) => {
        const {
            voters_id,
            first_name,
            last_name,
            other_name,
            polling_station,
            positionId,
            moduleId,
            electoralId,
            userId,
        } = req.body

        try {
            const foundPeople = await db.people.findOne({
                where: { id: req.params.id },
            })
            if (!foundPeople) {
                return res.status(404).send({
                    error: 'Person does not exist',
                })
            }

            const user = await db.user.findOne({
                where: { id: userId, role: 'admin' },
            })
            if (!user) {
                return res.status(403).json({
                    message: 'You prohibited from performing operation',
                })
            }
            const position = await db.position.findOne({
                where: { id: positionId },
            })
            if (!position) {
                return res.status(404).json({
                    message: 'Position does not exist',
                })
            }
            const module = await db.module.findOne({
                where: { id: moduleId },
            })
            if (!module) {
                return res.status(404).json({
                    message: 'Module does not exist',
                })
            }
            const electoral = await db.electoral.findOne({
                where: { id: electoralId },
            })
            if (!electoral) {
                return res.status(404).json({
                    message: 'Electoral area does not exist',
                })
            }

            const people = await foundPeople.update({
                voters_id,
                first_name,
                last_name,
                other_name,
                polling_station,
                positionId,
                moduleId,
                electoralId,
                userId,
            })
            res.status(200).json({
                message: 'Person updated successfully',
                people,
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

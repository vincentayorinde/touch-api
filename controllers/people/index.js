import db from '../../db/models'
import { expiireThisToken } from '../../utils'

export default {
    addPeople: async (req, res) => {
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
            const user = await db.user.findOne({
                where: { id: userId, role: 'admin' },
            })
            if (!user) {
                return res.status(406).json({
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

            const people = await db.people.create({
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
            console.log('the person', people)

            return res.status(201).json({
                message: 'Person added Successful',
                person: people,
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

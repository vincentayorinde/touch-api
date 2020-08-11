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
            electoralId,
            memberType,
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
            const position = await db.positions.findOne({
                where: { id: positionId },
            })
            if (!position) {
                return res.status(404).json({
                    message: 'Position does not exist',
                })
            }
            const electoral = await db.electorals.findOne({
                where: { id: electoralId },
            })
            if (!electoral) {
                return res.status(404).json({
                    message: 'Electoral area does not exist',
                })
            }

            const people = await db.peoples.create({
                voters_id,
                first_name,
                last_name,
                other_name,
                polling_station,
                positionId,
                electoralId,
                memberType,
                userId,
            })
            console.log('the person', people)

            return res.status(201).json({
                message: 'Member added Successfully',
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

    getAllPeople: async (req, res) => {
        try {
            const people = await db.peoples.findAndCountAll({
                    order: [
                        ['createdAt', 'DESC']
                    ]
            })
            if (people) {
                return res.status(200).json({
                    message: 'All Members Retrieved Successfully',
                    people,
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
            electoralId,
            userId,
        } = req.body

        try {
            const foundPeople = await db.peoples.findOne({
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
            const position = await db.positions.findOne({
                where: { id: positionId },
            })
            if (!position) {
                return res.status(404).json({
                    message: 'Position does not exist',
                })
            }
            const electoral = await db.electorals.findOne({
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
    deletePeople: async (req, res) => {
        try {
            const foundPeople = await db.peoples.findOne({
                where: { id: req.params.id },
            });
            if (!foundPeople) {
                return res.status(404).send({
                    error: 'Person does not exist',
                });
            }

            await foundPeople.destroy();
            res.status(200).json({
                message: 'Person deleted successfully',
                foundPeople,
            });
        } catch (e) {
            console.log('the error', e);
            /* istanbul ignore next */
            return res.status(500).json({
                error: e.message,
            });
        }
    },

    getGeneralMembership: async (req, res) => {
        try {
            const people = await db.peoples.findAndCountAll({
                    order: [
                        ['createdAt', 'DESC']
                    ],
                    where: { memberType: 'General membership'}
            })
            if (people) {
                return res.status(200).json({
                    message: 'All General Members Retrieved Successfully',
                    people,
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
    getPollingStationExecutives: async (req, res) => {
        try {
            const people = await db.peoples.findAndCountAll({
                    order: [
                        ['createdAt', 'DESC']
                    ],
                    where: { memberType: 'Polling Station executives'}
            })
            if (people) {
                return res.status(200).json({
                    message: 'All General Members Retrieved Successfully',
                    people,
                })
            }
        } catch (e) {
            console.log('the error', e)
            /* istanbul ignore next */
            return res.status(500).json({
                error: e.message,
            })
        }
    }
}

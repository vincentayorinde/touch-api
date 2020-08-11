import express from 'express'
import Validation from '../../validators/people'
import Middleware from '../../middleware'
import People from '../../controllers/people'

const router = express.Router()

router.post(
    '/add',
    Middleware.authenticate,
    Middleware.isExpiredToken,
    Middleware.isAdmin,
    Validation.addPeople,
    People.addPeople
)
router.get(
    '/',
    Middleware.authenticate,
    Middleware.isExpiredToken,
    People.getAllPeople
)

router.get(
    '/general-membership',
    Middleware.authenticate,
    Middleware.isExpiredToken,
    People.getGeneralMembership
)
router.get(
    '/polling-station-executives',
    Middleware.authenticate,
    Middleware.isExpiredToken,
    People.getPollingStationExecutives
)

router.put(
    '/:id',
    Middleware.authenticate,
    Middleware.isExpiredToken,
    Middleware.isAdmin,
    Validation.addPeople,
    People.updatePeople
)
router.delete(
    '/:id',
    Middleware.authenticate,
    Middleware.isExpiredToken,
    Middleware.isAdmin,
    People.deletePeople
)

export default router

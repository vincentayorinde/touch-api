import express from 'express'
import Validation from '../../validators/dues'
import Middleware from '../../middleware'
import Dues from '../../controllers/dues'

const router = express.Router()

router.post(
    '/add',
    Middleware.authenticate,
    Middleware.isExpiredToken,
    Middleware.isAdmin,
    Validation.addDue,
    Dues.addDue
)
// router.get(
//     '/',
//     Middleware.authenticate,
//     Middleware.isExpiredToken,
//     People.getAllPeople
// )

// router.put(
//     '/:id',
//     Middleware.authenticate,
//     Middleware.isExpiredToken,
//     Middleware.isAdmin,
//     Validation.addPeople,
//     People.updatePeople
// );
// router.delete(
//     '/:id',
//     Middleware.authenticate,
//     Middleware.isExpiredToken,
//     Middleware.isAdmin,
//     People.deletePeople
// );

export default router

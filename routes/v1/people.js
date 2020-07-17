import express from 'express';
import Validation from '../../validators/people';
import Middleware from '../../middleware';
import People from '../../controllers/people';

const router = express.Router();

router.post(
    '/add',
    Middleware.authenticate,
    Middleware.isExpiredToken,
    Middleware.isAdmin,
    Validation.addPeople,
    People.addPeople
);
// router.get('/', People.getElectoralAreas);

// router.put(
//     '/:id',
//     Middleware.authenticate,
//     Middleware.isExpiredToken,
//     Middleware.isAdmin,
//     Validation.addElectoralArea,
//     Electoral.updateElectoralArea
// );
// router.delete(
//     '/:id',
//     Middleware.authenticate,
//     Middleware.isExpiredToken,
//     Middleware.isAdmin,
//     Electoral.deleteElectoralArea
// );

export default router;

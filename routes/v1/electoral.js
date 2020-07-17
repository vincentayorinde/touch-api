import express from 'express';
import Validation from '../../validators/electoral';
import Middleware from '../../middleware';
import Electoral from '../../controllers/electoral';

const router = express.Router();

router.post(
    '/add',
    Middleware.authenticate,
    Middleware.isExpiredToken,
    Middleware.isAdmin,
    Validation.addElectoralArea,
    Electoral.addElectoralArea
);
router.get('/', Electoral.getElectoralAreas);

router.put(
    '/:id',
    Middleware.authenticate,
    Middleware.isExpiredToken,
    Middleware.isAdmin,
    Validation.addElectoralArea,
    Electoral.updateElectoralArea
);
router.delete(
    '/:id',
    Middleware.authenticate,
    Middleware.isExpiredToken,
    Middleware.isAdmin,
    Electoral.deleteElectoralArea
);

export default router;

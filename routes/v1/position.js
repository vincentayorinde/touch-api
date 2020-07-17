import express from 'express';
import Validation from '../../validators/position';
import Middleware from '../../middleware';
import Position from '../../controllers/position';

const router = express.Router();

router.post(
    '/add',
    Middleware.authenticate,
    Middleware.isExpiredToken,
    Middleware.isAdmin,
    Validation.addPosition,
    Position.addPosition
);
router.get('/', Position.getPositions);

router.put(
    '/:id',
    Middleware.authenticate,
    Middleware.isExpiredToken,
    Middleware.isAdmin,
    Validation.addPosition,
    Position.updatePosition
);
router.delete(
    '/:id',
    Middleware.authenticate,
    Middleware.isExpiredToken,
    Middleware.isAdmin,
    Position.deletePosition
);

export default router;

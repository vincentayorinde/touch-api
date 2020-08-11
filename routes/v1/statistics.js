import express from 'express';
import Middleware from '../../middleware';
import Statistics from '../../controllers/statistics';

const router = express.Router();

router.get(
    '/',
    Middleware.authenticate,
    Middleware.isExpiredToken,
    Middleware.isAdmin,
    Statistics.getStats
);

export default router;

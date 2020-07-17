import express from 'express';
import Validation from '../../validators/module';
import Middleware from '../../middleware';
import Module from '../../controllers/module';

const router = express.Router();

router.post(
    '/add',
    // Middleware.authenticate,
    // Middleware.isExpiredToken,
    // Middleware.isAdmin,
    Validation.addModule,
    Module.addModule
);
router.get('/', Module.getModules);

router.put(
    '/:id',
    // Middleware.authenticate,
    // Middleware.isExpiredToken,
    // Middleware.isAdmin,
    Validation.addModule,
    Module.updateModule
);
router.delete(
    '/:id',
    // Middleware.authenticate,
    // Middleware.isExpiredToken,
    // Middleware.isAdmin,
    Module.deleteModule
);

export default router;

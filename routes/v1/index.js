import express from 'express';
import users from './users';
import voters from './voters';
import parties from './parties';
import candidates from './candidates';
import vote from './vote';
import statistics from './statistics';
import electoral from './electoral'
import module_ from './module'
import position from './position'

const router = express.Router();

router.use('/users', users);
router.use('/voters', voters);
router.use('/parties', parties);
router.use('/candidates', candidates);
router.use('/vote', vote);
router.use('/stats', statistics);
router.use('/electoral', electoral);
router.use('/module', module_);
router.use('/position', position);

export default router;

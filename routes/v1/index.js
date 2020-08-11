import express from 'express';
import users from './users';
import electoral from './electoral'
import position from './position'
import people from './people'
import dues from './dues'
import stats from './statistics'

const router = express.Router();

router.use('/users', users);
router.use('/electoral', electoral);
router.use('/position', position);
router.use('/people', people)
router.use('/dues', dues)
router.use('/stats', stats)

export default router;

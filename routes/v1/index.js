import express from 'express';
import users from './users';
import electoral from './electoral'
import module_ from './module'
import position from './position'
import people from './people'
import dues from './dues'

const router = express.Router();

router.use('/users', users);
router.use('/electoral', electoral);
router.use('/module', module_);
router.use('/position', position);
router.use('/people', people)
router.use('/dues', dues)

export default router;

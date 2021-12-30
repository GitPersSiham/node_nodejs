import {error} from '../middleware/index';
import {Router} from 'express';
import rest from '../route/rest';

const router: Router = Router({caseSensitive: false});

router.use('/api/rest', rest, [error.default]);

export default router;

import { Router } from 'express';
import user from './user';

const router = Router();

router.get('/', ((req, res) => {
    res.send('Coucou petite perruche !!');
}));

router.use('/api/user', user);

export default router;

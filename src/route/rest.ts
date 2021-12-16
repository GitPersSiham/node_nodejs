import Router from 'express';
import {brand} from '@/controller/index';

const router = Router();
// Brands route
router.post('/brand', brand.put.addBrand);
router.get('/brand', brand.get.all.getAllBrands);
router.get('/brand/:id', brand.get.byId.getBrandById);
export default router;

import {Error} from '../../../const/index';
import {NextFunction, Request, Response} from 'express';
import BrandRepository from '../../../repository/brand';

export async function getAllBrands(req: Request, res: Response, next: NextFunction): Promise<void> {
  try {
    const brandRepo = new BrandRepository();
    const data = await brandRepo.findAll();
    res.json(data);
  } catch (error) {
    next(Error.HTTP_500);
  }
}

import {Error} from '@/const/index';
import BrandRepository from '@/repository/brand';
import {NextFunction, Request, Response} from 'express';

export async function getBrandById(req: Request, res: Response, next: NextFunction): Promise<void> {
  try {
    const brandRepo = new BrandRepository();
    const data = await brandRepo.find(req.params.id);
    res.status(200).json(data);
  } catch (error) {
    next(Error.HTTP_500);
  }
}

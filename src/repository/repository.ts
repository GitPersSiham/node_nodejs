import IModel from '@/model/index';
import requester from 'requester';

export abstract class Repository<T extends IModel> {
  request: any;
  constructor() {
    const path = this.constructor.name.replace('Repository', '').toLowerCase();
    this.request = requester(`${process.env.API_URL}/${path}`);
  }

  public async create(model: T): Promise<T> {
    try {
      const data = await this.request.post(model.serialize());
      return Promise.resolve(<T>data);
    } catch (error) {
      return Promise.reject(error);
    }
  }

  public async findAll(): Promise<T[]> {
    try {
      const data = await this.request.get();

      return Promise.resolve(<T[]>data);
    } catch (error) {
      return Promise.reject(error);
    }
  }

  public async find(id: string): Promise<T> {
    try {
      const data = await this.request.get(id);
      return Promise.resolve(<T>data);
    } catch (error) {
      return Promise.reject(error);
    }
  }
}

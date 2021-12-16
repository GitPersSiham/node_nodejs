import { IModel } from '@model';
import axios, { AxiosPromise } from 'axios';

export abstract class Repository<T extends IModel> {
  axios: any;
  constructor() {
    const path = this.constructor.name.replace('Repository', '').toLowerCase();
    console.log(path);
    this.axios = axios(`${process.env.API_URL}/${path}`);
  }

  public async create(model: T): Promise<T> {
    try {
      const data = await this.axios.post(model.serialize());
      return Promise.resolve(<T>data);
    } catch (error) {
      return Promise.reject(error);
    }
  }

  public async findAll(): Promise<T[]> {
    try {
      const data = await this.axios.get();
      return Promise.resolve(<T[]>data);
    } catch (error) {
      return Promise.reject(error);
    }
  }

  public async find(id: string): Promise<T> {
    try {
      const data = await this.axios.get(id);
      return Promise.resolve(<T>data);
    } catch (error) {
      return Promise.reject(error);
    }
  }
}

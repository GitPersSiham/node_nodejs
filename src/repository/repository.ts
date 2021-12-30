import IModel from '../model/index';
import axios from 'axios';

export abstract class Repository<T extends IModel> {
  constructor() {}

  public create(model: T) {
    axios
      .post(`${process.env.API_URL}/brand`, model.serialize())
      .then((resp) => {
        console.log(resp.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  public findAll() {
    axios
      .get(`${process.env.API_URL}/brand`)
      .then((resp) => {
        const data = resp.data;
        data.forEach((e) => {
          console.log(`${e.title} `);
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }
  public find(id: string) {
    axios
      .get(`${process.env.API_URL}/brand/${id}`)
      .then((resp) => {
        console.log(resp.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }
}

import axios from 'axios';

export class ApiService {

  constructor(subRoute) {
    this._url = import.meta.env.VITE_API_URL;
    this._subRoute = subRoute;
  }

  async get() {
    try {
      const response = await axios.get(`${this._url}/${this._subRoute}`);
      return response.data;
    } catch (error) {
      console.error(`Error al obtener datos: ${error.message}`);
      throw error;
    }
  }

  async getByCode(code) {
    try {
      const response = await axios.get(`${this._url}/${this._subRoute}/${code}`);
      return response.data;
    } catch (error) {
      console.error(`Error en la petición: ${error.message}`);
      throw error;
    }
  }

}

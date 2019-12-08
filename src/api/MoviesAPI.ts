import axios from 'axios';
import { BASE_URL } from '../constants/api.constants';

const MoviesAPI = {
  async getMoviesByTitle(title: string) {
    const response = await axios.get(`${BASE_URL}/?q=${title}&_limit=5`);
    return response.data.data;
  },
};

export default MoviesAPI;

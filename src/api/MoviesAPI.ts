import axios from "axios";
import { BASE_URL } from "../constants/api.constants";

const MoviesAPI = {
  getMoviesByTitle: async function(title: string) {
    try {
      const response = await axios.get(`${BASE_URL}/?q=${title}`);
      return response.data;
    } catch (e) {
      console.error(e);
    }
  }
};

export default MoviesAPI;

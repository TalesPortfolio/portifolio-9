import axios from "axios";
import  { BASE_URL, API_KEY_PARAM, BACKDROP_BASE_URL} from '../config'

export class TVShowAPI {
  static async fetchPopulars() {
    const response = await axios.get(`${BASE_URL}tv/popular${API_KEY_PARAM}`);
    return response.data.results;
  }

  static async fetchRecommendations(TVShowAId) {
    const response = await axios.get(`${BASE_URL}tv/${TVShowAId}/recommendations${API_KEY_PARAM}`);
    return response.data.results;
  }

  static async fetchByTitle(title) {
    const response = await axios.get(
      `${BASE_URL}search/tv${API_KEY_PARAM}&query=${title}`);
    return response.data.results;
  }
}

import apiService from "@/core/api/api-service";
import axiosInstance from "@/core/api/axios";

class categoriesService {
  urlBase = apiService.categories;

  get() {
    return axiosInstance.get(`${this.urlBase}`);
  }

  getChildren() {
    return axiosInstance.get(`${this.urlBase}`);
  }
}

export default new categoriesService();

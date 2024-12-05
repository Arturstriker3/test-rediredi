import apiService from "@/core/api/api-service";
import axiosInstance from "@/core/api/axios";

class categoriesService {
  urlBase = apiService.categories;

  get() {
    return axiosInstance.get(`${this.urlBase}`);
  }

  patch(newName: string, categoryId: string) {
    const data = {
      name: newName,
    };

    return axiosInstance.patch(`${this.urlBase}/${categoryId}`, data);
  }

  delete(categoryId: string) {
    return axiosInstance.delete(`${this.urlBase}/${categoryId}`);
  }

  post(name: string) {
    const data = {
      name: name,
    };

    return axiosInstance.post(`${this.urlBase}`, data);
  }

  postChildren(name: string, parentId: string) {
    const data = {
      parent: {
        id: parentId,
      },
      name: name,
    };

    return axiosInstance.post(`${this.urlBase}`, data);
  }

  getChildrens(categoryId: string) {
    return axiosInstance.get(`${this.urlBase}/${categoryId}`);
  }
}

export default new categoriesService();

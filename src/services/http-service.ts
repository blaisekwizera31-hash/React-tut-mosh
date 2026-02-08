import apiClient from "./api-client";


class HttpService {



  getAll<T>() {
    const controller = new AbortController();
    const request = apiClient.get<T[]>("/users", {
      signal: controller.signal,
    });
    return { request, cancel: () => controller.abort() };
  }
}

export default new HttpService; 


  
  
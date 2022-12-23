import axiosInstance from "../networks/api";

const materiAPI = {
  async getAllMateri() {
    try {
      const response = await axiosInstance.get(
        "https://gencer.live/instructor/module/get_all"
      );
      console.log(response);
      return response;
    } catch (err) {
      console.log(err);
    }
  },
  async getMediaMateri() {
    try {
      const response = await axiosInstance.get(
        "https://gencer.live/instructor/media_module/get_all"
      );
      console.log(response);
      return response;
    } catch (err) {
      console.log(err);
    }
  },
  async createMateri(data) {
    try {
      const response = await axiosInstance.post(
        "https://www.gencer.live/instructor/module/create",
        data
      );
      return response;
    } catch (error) {
      console.log(error);
    }
  },
};

export default materiAPI;

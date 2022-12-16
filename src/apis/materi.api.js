import axiosInstance from "../networks/api";

const materiAPI = {
  async getAllMateri() {
    try {
      const response = await axiosInstance.get("/instructor/module/get_all");
      console.log(response);
      return response;
    } catch (err) {
      console.log(err);
    }
  },
  async getMediaMateri() {
    try {
      const response = await axiosInstance.get(
        "/instructor/media_module/get_all"
      );
      console.log(response);
      return response;
    } catch (err) {
      console.log(err);
    }
  },
};

export default materiAPI;

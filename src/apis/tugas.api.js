import axiosInstance from "../networks/api";

const tugasAPI = {
  async getAllTugas() {
    try {
      const response = await axiosInstance.get("/instructor/module/get_all");
      console.log(response);
      return response;
    } catch (err) {
      console.log(err);
    }
  },
};

export default tugasAPI;

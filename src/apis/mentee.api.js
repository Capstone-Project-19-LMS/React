import axiosInstance from "../networks/api";

const menteeAPI = {
  async getAllMentee() {
    try {
      const response = await axiosInstance.get("/instructor/module/get_all");
      console.log(response);
      return response;
    } catch (err) {
      console.log(err);
    }
  },
};

export default menteeAPI;

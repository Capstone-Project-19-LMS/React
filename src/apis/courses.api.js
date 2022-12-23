import axiosInstance from "../networks/api";

const coursesAPI = {
  async createCourse(data) {
    try {
      const response = await axiosInstance.post(
        "https://www.gencer.live/instructor/course/create",
        data
      );
      return response;
    } catch (error) {
      throw error;
      // console.log(error);
    }
  },
  async getCoursesId(id) {
    try {
      const response = await axiosInstance.get(
        `https://gencer.live/instructor/course/get_by_id/${id}`
      );
      return response;
    } catch (error) {
      throw error;
      // console.log(error);
    }
  },
  async updateCourses({ id, data }) {
    try {
      // const id = data.id;
      const response = await axiosInstance.put(
        `https://www.gencer.live/instructor/course/update/${id}`,
        data
      );
      return response;
    } catch (error) {
      throw error;
      // console.log(error);
    }
  },
};

export default coursesAPI;

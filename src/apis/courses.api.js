import axiosInstance from "../networks/api";

const coursesAPI = {
  async createCourse(data) {
    try {
      const response = await axiosInstance.post(
        "http://13.213.47.36/instructor/course/create",
        data
      );
      return response;
    } catch (error) {
      console.log(error);
    }
  },
  async getCoursesId(id) {
    try {
      const response = await axiosInstance.get(
        `/instructor/course/get_by_id/${id}`
      );
      return response;
    } catch (error) {
      console.log(error);
    }
  },
  async updateCourses(id, data) {
    try {
      // const id = data.id;
      const response = await axiosInstance.put(
        `http://13.213.47.36/instructor/course/update/${id}`,
        data
      );
      return response;
    } catch (error) {
      console.log(error);
    }
  },
};

export default coursesAPI;

const { default: axios } = require("axios");

const API_KEY = process.env.NEXT_PUBLIC_STRAPI_API_KEY;

const axiosClient = axios.create({
  baseURL: "https://docpro-app-admin.onrender.com/api",
  headers: {
    Authorization: `Bearer ${API_KEY}`,
  },
});

const getCategory = () => axiosClient.get("categories?populate=*");

const getDoctorList = () => axiosClient.get("physicians?populate=*");

const getDoctorCategory = (category) =>
  axiosClient.get(
    "/physicians?filters[categories][Name][$in]=" + category + "&populate=*"
  );

const getDoctorById = (id) =>
  axiosClient.get("/physicians/" + id + "?populate=*");

const bookAppointment = (data) => axiosClient.post("/appointments", data);

const getUserBookingList = (userEmail) =>
  axiosClient.get(
    "/appointments?[filters][Email][$eq]=" +
      userEmail +
      "&populate=[physician][populate]&populate=*"
  );

// const getUserBookingList = (id) => axiosClient.get("/appointments/" + id + "?populate=*");

export default {
  getCategory,
  getDoctorList,
  getDoctorCategory,
  getDoctorById,
  bookAppointment,
  getUserBookingList,
};

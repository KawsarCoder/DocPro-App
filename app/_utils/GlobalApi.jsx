const { default: axios } = require("axios");

const API_KEY = process.env.NEXT_PUBLIC_STRAPI_API_KEY;

const axiosClient = axios.create({
  baseURL: "http://localhost:1337/api",
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

export default {
  getCategory,
  getDoctorList,
  getDoctorCategory,
  getDoctorById,
  bookAppointment,
};

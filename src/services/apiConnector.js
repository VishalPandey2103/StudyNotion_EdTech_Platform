import axios from "axios";
const BASE_URL = process.env.REACT_APP_BASE_URL || 'https://studynotion-an-edtech-platform-cfzo.onrender.com/api/v1' // Fallback to localhost if env variable is not set

export const axiosInstance = axios.create({});

export const apiConnector = (method, url, bodyData, headers, params) => {
  console.log("BASE_URL", BASE_URL);
  return axiosInstance({
    method: `${method}`,
    url: `${url}`,
    data: bodyData ? bodyData : null,
    headers: headers ? headers : null,
    params: params ? params : null,
  });
};

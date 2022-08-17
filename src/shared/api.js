import axios from "axios";

axios.interceptors.request.use((value) => {
  value.headers = {
    "Content-Type": "application/json",
  };
  return value;
});

export const api = async (method, section, id, condition, data) => {
  try {
    return await axios({
      method,
      url: `https://jsonplaceholder.typicode.com/${section}?${condition}=${id}`,
      data,
    });
  } catch (error) {
    console.log(error);
  }
};

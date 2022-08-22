import axios from "axios";

export const api = async (method, endpoint, options = "", data) => {
  const optionsKeys = Object.keys(options);
  const optionsQuery =
    options && optionsKeys.map((key) => `${key}=${options[key]}&`).join("");
  try {
    return await axios({
      method,
      url: `https://jsonplaceholder.typicode.com/${endpoint}?${optionsQuery}`,
      data,
    });
  } catch (error) {
    console.log(error);
  }
};

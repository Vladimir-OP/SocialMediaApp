import axios from "axios";

axios.interceptors.request.use((value) => {
  value.headers = {
    "Content-Type": "application/json",
  };
  return value;
});

export const api = async (
  method,
  endpoint,
  options = "",
  contentType,
  data
) => {
  const optionsKeys = Object.keys(options);
  const optionsQuery =
    options && optionsKeys.map((key) => `${key}=${options[key]}&`).join("");
  try {
    return await axios(
      {
        method,
        url: `https://jsonplaceholder.typicode.com/${endpoint}?${optionsQuery}`,
        data,
      },
      {
        headers: {
          "Content-Type": contentType,
        },
      }
    );
  } catch (error) {
    console.log(error);
  }
};

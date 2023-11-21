import axios from "axios";

export const fetcher = (url) => axios.get(url).then(response => response.data)

export const setter = (url, body) =>
  axios.put(url, body)
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });

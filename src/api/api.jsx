import axios from "axios";

const URL = "https://6415d952351c4aed49114ed9.mockapi.io";

async function getCommerces() {
  const response = await axios.get(`${URL}/commerces`);

  return response.data;
}

async function updateCommerce(id, commerce) {
  const response = await axios.put(`${URL}/commerces/${id}`, commerce);

  return response.data;
}

export const api = {
  getCommerces,
  updateCommerce,
};

import axios from "axios";

export function fetchData() {
  return axios.get("https://makeup-api.herokuapp.com/api/v1/products.json");
}

export function fetchProductsTypes(type) {
  return axios.get("https://makeup-api.herokuapp.com/api/v1/products.json", {
    params: { product_type: type }
  });
}

export function fetchProductsTags(tag) {
  return axios.get("https://makeup-api.herokuapp.com/api/v1/products.json", {
    params: { product_tags: tag }
  });
}

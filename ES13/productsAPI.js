import fetch from "node-fetch";

const RespuestaApi = await fetch("https://api.escuelajs.co/api/v1/products");
const productsEnJSON = await RespuestaApi.json();

export { productsEnJSON };
import { baseUrl } from "../const/const";

export const getTrabajos = async () => {
  const resp = await fetch(`${baseUrl}/trabajos`);
  const data = await resp.json();
  //console.log(data);
  return data;
};
import axios from "axios";
import config from "./config";

const ai = axios.create({ baseURL: config.API_URL });

async function read() {
  try {
    const { data } = await ai.get("/announcement");

    return data.data.reverse();
  } catch (e) {
    return e;
  }
}

export default { read };

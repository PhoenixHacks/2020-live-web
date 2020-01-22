import axios from "axios";
import config from "./config";

const ai = axios.create({ baseURL: config.API_URL });

async function read() {
  try {
    const { data } = await ai.get("/announcements");

    return data.data;
  } catch (e) {
    return e;
  }
}

export default { read };
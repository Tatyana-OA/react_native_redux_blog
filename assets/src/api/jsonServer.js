import axios from "axios";

export default axios.create({
  // with free ngrok account, changes once every 8 hours
  baseURL: "https://e10c-84-238-172-130.eu.ngrok.io",
});

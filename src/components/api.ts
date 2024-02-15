import axios from "axios";

const baseURL = "https://crudapi.co.uk/api/v1";
const token="3UGQBVFmyAnuZ9a-PNFD4Chq3uq8UK-iyE1d4dEiE5SxPtDcyw";

const instance = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
    "Authorization": `Bearer ${token}`
  },
});

export default instance;

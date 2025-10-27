import axios from "axios";

const api = axios.create({
  baseURL: "https://api.freeapi.app/api/v1",
  headers: {
    "Content-Type": "application/json"
  }
});

api.interceptors.request.use(
  (confiq) => {
    const token = "tokenasdlkfjsd asdvalj;l asdjgds";
    // console.log(token);

    if (token) {
      confiq.headers.Authorization = token;
    }
    return confiq;
  },

  (err) => {
    return Promise.reject(err);
  }
);

export const authservice = { 
    registration : async (userData) => {
        const response = await api.post("/user/registration", userData);
        return response.data;
}
};


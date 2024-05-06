import Axios from "axios";
Axios.defaults.baseURL = "http://localhost:3000";

export default {
  getAllThemes() {
    return Axios.get("/themes")
      .then((resp) => {
        //console.log(resp.data);
        return resp.data;
      })
      .catch((err) => {
        //console.log(err);
        return Promise.reject(err);
      });
  },
  getAllSets() {
    return Axios.get("/sets")
      .then((resp) => {
        //console.log(resp.data);
        return resp.data;
      })
      .catch((err) => {
        //console.log(err);
        return Promise.reject(err);
      });
  },

  // getValamiById(id) {
  //   return Axios.get(`/valamik/${id}`)
  //     .then((resp) => {
  //       //console.log(resp.data);
  //       return resp.data;
  //     })
  //     .catch((err) => {
  //       //console.log(err);
  //       return Promise.reject(err);
  //     });
  // },
  // saveUser(újobjektum) {
  //   return Axios.post("/valamik", újobjektum).then(() => {});
  // },
  // updateUser(módosítottObjektum, id) {
  //   return Axios.put(`/valamik/${id}`, módosítottObjektum).then(() => {});
  // },
};

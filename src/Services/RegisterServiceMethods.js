import axios from "axios";
export const REQUEST_METHODS = {
  POST: "POST",
  DELETE: "DELETE",
  PUT: "PUT",
};

export const ServiceCall = {
  postApi: (url, user) => {
    return new Promise(function (resolve, reject) {
      axios
        .post(url, user)
        .then((response) => {
          alert("User Registered successfully!");
          resolve(response);
        })
        .catch((error) => reject(error));
    });
  },

 postApi: (url, admin) => {
    return new Promise(function (resolve, reject) {
      axios
        .post(url, admin)
        .then((response) => {
          alert("Admin Registered successfully!");
          resolve(response);
        })
        .catch((error) => reject(error));
    });
  },

};

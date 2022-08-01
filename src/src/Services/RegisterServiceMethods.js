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
          resolve(response);
        })
        .catch((error) => reject(error));
    });
  },
};

import axios from "axios";
export const REQUEST_METHODS = {
  POST: "POST",
  DELETE: "DELETE",
  PUT: "PUT",
};

export const ServiceCall = {
  getApi: (url) => {
    return new Promise(function (resolve, reject) {
      axios
        .get(url)
        .then((response) => {
          resolve(response);
        })
        .catch((error) => reject(error));
    });
  },

  deleteApi: (url) => {
    console.log(url, "deleteApi");
    return new Promise(function (resolve, reject) {
      axios
        .delete(url)
        .then((response) => {
          resolve(response);
        })
        .catch((error) => reject(error));
    });
  },
  postApi: (url, user) => {
    return new Promise(function (resolve, reject) {
      axios
        .post(url, user)
        .then((response) => {
          alert(
            "Member Added with ID " + response.data.memId + " successfully!"
          );
          resolve(response);
        })
        .catch((error) => reject(error));
    });
  },
};

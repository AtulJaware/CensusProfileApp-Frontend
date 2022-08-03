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
    return new Promise(function (resolve, reject) {
      axios
        .delete(url)
        .then((response) => {
          resolve(response);
        })
        .catch((error) => reject(error));
    });
  },
  postApi: (url, mem) => {
    return new Promise(function (resolve, reject) {

      axios
        .post(url, mem)
        .then((response) => {
          alert("Member Added with ID " + response.data.memId + " successfully!");
          resolve(response);
        })
        .catch((error) => reject(error));
    });
  },
  putApi: (url ,mem) => {
    return new Promise(function (resolve, reject) {
  axios
      .put(url, mem)
      .then((response) => {
        resolve(response);
        alert("Member Updated with ID " + response.data.memId + " successfully!");
      })
      .catch((error) => reject(error));
  });
}};

export const UserServiceCall = {
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
  postApi: (url, user) => {
    return new Promise(function (resolve, reject) {

      axios
        .post(url, user)
        .then((response) => {
          alert("User Added with ID " + response.data.userId + " successfully!");
          resolve(response);
        })
        .catch((error) => reject(error));
    });
  },

  putApi: (url, user) => {
    return new Promise(function (resolve, reject) {
      axios
        .put(url, user)
        .then((response) => {
          resolve(response);
          console.log(response);
        alert("User Updated with ID " + response.data.userId + " successfully!");
        })
        .catch((error) => reject(error));
    });
  },
  deleteApi: (url) => {
    return new Promise(function (resolve, reject) {
      axios
        .delete(url)
        .then((response) => {
          resolve(response);
        })
        .catch((error) => reject(error));
    });
  },
};
export const AdminServiceCall ={
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
   postApi: (url, admin) => {
    return new Promise(function (resolve, reject) {

      axios
        .post(url, admin)
        .then((response) => {
          alert("Admin Added with ID " + response.data.adminId + " successfully!");
          console.log(response);
          resolve(response);
        })
        .catch((error) => reject(error));
    });
  },
  deleteApi: (url) => {
    return new Promise(function (resolve, reject) {
      axios
        .delete(url)
        .then((response) => {
          resolve(response);
        })
        .catch((error) => reject(error));
    });
  },
  putApi:(url,admin)=>{
    return new Promise(function (resolve,reject) {
      axios
      .put(url, admin)
        .then((response) => {
          resolve(response);
          console.log(response);
        alert("admin Updated with ID " + response.data.adminId + " successfully!");
        })
        .catch((error) => reject(error));
      });
  },
  };

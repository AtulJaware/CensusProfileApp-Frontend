import axios from "axios";
import { DOMAIN } from "../Constants/ApiConstant";
import { StringConstant } from "../Constants/StringConstant";
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
          alert(StringConstant.memberAdded + response.data.memId);
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
        alert(StringConstant.memberUpdated + response.data.memId);
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
          alert(StringConstant.userAdded + response.data.userId);
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
        alert(StringConstant.userUpdated + response.data.userId);
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

export const LoginServiceCall = {
 postApi: (url,login) => {
  return new Promise(function (resolve, reject) {
    axios
    .post(url,login)
    .then((response) => {
      alert(StringConstant.loginAdded+response.data.email);
      resolve(response);
    })
    .catch ((error) => reject(error));
  });
 },
 patchApi: (url,login) => {
  return new Promise(function (reslove, reject){
    axios
    .patch(url,login)
    .then((response) =>{
      reslove(response);
      alert(StringConstant.loginUpdated+response.data.email);
    })

.catch ((error) => reject(error));
  });
 },
};

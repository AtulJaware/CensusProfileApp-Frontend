import axios from "axios";
export const REQUEST_METHODS = {
    PUT: "PUT",
};

export const ServiceCall =  {         
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

       putApi: (url) => {

            return new Promise(function (resolve, reject) {
                axios
                    .put(url)
                    .then((response) => {
                        resolve(response);
                    })
                    .catch((error) => reject(error));
            });
        },
    };
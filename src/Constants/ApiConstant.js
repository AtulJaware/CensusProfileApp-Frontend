export const DOMAIN = "http://localhost:8081/";

export const ApiConstant = {
  adminApi: DOMAIN + "adminss",
  postAdmin: DOMAIN + "adminDto/add",
  deleteAdmin: (id) => DOMAIN + `admin/delete/${id}`,
  getAdmin: DOMAIN + "admins",
  getAdmin:(id)=> DOMAIN + `admin/${id}`,
  putAdmin: (id) => DOMAIN + `admin/update/${id}`
};
export const UserApiConstant ={
registerUser: DOMAIN + "user/register",
postUser: DOMAIN + "userDto/add",
getUser: (id) => DOMAIN + `user/${id}`,
getUsers: DOMAIN + `users`,
getUserEmail: (email) => DOMAIN + `user/email/${email}`,
deleteUser: (id) => DOMAIN +`user/delete/${id}`,
putUser: (id) => DOMAIN + `user/${id}`,
};

export const AdminApiConstant ={
getAdmin: (email) => DOMAIN + `admin/email/${email}`

};
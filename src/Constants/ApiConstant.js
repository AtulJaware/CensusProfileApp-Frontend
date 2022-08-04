export const DOMAIN = "http://localhost:8081/";

export const ApiConstant = {
  applicationApi: DOMAIN + "application",
  putApi: (id) => DOMAIN + `application/update/${id}`,
  getApi: DOMAIN + "application",
};

export const MemberApiConstant = {
  memeberApi: DOMAIN + "members",
  postMember: DOMAIN + "memberDto/add",
  deleteMember: (id) => DOMAIN + `member/delete/${id}`,
  getMember: DOMAIN + "members",
  getMember: (id) => DOMAIN + `member/${id}`,
  putMember: (id) => DOMAIN + `member/update/${id}`,
};
export const UserApiConstant = {
  registerUser: DOMAIN + "user/register",
  userApi: DOMAIN + "users",
  postUser: DOMAIN + "userDto/add",
  deleteUser: (id) => DOMAIN + `user/delete/${id}`,
 // getUser: DOMAIN + `users`,
  getUser: (id) => DOMAIN + `user/${id}`,
  getUserEmail: (email) => DOMAIN + `user/email/${email}`,
  putUser: (id) => DOMAIN + `user/update/${id}`,
};

export const AdminApiConstant = {
  registerAdmin: DOMAIN + "admin/register",
  getAdmin: (email) => DOMAIN + `admin/email/${email}`,
  getAdmin: (adminId) => DOMAIN + `admin/${adminId}`,
  postAdmin: DOMAIN + "admin/add",
  getAdmins: DOMAIN + "admins",
  putAdmin: (adminId) => DOMAIN + `admin/update/${adminId}`,
  deleteAdmin: (adminId) => DOMAIN + `admin/delete/${adminId}`,
};

export const LoginApiConstant = {
   patchLogin: (email) => DOMAIN+ `logout/${email}`,
   postLogin: DOMAIN+ `login/dto`,

}

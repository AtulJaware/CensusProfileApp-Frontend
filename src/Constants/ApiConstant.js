export const DOMAIN = "http://localhost:8001/";

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
  postUser: DOMAIN + "userDto/add",
  getUser: (id) => DOMAIN + `user/${id}`,
  getUsers: DOMAIN + `users`,
  getUserEmail: (email) => DOMAIN + `user/email/${email}`,
  deleteUser: (id) => DOMAIN + `user/delete/${id}`,
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

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
};

export const LoginApiConstant = {
   patchLogin: (email) => DOMAIN+ `logout/${email}`,
   postLogin: DOMAIN+ `login/dto`,

}

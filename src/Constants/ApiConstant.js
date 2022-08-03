export const DOMAIN = "http://localhost:8081/";

export const MemberApiConstant = {
  memeberApi: DOMAIN + "members",
  postMember: DOMAIN + "memberDto/add",
  deleteMember: (id) => DOMAIN + `member/delete/${id}`,
  getMember: DOMAIN + "members",
  getMember:(id)=> DOMAIN + `member/${id}`,
  putMember: (id) => DOMAIN + `member/update/${id}`
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
getAdmin: (email) => DOMAIN + `admin/email/${email}`,
putAdmin: (adminId) => DOMAIN + `admin/update/${adminId}`,
//getAdmin: (adminId) => DOMAIN + `admin/${adminId}`,
getAdmins: DOMAIN + `admins`,
deleteAdmin: (adminId) => DOMAIN +`admin/delete/${adminId}`,
postAdmin: DOMAIN + "admin/add",
};


export const DOMAIN = "http://localhost:9001/";


export const ApiConstant =  {
    applicationApi:DOMAIN+"application",
    putApi:(id)=>DOMAIN+`application/update/${id}`,
    getApi: DOMAIN+"application",
}

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
getAdmin: (email) => DOMAIN + `admin/email/${email}`

};
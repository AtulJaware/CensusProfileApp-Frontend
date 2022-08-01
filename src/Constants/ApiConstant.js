export const DOMAIN = "http://localhost:9002/";

export const ApiConstant = {
  memeberApi: DOMAIN + "members",
  deleteMember: (id) => DOMAIN + `member/delete/${id}`,
  registerUser: DOMAIN + "/user/register",
  getMember: DOMAIN + "members",
};

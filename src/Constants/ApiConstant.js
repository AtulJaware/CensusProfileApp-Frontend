export const DOMAIN = "http://localhost:9002/";

export const ApiConstant = {
  memeberApi: DOMAIN + `members`,
  deleteMember: (id) => DOMAIN + `member/delete/${id}`,
  postMember: DOMAIN + `member/add`,
  registerUser: DOMAIN + `user/register`,
  getMember: DOMAIN + `members`,
  getUser: DOMAIN + `user`,
};

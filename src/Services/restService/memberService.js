import axios from "axios";
import { DOMAIN } from "../../Constants/ApiConstant";

class Member {
  async getAllMembers() {
    return await axios.get(DOMAIN + "members");
  }

  async getMemberById(memId) {
    // http://localhost:8081/member/10
    return await axios.get(DOMAIN + "member/" + memId);
  }

  async updateMember(member, memId) {
    //http://localhost:8081/member/update
    return await axios.put(DOMAIN + "update/" + memId, member);
  }

  async deleteMember(memId) {
    return await axios.delete(DOMAIN + "delete/" + memId);
  }
}

export default new Member();

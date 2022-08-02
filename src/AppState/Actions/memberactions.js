import axios from "axios";

handleDelete = (id) => {
    // http://localhost:8081/member/delete/{id}
    axios
      .delete(`http://localhost:8081/member/delete/${id}`)
      .then((res) => {
        console.log(res);
        // return all members except mem which is selected for delete
        const mems = this.state.members.filter((mem) => mem.memId !== id);

        // update state object with members
        this.setState({ members: mems });
        alert("Member with Id " + id + " deleted successfully!");
      })
      .catch((err) => console.log(err));
  };
import React, { useState, useEffect } from "react";
import { useParams,useNavigate} from "react-router-dom";
import axios from "axios";

const UpdateMember = () => {
  const params = useParams();
  let navigate = useNavigate();
  console.log(params);

  // define state
  const [mem, setMem] = useState({
    id: "",
    firstName: "",
    lastName: "",
    dob: "",
    gender: "",
    relationShip: "",
    qualification: "",
    marital_status: "",
  });

  //useEffect(callback function,[condition] )
  // get existing mem details using id and update mem state obj
  useEffect(() => {
    axios
      .get(`http://localhost:8081/member/${params.id}`)
      .then((res) => setMem(res.data))
      .catch((err) => console.log(err));
  }, []);

  const handleChange = (event) => {
    console.log(event.target.name); // returns field name
    console.log(event.target.value); // retruns filed value

    // copy mem details to newEmp obj
    const newMem = { ...mem };

    //newmem.id =10;
    //newmem["id"] = 10;
    //update newMem object
    newMem[event.target.name] = event.target.value;

    // update mem obj with newMem obj details
    setMem(newMem);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .put(`http://localhost:8081/member/${params.id}`, mem)
      .then((res) => {
        console.log(res);
        alert("Member Updated with ID " + res.data.id + " successfully!");
        navigate("/members");
      })
      .catch((error) => console.log(error));
  };
  return (
    <div>
      <div className="w-50 mx-auto mt-3">
        <p className="display-6">Update Member</p>
        <form className="border p-3" onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="id" className="form-label float-start">
              ID
            </label>
            <input
              type="text"
              className="form-control"
              id="id"
              value={mem.id}
              name="id"
              onChange={handleChange}
              disabled
            />
          </div>
          <div className="mb-3">
            <label htmlFor="firstName" className="form-label float-start">
              First Name
            </label>
            <input
              type="text"
              className="form-control"
              id="firstName"
              value={mem.firstName}
              name="firstName"
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="lastName" className="form-label float-start">
              Last Name
            </label>
            <input
              type="text"
              className="form-control"
              id="lastName"
              value={mem.lastName}
              name="lastName"
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="dob" className="form-label float-start">
              Date of Birth
            </label>
            <input
              type="date"
              className="form-control"
              id="dob"
              value={mem.dob}
              name="dob"
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="gender" className="form-label float-start">
              Gender
            </label>
            <input
              type="text"
              className="form-control"
              id="gender"
              name="gender"
              value={mem.gender}
              onChange={handleChange}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="relationShip" className="form-label float-start">
              Relationship
            </label>
            <input
              type="text"
              className="form-control"
              id="relationShip"
              value={mem.relationShip}
              name="relationShip"
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="qualification" className="form-label float-start">
              Qualification
            </label>
            <input
              type="text"
              className="form-control"
              id="qualification"
              value={mem.qualification}
              name="qualification"
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="marital_status" className="form-label float-start">
              Marital Status
            </label>
            <input
              type="text"
              className="form-control"
              id="marital_status"
              value={mem.marital_status}
              name="marital_status"
              onChange={handleChange}
            />
          </div>

          <div className="d-grid gap-2">
            <button type="submit" className="btn btn-primary">
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateMember;
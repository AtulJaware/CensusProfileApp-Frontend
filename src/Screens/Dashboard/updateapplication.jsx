import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ServiceCall } from "../../Services/applicationServiceMethod";
import { ApiConstant } from "../../Constants/ApiConstant";

const UpdateApplication = () => {
  const params = useParams();
  let navigate = useNavigate();
  console.log(params);

  // define state
  const [app, setApp] = useState({
    id: "",
    status: "",
    user_id: "",
  });

  //useEffect(callback function,[condition] )
  // get existing app details using id and update app state obj
  useEffect(() => {
    ServiceCall.getApi(ApiConstant.getApplication).then((res) =>
      setApp(res.data)
    );
  }, []);

  const handleChange = (event) => {
    console.log(event.target.name); // returns field name
    console.log(event.target.value); // retruns filed value

    // copy app details to newApp obj
    const newApp = { ...app };

    //newapp.id =10;
    //newapp["id"] = 10;
    //update newApp object
    newApp[event.target.name] = event.target.value;

    // update app obj with newApp obj details
    setApp(newApp);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    ServiceCall.putApi(ApiConstant.putApi, app.id);
  };
  return (
    <div>
      <div className="w-50 mx-auto mt-3">
        <p className="display-6">Update Application</p>
        <form className="border p-3" onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="id" className="form-label float-start">
              Id
            </label>
            <input
              type="number"
              className="form-control"
              id="id"
              value={app.id}
              name="id"
              onChange={handleChange}
              disabled
            />
          </div>

          <label htmlFor="status" className="form-label">
            Status
          </label>
          <select
            className="form-select"
            aria-label="Default select example"
            id="status"
            name="status"
            value={app.status}
            onChange={handleChange}
          >
            <option selected>status</option>

            <option value="Accepted">Accepted</option>

            <option value="Rejected">Rejected</option>

            <option value="Pending">Pending</option>
          </select>

          <div className="mb-3">
            <label htmlFor="user_id" className="form-label float-start">
              User_id
            </label>
            <input
              type="number"
              className="form-control"
              id="user_id"
              value={app.user_id}
              name="user_id"
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

export default UpdateApplication;

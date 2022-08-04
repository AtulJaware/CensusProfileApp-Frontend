import axios from "axios";
import { LoginApiConstant, UserApiConstant } from "../../Constants/ApiConstant";
import { LoginServiceCall, ServiceCall } from "../../Services/ServiceMethod";

// Register
export const registerAction = (users) => async (dispatch) => {
 const result = await ServiceCall.postApi(UserApiConstant.registerUser,users)
  console.log(result);
  console.log(result.data);
  dispatch({
    type: "REGISTER",
    payload: result.data,
  });
};


// login action
export const loginAction = (login) => (dispatch) => {
 LoginServiceCall.postApi(LoginApiConstant.postLogin,login)
    .then((res) => {
      console.log(res);
      dispatch({
        type: "LOGIN",
        payload: res.data,
      });
    })
    .catch((error) => {
      console.log(error.response.data.message);
      alert(error.response.data.message);
      dispatch({
        type: "ERR_RES",
        payload: error.response.data.message,
      });
    });
};

// logout action
export const logoutAction = (email) => async (dispatch) => {
 const result = await LoginServiceCall.patchApi(LoginApiConstant.patchLogin(),email)
  console.log(result);
  console.log(result.data);
  dispatch({
    type: "LOGOUT",
    payload: result.data,
  });
};

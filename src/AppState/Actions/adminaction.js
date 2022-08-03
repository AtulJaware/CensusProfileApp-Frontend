import axios from 'axios';
export const registerAdmin = (obj)=> async dispatch=> {
    await axios
      .post("http://localhost:8081/admin/register", obj)
    .then((resp)=>{
      dispatch({
        type:"REGISTER_ADMIN",
        payload:resp.data
      })
      alert("successfully registered")
    })
    .catch((err)=>{
      dispatch({
        type:"REGISTER_ADMIN_ERR",
        payload:err.response
      })
      alert("registeration failed")
    }); 
  };

  export const getAdmin = (id)=> async dispatch=> {
    await axios
      .get("http://localhost:8081/admin/"+id)
    .then((resp)=>{
      dispatch({
        type:"GET_ADMIN",
        payload:resp.data
      })
    })
    .catch((err)=>{
      dispatch({
        type:"GET_ADMIN_ERR",
        payload:err.response
      })
    });  
  };

  export const updateAdmin = (obj)=> async dispatch=> {
    await axios
      .put("http://localhost:8081/admin/update/"+obj.adminId,obj)
    .then((resp)=>{
      dispatch({
        type:"UPDATE_ADMIN",
        payload:resp.data
      })
    })
    .catch((err)=>{
      dispatch({
        type:"UPDATE_ADMIN_ERR",
        payload:err.response
      })
    });  
  };

  export const deleteAdmin = (id)=> async dispatch=> {
    await axios
      .delete("http://localhost:8081/admin/delete/"+id)
    .then((resp)=>{
      dispatch({
        type:"DELETE_ADMIN",
        payload:resp.data
      })
      dispatch({
        type:"RESET",
        payload:""
      })
    })
    .catch((err)=>{
      dispatch({
        type:"DELETE_ADMIN_ERR",
        payload:err.response
      })
    });  
  };


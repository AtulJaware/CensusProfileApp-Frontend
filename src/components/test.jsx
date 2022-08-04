import React, { useEffect, useState } from "react";
import memberService from "../Services/restService/memberService";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
//import Visibility from "@mui/icons-material/Visibility";
//import VisibilityOff from "@mui/icons-material/VisibilityOff";
import InputLabel from "@mui/material/InputLabel";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Input from "@mui/material/Input";
const ariaLabel = { "aria-label": "description" };

const Test = () => {
  const [members, setMembers] = useState([]);
  useEffect(() => {
    memberService
      .getAllMembers()
      .then((res) => setMembers(res.data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              News
            </Typography>
            <Button color="inherit">Login</Button>
          </Toolbar>
        </AppBar>
      </Box>
      <table>
        <tbody>
          {members.map((meml) => (
            <tr>
              <td>{meml.memId}</td>
              <td>{meml.firstName}</td>
              <td>{meml.lastName}</td>
              <td>{meml.dob}</td>
              <td>{meml.gender}</td>
              <td>{meml.relationship}</td>
              <td>{meml.qualification}</td>
              <td>{meml.marital_status}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <Button variant="contained">TestButton</Button>
      <Button variant="outlined">OutlinedButton</Button>
      <form>
        <Input defaultValue="Enter Username" inputProps={ariaLabel} />
        <FormControl sx={{ m: 1, width: "25ch" }} variant="standard">
          <InputLabel htmlFor="standard-adornment-password">
            Password
          </InputLabel>
          <Input
            id="standard-adornment-password"
            type="password"
            endAdornment={
              <InputAdornment position="end">
                <IconButton aria-label="toggle password visibility"></IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
      </form>
    </div>
  );
};

export default Test;

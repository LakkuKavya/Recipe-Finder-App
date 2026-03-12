import React, { useState } from "react";
import "./Login.css";
import Dashboard from "./Dashboard";
import bg from "./loginbg.png";

const Login = () => {

  const [user,setUser] = useState("");
  const [pass,setPass] = useState("");
  const [isLogged,setIsLogged] = useState(false);

  const handleLogin = (e) => {

    e.preventDefault();

    /* Admin Login */
    if(user === "admin" && pass === "1234"){
      setIsLogged(true);
      return;
    }

    /* Email Login */
    const emailPattern =
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(emailPattern.test(user) && pass.length >= 4){
      setIsLogged(true);
      return;
    }

    alert("Invalid Username or Password");

  };

  if(isLogged) return <Dashboard/>;

  return (

<div
className="login-container"
style={{
backgroundImage:`url(${bg})`,
backgroundSize:"cover",
backgroundPosition:"center",
height:"100vh"
}}
>

<form
className="login-box"
onSubmit={handleLogin}
>

<h2>Recipe Finder Login</h2>

<input
type="text"
placeholder="Username or Email"
value={user}
onChange={(e)=>setUser(e.target.value)}
required
/>

<input
type="password"
placeholder="Password"
value={pass}
onChange={(e)=>setPass(e.target.value)}
required
/>

<button type="submit">
Login
</button>

<p className="hint">

Default Login:<br/>

<b>admin / 1234</b>

<br/><br/>

Or use any Email + Password

</p>

</form>

</div>

  );

};

export default Login;
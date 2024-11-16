import React, { useRef, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
  const fnameRef = useRef("");
  const lnameRef = useRef("");
  const mailRef = useRef("");
  const passRef = useRef("");
  const conpassRef = useRef("");
  const navigate = useNavigate();

  const [mes, setMes] = useState("");
  const [err, setErr] = useState();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setErr("");
    setMes("");
    setLoading(true);

    if (passRef.current.value !== conpassRef.current.value) {
      return setErr("Password not match");
    }

    const user = {
      firstname: fnameRef.current.value,
      lastname: lnameRef.current.value,
      mail: mailRef.current.value,
      password: passRef.current.value,
    };

    const singup = async () => {
      try {
        const res = await axios.post(
          `https://auth-demo-backend.onrender.com/users/`,
          user
        );
        if (res.status === 201) {
          setMes("Account created succesfully, redirecting to login page...");
          navigate("/login");
        }
      } catch (err) {
        if (err.response) {
          setErr(err.response.data.message);
        } else {
          setErr("An Error occured");
          console.log(err.message);
        }
      }
    };

    singup();
  };

  return (
    <div className="signup">
      <h1>SIGNUP</h1>
      <form action="#" onSubmit={handleSubmit}>
        <input type="text" required ref={fnameRef} placeholder="First Name" />
        <input type="text" ref={lnameRef} required placeholder="Last Name" />
        <input type="email" ref={mailRef} required placeholder="E-mail" />
        <input type="password" ref={passRef} required placeholder="Password" />
        <input
          type="password"
          ref={conpassRef}
          placeholder="Confirm Password"
        />
        <input disabled={loading} type="submit" value="SIGNUP" />
      </form>
      <div className="belowlink">
        Aready having an account, <Link to={"/login"}>Login</Link>
      </div>
      <div className="err">{err ? err : ""}</div>
      <div className="mes">{mes ? mes : ""}</div>
    </div>
  );
};

export default Signup;

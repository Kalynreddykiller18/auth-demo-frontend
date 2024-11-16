import axios from "axios";
import React, { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
const backendURI = import.meta.env.VITE_BACKEND_URI;

const Login = ({ setLogged, setUser }) => {
  const mailRef = useRef();
  const passRef = useRef();

  const [mes, setMes] = useState("");
  const [err, setErr] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      setLoading(true);
      setErr("");
      setMes("");
      const credentials = {
        mail: mailRef.current.value,
        password: passRef.current.value,
      };

      const data = await axios.post(
        `https://auth-demo-backend.onrender.com/users/login`,
        credentials
      );

      if (data.status === 200) {
        setLogged(true);
        setUser(data.data.user);
        setMes("Logging In...");
        navigate("/");
      }
    } catch (err) {
      if (err.response) {
        setErr(err.response.data.message);
      } else {
        setErr("An Error occured");
        console.log(err.message);
      }
    }

    setLoading(false);
  };

  return (
    <div className="login">
      <h2>LOGIN</h2>
      <form action="#" onSubmit={handleSubmit}>
        <input
          type="text"
          name="mail"
          ref={mailRef}
          id="mail"
          placeholder="E-mail"
          required
        />
        <input
          type="password"
          name="password"
          ref={passRef}
          id="password"
          placeholder="Password"
          required
        />
        <input disabled={loading} type="submit" value="LOGIN" />
      </form>
      <div className="belowlink">
        <Link to="/forgotpassword">Forgot password?</Link>
      </div>
      <div className="belowlink">
        Don't have an account, <Link to="/signup">Signup</Link>
      </div>
      <div className="mes">{mes ? mes : ""}</div>
      <div className="err">{err ? err : ""}</div>
    </div>
  );
};

export default Login;

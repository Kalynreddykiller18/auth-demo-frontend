import axios from "axios";
import React, { useState, useRef } from "react";

const ForgotPassword = () => {
  const mailRef = useRef();
  const [mes, setMes] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      setLoading(true);
      setMes("");
      const res = await axios.post(
        `https://auth-demo-backend.onrender.com/users/forgotpassword`,
        { mail: mailRef.current.value }
      );

      if (res.status === 200) {
        setMes("Password reset mail sent, please check");
      }
    } catch (err) {
      if (err.response) {
        setMes(err.response.data.message);
      } else {
        setMes("An Error occured");
      }
      console.log(err.message);
    }
  };

  return (
    <div>
      <h1> Forgot Password</h1>
      <form action="#" onSubmit={handleSubmit}>
        <input
          type="email"
          ref={mailRef}
          name="email"
          placeholder="Enter your E-mail"
          required
        />
        <input disabled={loading} type="submit" value="SEND MAIL" />
      </form>
      {mes ? mes : ""}
    </div>
  );
};

export default ForgotPassword;

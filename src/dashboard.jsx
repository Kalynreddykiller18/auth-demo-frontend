import React from "react";

const Dashboard = ({ user }) => {
  return (
    <div className="dashboard">
      <h1> Dashboard, Welcome {user?.firstname}</h1>
      <h4>This is an Authentication Project Made By Bejjanki Kalyan Reddy.</h4>
    </div>
  );
};

export default Dashboard;

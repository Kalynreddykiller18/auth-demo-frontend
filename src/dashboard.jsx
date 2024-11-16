import React from "react";

const Dashboard = ({ user }) => {
  return (
    <div className="dashboard">
      <h1> Dashboard, Welcome {user?.firstname}</h1>
    </div>
  );
};

export default Dashboard;

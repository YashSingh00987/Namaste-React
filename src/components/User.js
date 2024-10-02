import React from "react";

const User = (props) => {
  const { name } = props;
  return (
    <div className="user-card m-4 p-5 bg-slate-100">
      <h2>Name: {name}</h2>
      <h3>Location: Varanasi</h3>
      <h4>Conatct: @YashSingh00987</h4>
    </div>
  );
};

export default User;

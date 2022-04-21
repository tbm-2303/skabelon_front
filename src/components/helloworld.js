import React from "react";

const HelloWorld= ({ name, role }) => {
  return (
    <div className="borderNoTop">
      <h2>Welcome {name} !</h2>
      <h3>Your role on this site is {role}</h3>
    </div>
  );
};

export default HelloWorld;
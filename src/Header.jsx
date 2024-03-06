import React from "react";

const Header = ({ title, name }) => {
  return (
    <div className="app">
      <h1>{title}</h1>
      <h2>{name}</h2>
    </div>
  );
};

export default Header;

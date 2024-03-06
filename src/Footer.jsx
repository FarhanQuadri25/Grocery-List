import React from "react";

const Footer = () => {
  const today = new Date();
  return (
    <div>
      <h3>Copyright &copy; {today.getFullYear()}</h3>
    </div>
  );
};

export default Footer;

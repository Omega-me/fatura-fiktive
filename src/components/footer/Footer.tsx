import React from 'react';

const Footer = () => {
  return (
    <div className="flex justify-center items-center m-10">
      <small>
        Copyright &copy;{new Date().getFullYear()} {''} <b> Fatura fiktive</b>
      </small>
    </div>
  );
};

export default Footer;

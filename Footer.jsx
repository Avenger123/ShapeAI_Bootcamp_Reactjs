import React from "react";

function Footer() {
  var currtYear = new Date().getFullYear();
  return (
    <footer>
      <p>copyright @ {currtYear} </p>
    </footer>
  );
}

export default Footer;

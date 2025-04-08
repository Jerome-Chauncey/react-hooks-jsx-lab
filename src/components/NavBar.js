import React from "react";

const element = (
  <div>
      <a href="#home">Home</a>
      <a href="#about">About</a>
  </div>
)
function NavBar() {
  // update the JSX being returned!
  return (
    <nav>{element}</nav>
    

  )
}

export default NavBar;

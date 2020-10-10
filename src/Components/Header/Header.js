import React, { Fragment } from "react";

function Header() {
  return (
    <Fragment>
      <header>
        <div className="logo">
          <h1><b>MY BLOG</b></h1>
          <p>Welcome to the blog of <span className='tag'>unknown</span></p>
        </div>
      </header>
    </Fragment>
  );
}

export default Header;

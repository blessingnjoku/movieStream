import React from "react";

import "./Nav.css";

const NavBar = () => {
  // const [show, handleShow] = useState(false);
  // useEffect(() => {
  //   window.addEventListener("scroll", () => {
  //     if (window.scrollY > 100) {
  //       handleShow(true);
  //     } else handleShow(false);
  //   });
  //   return () => {
  //     window.removeEventListener("scroll");
  //   };
  // }, []);

  return (
    <div className="nav">
      <h2 class="page_logo">logo</h2>
      {/* <img
        class="page_logo"
        src="https://www.pngfind.com/pngs/m/507-5073861_fame-transparent-background-fame-movie-logo-hd-png.png"
        alt="logo"
      /> */}
      <img
        class="avatar_logo"
        src="https://pbs.twimg.com/profile/124011999041155/"
        alt="avatar logo"
      />
    </div>
  );
};

export default NavBar;

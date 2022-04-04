import Image from "next/image";

const Navbar = () => {
  const links = [
    { id: 1, name: "Projects", element: "container-project" },
    { id: 2, name: "Couse Experience", element: "container-experience" },
    { id: 3, name: "About us", element: "container-product-factory" },
    { id: 4, name: "Request", element: "container-request" },
  ];

  const toggleMenu = () => {
    var menuClassList = document.querySelector(".navbar").classList;
    menuClassList.value.includes("fullheight")
      ? menuClassList.remove("fullheight")
      : menuClassList.add("fullheight");
  };

  const goToElement = (elementId) => {
    if (elementId) document.querySelector(`.${elementId}`).scrollIntoView();
  };

  return (
    <header className="main-header">
      <nav className="container navbar">
        <ul className="navbar-menu">
          <li>
            <Image src="/white_logo.png" alt="me" width="122" height="50" />
          </li>
          {links.map((link) => {
            return (
              <li>
                <a
                  key={link.id}
                  onClick={(e) => {
                    goToElement(link.element);
                  }}
                >
                  {link.name}
                </a>
              </li>
            );
          })}
        </ul>
        <ul id="menu-toggle" onClick={toggleMenu}>
          ☰
        </ul>
        <ul id="menu-register">
          <button className="register-button">Register</button>
        </ul>
      </nav>
    </header>
  );
};
export default Navbar;

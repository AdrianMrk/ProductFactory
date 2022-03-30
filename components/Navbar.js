import Image from "next/image";

const Navbar = () => {
  const links = [
    "Projects",
    "Partners",
    "FAQ",
    "Masters",
    "Classes",
    "Couse Experience",
    "About us",
  ];

  return (
    <header>
      <nav className="navbar">
        <ul className="navbar-ul">
          <li>
            <Image src="/white_logo.png" alt="me" width="122" height="50" />
          </li>
          {links.map((link) => {
            return (
              <li>
                <a>{link}</a>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
};
export default Navbar;

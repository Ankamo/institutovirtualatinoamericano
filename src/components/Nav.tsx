const Nav = () => {
  return (
    <nav style={{ backgroundColor: "#333", padding: "1rem" }}>
      <ul style={{ display: "flex", listStyle: "none", margin: 0, padding: 0 }}>
        <li style={{ marginRight: "1rem" }}>
          <a href="#section1" style={{ color: "#fff", textDecoration: "none" }}>
            Inic
          </a>
        </li>
        <li style={{ marginRight: "1rem" }}>
          <a href="#section2" style={{ color: "#fff", textDecoration: "none" }}>
            Sobre Nosotros
          </a>
        </li>
        <li>
          <a href="#section3" style={{ color: "#fff", textDecoration: "none" }}>
            Contacto
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
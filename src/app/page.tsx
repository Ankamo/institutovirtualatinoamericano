import { useState } from "react";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <header>
        <nav className="nav">
          <div className="nav-container">
            {/* Nav Brand */}
            <a href="#" className="nav-logo">
              Mi Logo
            </a>

            {/* Hamburger Button */}
            <button className="hamburger" onClick={toggleMenu}>
              &#9776;
            </button>

            {/* Menu Items */}
            <ul className={`nav-menu ${menuOpen ? "open" : ""}`}>
              <li className="nav-item">
                <a href="#section1" className="nav-link">
                  Sección 1
                </a>
              </li>
              <li className="nav-item">
                <a href="#section2" className="nav-link">
                  Sección 2
                </a>
              </li>
              <li className="nav-item">
                <a href="#section3" className="nav-link">
                  Sección 3
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </header>

      <main>
        {/* Hero Section */}
        <section id="section1">
          <h1>Bienvenido a la página principal</h1>
        </section>
      </main>

      <style jsx>{`
        .nav {
          background-color: #333;
          color: #fff;
          padding: 1rem;
        }
        .nav-container {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .hamburger {
          font-size: 1.5rem;
          background: none;
          border: none;
          color: #fff;
          cursor: pointer;
        }
        .nav-menu {
          list-style: none;
          display: none;
        }
        .nav-menu.open {
          display: block;
        }
        .nav-menu .nav-item {
          margin: 0.5rem 0;
        }
        .nav-link {
          color: #fff;
          text-decoration: none;
        }
      `}</style>
    </>
  );
}
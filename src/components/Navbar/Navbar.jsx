import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const menuItems = [
  {
    title: "League",
    links: [
      { name: "Fixtures", to: "/fixtures" },
      { name: "Results", href: "#results" },
      { name: "Tables", to: "/tables" },
      { name: "Rules", to: "/rules" },
    ],
  },
  {
    title: "Players",
    links: [
      { name: "Player Rankings", href: "#rankings" },
      { name: "Statistics", href: "#statistics" },
      { name: "Hall of Fame", href: "#halloffame" },
    ],
  },
  {
    title: "Statistics",
    links: [
      { name: "180 Leaders", href: "#180s" },
      { name: "Highest Averages", href: "#averages" },
      { name: "Highest Checkouts", href: "#checkouts" },
      { name: "Form Guide", href: "#form" },
    ],
  },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileSection, setMobileSection] = useState(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("menu-open", mobileOpen);
    return () => document.body.classList.remove("menu-open");
  }, [mobileOpen]);

  const closeMobileMenu = () => {
    setMobileOpen(false);
    setActiveDropdown(null);
    setMobileSection(null);
  };

  const toggleDropdown = (title) =>
    setActiveDropdown((prev) => (prev === title ? null : title));

  return (
    <>
      <header className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}>
        <div className="navbar__container">
          <Link to="/" className="navbar__logo" onClick={closeMobileMenu}>
            <div className="navbar__logo-icon">🎯</div>
            <div className="navbar__logo-text">
              <span className="navbar__title">PDL</span>
              <span className="navbar__subtitle">Premier League Darts</span>
            </div>
          </Link>

          <nav className="navbar__desktop">
            <Link to="/" className="nav-link">
              Home
            </Link>

            {menuItems.map((item) => (
              <div
                key={item.title}
                className="dropdown"
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button
                  type="button"
                  className="dropdown__button"
                  onMouseEnter={() => setActiveDropdown(item.title)}
                  onClick={() => toggleDropdown(item.title)}
                >
                  {item.title}
                  <span
                    className={`dropdown__arrow ${activeDropdown === item.title ? "rotate" : ""}`}
                  >
                    ▼
                  </span>
                </button>

                <div
                  className={`dropdown__menu ${activeDropdown === item.title ? "show" : ""}`}
                >
                  <div className="dropdown__menu-panel">
                    {item.links.map((link) =>
                      link.to ? (
                        <Link
                          key={link.name}
                          to={link.to}
                          className="dropdown__item"
                          onClick={() => setActiveDropdown(null)}
                        >
                          {link.name}
                        </Link>
                      ) : (
                        <a
                          key={link.name}
                          href={link.href}
                          className="dropdown__item"
                        >
                          {link.name}
                        </a>
                      ),
                    )}
                  </div>
                </div>
              </div>
            ))}
          </nav>

          <div className="navbar__actions">
            <Link to="/dashboard" className="dashboard-btn">
              Player Hub
            </Link>
          </div>

          <button
            type="button"
            className={`hamburger ${mobileOpen ? "open" : ""}`}
            onClick={() => setMobileOpen((o) => !o)}
            aria-label="Toggle navigation"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </header>

      <div className={`mobile-menu ${mobileOpen ? "show" : ""}`}>
        <Link
          to="/dashboard"
          className="dashboard-btn mobile-dashboard"
          onClick={closeMobileMenu}
        >
          🎯 Player Hub
        </Link>

        <Link to="/" className="mobile-home" onClick={closeMobileMenu}>
          Home
        </Link>

        {menuItems.map((section) => (
          <div key={section.title} className="mobile-section">
            <button
              className="mobile-section-title"
              onClick={() =>
                setMobileSection((prev) =>
                  prev === section.title ? null : section.title,
                )
              }
            >
              <span>{section.title}</span>
              <span>{mobileSection === section.title ? "−" : "+"}</span>
            </button>

            <div
              className={`mobile-links ${mobileSection === section.title ? "show" : ""}`}
            >
              {section.links.map((link) =>
                link.to ? (
                  <Link key={link.name} to={link.to} onClick={closeMobileMenu}>
                    {link.name}
                  </Link>
                ) : (
                  <a key={link.name} href={link.href} onClick={closeMobileMenu}>
                    {link.name}
                  </a>
                ),
              )}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

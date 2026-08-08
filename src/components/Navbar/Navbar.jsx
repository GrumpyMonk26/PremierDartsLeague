import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

import PDLLogo from "../../assets/images/PDL_Logo.png";

const menuItems = [
  {
    title: "League",
    links: [
      { name: "Fixtures", to: "/fixtures" },
      { name: "Tables", to: "/tables" },
      { name: "Rules", to: "/rules" },
    ],
  },
  {
    title: "Statistics",
    links: [{ name: "Statistics", to: "/statistics" }],
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

  const toggleDropdown = (title) => {
    setActiveDropdown((prev) => (prev === title ? null : title));
  };

  return (
    <>
      <header className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}>
        <div className="navbar__inner">
          {/* Logo / Brand */}

          <Link to="/" className="navbar__brand">
            <img
              src={PDLLogo}
              alt="Premier League Darts"
              className="navbar__logo"
            />
          </Link>

          {/* Desktop Navigation */}

          <nav className="navbar__desktop">
            <Link to="/" className="nav-link">
              Home
            </Link>

            <div
              className="dropdown"
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button
                type="button"
                className="dropdown__button"
                onMouseEnter={() => setActiveDropdown("League")}
                onClick={() => toggleDropdown("League")}
              >
                League
                <span
                  className={`dropdown__arrow ${
                    activeDropdown === "League" ? "rotate" : ""
                  }`}
                >
                  ▼
                </span>
              </button>

              <div
                className={`dropdown__menu ${
                  activeDropdown === "League" ? "show" : ""
                }`}
              >
                <div className="dropdown__menu-panel">
                  <Link to="/fixtures" className="dropdown__item">
                    Fixtures
                  </Link>

                  <Link to="/tables" className="dropdown__item">
                    Tables
                  </Link>

                  <Link to="/rules" className="dropdown__item">
                    Rules
                  </Link>
                </div>
              </div>
            </div>

            <Link to="/statistics" className="nav-link">
              Statistics
            </Link>
          </nav>

          {/* Desktop Player Hub */}

          <div className="navbar__actions">
            <Link to="/dashboard" className="dashboard-btn">
              Player Hub
            </Link>
          </div>

          {/* Mobile Menu Button */}

          <button
            type="button"
            className={`hamburger ${mobileOpen ? "open" : ""}`}
            onClick={() => setMobileOpen((open) => !open)}
            aria-label="Toggle navigation"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </header>

      {/* Mobile Menu */}

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
              type="button"
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
              className={`mobile-links ${
                mobileSection === section.title ? "show" : ""
              }`}
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

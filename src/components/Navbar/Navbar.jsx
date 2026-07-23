import React, { useState, useEffect } from "react";
import "./Navbar.css";

const menuItems = [
  {
    title: "League",
    links: [
      { name: "Fixtures", href: "#fixtures" },
      { name: "Results", href: "#results" },
      { name: "Tables", href: "#tables" },
      { name: "Rules", href: "#rules" },
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
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleDropdown = (title) => {
    setActiveDropdown(activeDropdown === title ? null : title);
  };

  return (
    <header className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}>
      <div className="navbar__container">
        {/* ---------------- LOGO ---------------- */}

        <a href="/" className="navbar__logo">
          <div className="navbar__logo-icon">🎯</div>

          <div className="navbar__logo-text">
            <span className="navbar__title">PDL</span>
            <span className="navbar__subtitle">Premier League Darts</span>
          </div>
        </a>

        {/* ---------------- DESKTOP NAV ---------------- */}

        <nav className="navbar__desktop">
          <a href="/" className="nav-link active">
            Home
          </a>

          {menuItems.map((item) => (
            <div
              className="dropdown"
              key={item.title}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button
                className="dropdown__button"
                onMouseEnter={() => setActiveDropdown(item.title)}
                onClick={() => toggleDropdown(item.title)}
              >
                {item.title}

                <span
                  className={`dropdown__arrow ${
                    activeDropdown === item.title ? "rotate" : ""
                  }`}
                >
                  ▼
                </span>
              </button>

              <div
                className={`dropdown__menu ${
                  activeDropdown === item.title ? "show" : ""
                }`}
              >
                {item.links.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="dropdown__item"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </nav>

        {/* ---------------- DASHBOARD ---------------- */}

        <div className="navbar__actions">
          <a href="#dashboard" className="dashboard-btn">
            Dashboard
          </a>
        </div>

        {/* ---------------- MOBILE BUTTON ---------------- */}

        <button
          className={`hamburger ${mobileOpen ? "open" : ""}`}
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      {/* ---------------- MOBILE MENU ---------------- */}

      <div className={`mobile-menu ${mobileOpen ? "show" : ""}`}>
        <a href="/" onClick={() => setMobileOpen(false)}>
          Home
        </a>

        {menuItems.map((section) => (
          <div className="mobile-section" key={section.title}>
            <h4>{section.title}</h4>

            {section.links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </div>
        ))}

        <a
          href="#dashboard"
          className="dashboard-btn mobile-dashboard"
          onClick={() => setMobileOpen(false)}
        >
          Dashboard
        </a>
      </div>
    </header>
  );
}

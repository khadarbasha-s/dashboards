import React from 'react'

import Script from 'dangerous-html/react'

import './navigation.css'

const Navigation = (props) => {
  return (
    <div className="navigation-container1">
      <div className="navigation-container2">
        <div className="navigation-container3">
          <Script
            html={`<style>
        @keyframes navigationSlideIn {from {transform: translateY(-100%);}
to {transform: translateY(0);}}
        </style> `}
          ></Script>
        </div>
      </div>
      <div className="navigation-container4">
        <div className="navigation-container5">
          <Script
            html={`<style>
@media (prefers-reduced-motion: reduce) {
.navigation, .navigation-logo, .navigation-link, .navigation-toggle, .navigation-auth-link, .navigation-menu, .navigation-backdrop, .navigation-logo-icon::before, .navigation-logo-text::after, .navigation-link::before, .navigation-auth-link::after {
  animation: none;
  transition: none;
}
}
</style>`}
          ></Script>
        </div>
      </div>
      <div className="navigation-container6">
        <div className="navigation-container7">
          <Script
            html={`<script defer data-name="navigation">
(function(){
  const navigationToggle = document.getElementById("navigationToggle")
  const navigationMenu = document.getElementById("navigationMenu")
  const navigationBackdrop = document.getElementById("navigationBackdrop")
  const navigation = document.getElementById("navigation")

  function toggleMenu() {
    const isExpanded = navigationToggle.getAttribute("aria-expanded") === "true"

    navigationToggle.setAttribute("aria-expanded", !isExpanded)
    navigationMenu.classList.toggle("navigation-menu--active")
    navigationBackdrop.classList.toggle("navigation-backdrop--active")

    if (!isExpanded) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
  }

  function closeMenu() {
    navigationToggle.setAttribute("aria-expanded", "false")
    navigationMenu.classList.remove("navigation-menu--active")
    navigationBackdrop.classList.remove("navigation-backdrop--active")
    document.body.style.overflow = ""
  }

  navigationToggle.addEventListener("click", toggleMenu)
  navigationBackdrop.addEventListener("click", closeMenu)

  const navigationLinks = navigationMenu.querySelectorAll(".navigation-link")
  navigationLinks.forEach((link) => {
    link.addEventListener("click", () => {
      if (window.innerWidth <= 991) {
        closeMenu()
      }
    })
  })

  let lastScroll = 0
  window.addEventListener("scroll", () => {
    const currentScroll = window.pageYOffset

    if (currentScroll > 50) {
      navigation.classList.add("navigation--scrolled")
    } else {
      navigation.classList.remove("navigation--scrolled")
    }

    lastScroll = currentScroll
  })

  window.addEventListener("resize", () => {
    if (window.innerWidth > 991) {
      closeMenu()
    }
  })

  document.addEventListener("keydown", (e) => {
    if (
      e.key === "Escape" &&
      navigationToggle.getAttribute("aria-expanded") === "true"
    ) {
      closeMenu()
    }
  })
})()
</script>`}
          ></Script>
        </div>
      </div>
      <nav id="navigation" className="navigation">
        <div className="navigation-container">
          <a href="/">
            <div aria-label="LearnSphere Home" className="navigation-logo">
              <div className="navigation-logo-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"
                  ></path>
                </svg>
              </div>
              <span className="navigation-logo-text">LearnSphere</span>
            </div>
          </a>
          <button
            id="navigationToggle"
            aria-label="Toggle navigation menu"
            aria-expanded="false"
            aria-controls="navigationMenu"
            className="navigation-toggle"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="navigation-navigation-toggle-icon1 navigation-toggle-icon--menu"
            >
              <path
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 5h16M4 12h16M4 19h16"
              ></path>
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="navigation-navigation-toggle-icon2"
            >
              <path
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M18 6L6 18M6 6l12 12"
              ></path>
            </svg>
          </button>
          <div id="navigationMenu" className="navigation-menu">
            <ul className="navigation-list">
              <li className="navigation-item">
                <a href="#courses">
                  <div className="navigation-link">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      className="navigation-link-icon"
                    >
                      <path
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"
                      ></path>
                    </svg>
                    <span>Courses</span>
                  </div>
                </a>
              </li>
              <li className="navigation-item">
                <a href="#platform">
                  <div className="navigation-link">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      className="navigation-link-icon"
                    >
                      <g
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                      >
                        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M16 3.128a4 4 0 0 1 0 7.744M22 21v-2a4 4 0 0 0-3-3.87"></path>
                        <circle cx="9" cy="7" r="4"></circle>
                      </g>
                    </svg>
                    <span>Platform</span>
                  </div>
                </a>
              </li>
              <li className="navigation-item">
                <a href="#about">
                  <div className="navigation-link">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      className="navigation-link-icon"
                    >
                      <g
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                      >
                        <circle cx="12" cy="12" r="10"></circle>
                        <path d="M12 16v-4m0-4h.01"></path>
                      </g>
                    </svg>
                    <span>About</span>
                  </div>
                </a>
              </li>
              <li className="navigation-item">
                <a href="#contact">
                  <div className="navigation-link">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      className="navigation-link-icon"
                    >
                      <path
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233a14 14 0 0 0 6.392 6.384"
                      ></path>
                    </svg>
                    <span>Contact</span>
                  </div>
                </a>
              </li>
              <li className="navigation-item">
                <a href="/admin-dashboard">
                  <div className="navigation-link">
                    <span>Admin Dashboard</span>
                  </div>
                </a>
              </li>
            </ul>
            <div className="navigation-actions">
              <a href="#login">
                <div className="navigation-auth-link">
                  <span>Sign In</span>
                </div>
              </a>
              <button className="btn btn-primary">Get Started</button>
            </div>
          </div>
        </div>
        <div id="navigationBackdrop" className="navigation-backdrop"></div>
      </nav>
    </div>
  )
}

export default Navigation

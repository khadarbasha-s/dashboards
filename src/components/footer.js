import React from 'react'

import Script from 'dangerous-html/react'

import './footer.css'

const Footer = (props) => {
  return (
    <div className="footer-container1">
      <div className="footer-container2">
        <div className="footer-container3">
          <Script
            html={`<script defer data-name="footer">
(function(){
  const backToTopButton = document.getElementById("footer-back-to-top")
  const newsletterForm = document.getElementById("footer-newsletter-form")

  function handleScroll() {
    if (window.scrollY > 400) {
      backToTopButton.classList.add("footer-visible")
    } else {
      backToTopButton.classList.remove("footer-visible")
    }
  }

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  function handleNewsletterSubmit(event) {
    event.preventDefault()
    const emailInput = event.target.querySelector(".footer-newsletter-input")
    const email = emailInput.value

    if (email) {
      alert("Thank you for subscribing! You will receive updates at: " + email)
      emailInput.value = ""
    }
  }

  window.addEventListener("scroll", handleScroll)
  backToTopButton.addEventListener("click", scrollToTop)
  newsletterForm.addEventListener("submit", handleNewsletterSubmit)

  handleScroll()
})()
</script>`}
          ></Script>
        </div>
      </div>
      <footer id="footer-main" className="footer-section">
        <div className="footer-decorative-top"></div>
        <div className="footer-container">
          <div className="footer-content-grid">
            <div className="footer-brand-column">
              <div className="footer-brand-wrapper">
                <div className="footer-logo">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <g
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    >
                      <path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0zM22 10v6"></path>
                      <path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5"></path>
                    </g>
                  </svg>
                  <span className="footer-logo-text">LearnSphere</span>
                </div>
                <p className="footer-brand-tagline">
                  {' '}
                  Personalized autonomous learning for everyone, everywhere.
                  Transform education with our all-in-one platform designed by
                  Rooman Technologies.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
                <div className="footer-social-links">
                  <a href="#">
                    <div aria-label="Facebook" className="footer-social-link">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"
                        ></path>
                      </svg>
                    </div>
                  </a>
                  <a href="#">
                    <div aria-label="Twitter" className="footer-social-link">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6c2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4c-.9-4.2 4-6.6 7-3.8c1.1 0 3-1.2 3-1.2"
                        ></path>
                      </svg>
                    </div>
                  </a>
                  <a href="#">
                    <div aria-label="LinkedIn" className="footer-social-link">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                      >
                        <g
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                        >
                          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2a2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6M2 9h4v12H2z"></path>
                          <circle cx="4" cy="4" r="2"></circle>
                        </g>
                      </svg>
                    </div>
                  </a>
                  <a href="#">
                    <div aria-label="Instagram" className="footer-social-link">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                      >
                        <g
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                        >
                          <rect
                            width="20"
                            height="20"
                            x="2"
                            y="2"
                            rx="5"
                            ry="5"
                          ></rect>
                          <path d="M16 11.37A4 4 0 1 1 12.63 8A4 4 0 0 1 16 11.37m1.5-4.87h.01"></path>
                        </g>
                      </svg>
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <div className="footer-links-column">
              <h3 className="footer-column-title">Platform</h3>
              <ul className="footer-links-list">
                <li>
                  <a href="#">
                    <div className="footer-link">
                      <span>For Students</span>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <div className="footer-link">
                      <span>For Teachers</span>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <div className="footer-link">
                      <span>For Institutions</span>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <div className="footer-link">
                      <span>Course Catalog</span>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <div className="footer-link">
                      <span>Guest Preview</span>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="admin-dashboard.html">
                    <div className="footer-link">
                      <span>
                        {' '}
                        Admin Dashboard
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
            <div className="footer-links-column">
              <h3 className="footer-column-title">Features</h3>
              <ul className="footer-links-list">
                <li>
                  <a href="#">
                    <div className="footer-link">
                      <span>Interactive Voice Chat</span>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <div className="footer-link">
                      <span>Note Taking</span>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <div className="footer-link">
                      <span>Smart Reminders</span>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <div className="footer-link">
                      <span>Personalized Learning</span>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <div className="footer-link">
                      <span>Progress Tracking</span>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <div className="footer-link">
                      <span>Multi-Age Support</span>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
            <div className="footer-links-column">
              <h3 className="footer-column-title">Resources</h3>
              <ul className="footer-links-list">
                <li>
                  <a href="#">
                    <div className="footer-link">
                      <span>Documentation</span>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <div className="footer-link">
                      <span>Help Center</span>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <div className="footer-link">
                      <span>Tutorials</span>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <div className="footer-link">
                      <span>API Reference</span>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <div className="footer-link">
                      <span>Community Forum</span>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <div className="footer-link">
                      <span>Blog</span>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
            <div className="footer-contact-column">
              <h3 className="footer-column-title">Contact Us</h3>
              <ul className="footer-contact-list">
                <li className="footer-contact-item">
                  <div className="footer-contact-icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <g
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                      >
                        <path d="m22 7l-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path>
                        <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                      </g>
                    </svg>
                  </div>
                  <a href="mailto:support@learnsphere.com?subject=">
                    <div className="footer-contact-link">
                      <span>
                        {' '}
                        support@learnsphere.com
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                    </div>
                  </a>
                </li>
                <li className="footer-contact-item">
                  <div className="footer-contact-icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
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
                  </div>
                  <a href="tel:+1234567890">
                    <div className="footer-contact-link">
                      <span>
                        {' '}
                        +1 (234) 567-890
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                    </div>
                  </a>
                </li>
                <li className="footer-contact-item">
                  <div className="footer-contact-icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0zm.894.211v15M9 3.236v15"
                      ></path>
                    </svg>
                  </div>
                  <span className="footer-contact-text">
                    {' '}
                    123 Learning Ave, Tech City, TC 12345
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </li>
              </ul>
              <div className="footer-trust-badge">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"
                  ></path>
                </svg>
                <span>Certified &amp; Trusted Platform</span>
              </div>
            </div>
          </div>
          <div className="footer-newsletter-section">
            <div className="footer-newsletter-content">
              <div className="footer-newsletter-text">
                <h3 className="footer-newsletter-title">Stay Updated</h3>
                <p className="footer-newsletter-description">
                  {' '}
                  Subscribe to get the latest updates, educational resources,
                  and platform news.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
              </div>
              <form
                id="footer-newsletter-form"
                className="footer-newsletter-form"
              >
                <div className="footer-newsletter-input-wrapper">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    aria-label="Email address"
                    required="true"
                    className="footer-newsletter-input"
                  />
                  <button
                    type="submit"
                    className="footer-newsletter-button btn btn-primary"
                  >
                    <span>Subscribe</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="m5 12l7-7l7 7m-7 7V5"
                      ></path>
                    </svg>
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="footer-bottom">
            <div className="footer-bottom-content">
              <div className="footer-bottom-left">
                <p className="footer-copyright">
                  {' '}
                  &amp;copy; 2025 LearnSphere by Rooman Technologies. All rights
                  reserved.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
              </div>
              <div className="footer-bottom-right">
                <a href="#">
                  <div className="footer-legal-link">
                    <span>Privacy Policy</span>
                  </div>
                </a>
                <span className="footer-separator">|</span>
                <a href="#">
                  <div className="footer-legal-link">
                    <span>Terms of Service</span>
                  </div>
                </a>
                <span className="footer-separator">|</span>
                <a href="#">
                  <div className="footer-legal-link">
                    <span>Cookie Policy</span>
                  </div>
                </a>
                <span className="footer-separator">|</span>
                <a href="#">
                  <div className="footer-legal-link">
                    <span>Accessibility</span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
        <button
          id="footer-back-to-top"
          aria-label="Back to top"
          className="footer-back-to-top"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m5 12l7-7l7 7m-7 7V5"
            ></path>
          </svg>
        </button>
      </footer>
    </div>
  )
}

export default Footer

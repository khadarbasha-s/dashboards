import React from 'react'

import Script from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import Navigation from '../components/navigation'
import Footer from '../components/footer'
import './admin-dashboard.css'

const AdminDashboard = (props) => {
  return (
    <div className="admin-dashboard-container1">
      <Helmet>
        <title>Admin-Dashboard - Humming Back Buffalo</title>
        <meta
          property="og:title"
          content="Admin-Dashboard - Humming Back Buffalo"
        />
      </Helmet>
      <Navigation></Navigation>
      <div className="admin-dashboard-container2">
        <div className="admin-dashboard-container3">
          <Script
            html={`<style>
        @keyframes fadeInUp {from {opacity: 0;
transform: translateY(12px);}
to {opacity: 1;
transform: translateY(0);}}@keyframes fadeInSlide {from {opacity: 0;
transform: translateY(6px);}
to {opacity: 1;
transform: translateY(0);}}
        </style> `}
          ></Script>
        </div>
      </div>
      <div className="admin-dashboard-container4">
        <div className="admin-dashboard-container5">
          <Script
            html={`<script defer data-name="admin-dashboard">
(function(){
  // Tab Management for User & Roles Management Section
  const managementTabs = document.querySelectorAll(
    "#user-roles-management .tab-btn"
  )
  const managementPanels = document.querySelectorAll(
    "#user-roles-management .tab-panel"
  )

  managementTabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      const targetId = tab.getAttribute("aria-controls")

      managementTabs.forEach((t) => {
        t.classList.remove("active")
        t.setAttribute("aria-selected", "false")
      })

      managementPanels.forEach((p) => {
        p.setAttribute("hidden", "")
      })

      tab.classList.add("active")
      tab.setAttribute("aria-selected", "true")

      const targetPanel = document.getElementById(targetId)
      if (targetPanel) {
        targetPanel.removeAttribute("hidden")
      }
    })
  })

  // Tab Management for Data Access & Auditing Section
  const auditTabs = document.querySelectorAll("#data-auditing .audit-tab")
  const auditPanels = document.querySelectorAll("#data-auditing .audit-feed")

  auditTabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      auditTabs.forEach((t) => {
        t.classList.remove("active")
        t.setAttribute("aria-selected", "false")
      })

      tab.classList.add("active")
      tab.setAttribute("aria-selected", "true")
    })
  })

  // Form Submit Handler (prevent default for demo)
  const signinForm = document.querySelector(".signin-form")
  if (signinForm) {
    signinForm.addEventListener("submit", (e) => {
      e.preventDefault()
      console.log("Admin sign-in attempted")
    })
  }

  // Animate KPI bars on scroll
  const observerOptions = {
    threshold: 0.2,
    rootMargin: "0px",
  }

  const kpiObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1"
        entry.target.style.transform = "translateY(0)"
      }
    })
  }, observerOptions)

  document
    .querySelectorAll(".kpi-item, .pulse-stat, .summary-card")
    .forEach((el) => {
      el.style.opacity = "0"
      el.style.transform = "translateY(6px)"
      el.style.transition = "opacity 0.6s ease, transform 0.6s ease"
      kpiObserver.observe(el)
    })

  // Reduced motion support
  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches
  if (prefersReducedMotion) {
    document.querySelectorAll('[style*="transition"]').forEach((el) => {
      el.style.transition = "none"
    })
  }
})()
</script>`}
          ></Script>
        </div>
      </div>
      <main id="admin-dashboard-main">
        <section id="hero-section" className="hero-admin-gateway">
          <div className="hero-container">
            <div className="hero-auth">
              <div className="brand-identity">
                <div className="brand-mark"></div>
                <h1 className="hero-title">Welcome, Administrator</h1>
              </div>
              <p className="hero-subtitle">
                {' '}
                Secure access to your institution&apos;s learning core. Sign in
                to monitor system health, approve enrollments, and access
                organization-wide analytics.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </p>
              <form aria-label="Admin sign in" className="signin-form">
                <div className="form-group">
                  <label htmlFor="admin-email">Email Address</label>
                  <div className="input-wrapper">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      className="input-icon"
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
                    <input
                      type="email"
                      id="admin-email"
                      name="email"
                      aria-required="true"
                      placeholder="admin@learnsphere.com"
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="admin-password">Password</label>
                  <div className="input-wrapper">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      className="input-icon"
                    >
                      <g
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                      >
                        <rect
                          width="18"
                          height="11"
                          x="3"
                          y="11"
                          rx="2"
                          ry="2"
                        ></rect>
                        <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                      </g>
                    </svg>
                    <input
                      type="password"
                      id="admin-password"
                      name="password"
                      aria-required="true"
                      placeholder="••••••••"
                    />
                  </div>
                </div>
                <button
                  type="submit"
                  className="signin-btn btn btn-primary btn-lg"
                >
                  {' '}
                  Sign In Securely
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </button>
                <div className="quick-links">
                  <a href="#">
                    <div className="link-secondary">
                      <span>Forgot password?</span>
                    </div>
                  </a>
                  <span className="divider">•</span>
                  <a href="#">
                    <div className="link-secondary">
                      <span>Contact support</span>
                    </div>
                  </a>
                </div>
              </form>
              <div className="auth-footer">
                <p className="legal-text">
                  {' '}
                  Protected by enterprise-grade encryption. By signing in, you
                  agree to LearnSphere&apos;s admin policies.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
              </div>
            </div>
            <div className="hero-metrics">
              <div className="metrics-header">
                <h2 className="metrics-title">System Overview</h2>
                <span className="status-badge status-active">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M20 6L9 17l-5-5"
                    ></path>
                  </svg>
                  <span>
                    {' '}
                    All Systems Operational
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </span>
              </div>
              <div className="summary-cards">
                <div className="summary-card">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
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
                  <div className="card-content">
                    <span className="card-value">2,847</span>
                    <span className="card-label">Active Users</span>
                  </div>
                </div>
                <div className="summary-card">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
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
                  <div className="card-content">
                    <span className="card-value">156</span>
                    <span className="card-label">Active Courses</span>
                  </div>
                </div>
              </div>
              <nav aria-label="Admin navigation" className="admin-nav">
                <h3 className="nav-title">Quick Access</h3>
                <ul className="nav-list">
                  <li>
                    <a href="#dashboard">
                      <div className="nav-link">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="18"
                          height="18"
                          viewBox="0 0 24 24"
                        >
                          <path
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"
                          ></path>
                        </svg>
                        <span>
                          {' '}
                          System Dashboard
                          <span
                            dangerouslySetInnerHTML={{
                              __html: ' ',
                            }}
                          />
                        </span>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="#users">
                      <div className="nav-link">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="18"
                          height="18"
                          viewBox="0 0 24 24"
                        >
                          <g
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                          >
                            <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                            <circle cx="12" cy="7" r="4"></circle>
                          </g>
                        </svg>
                        <span>
                          {' '}
                          Teachers &amp; Students
                          <span
                            dangerouslySetInnerHTML={{
                              __html: ' ',
                            }}
                          />
                        </span>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="#courses">
                      <div className="nav-link">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="18"
                          height="18"
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
                        <span>
                          {' '}
                          Course Management
                          <span
                            dangerouslySetInnerHTML={{
                              __html: ' ',
                            }}
                          />
                        </span>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="#data">
                      <div className="nav-link">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="18"
                          height="18"
                          viewBox="0 0 24 24"
                        >
                          <g
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                          >
                            <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
                            <path d="M3 5v14a9 3 0 0 0 18 0V5"></path>
                            <path d="M3 12a9 3 0 0 0 18 0"></path>
                          </g>
                        </svg>
                        <span>
                          {' '}
                          Data Audit
                          <span
                            dangerouslySetInnerHTML={{
                              __html: ' ',
                            }}
                          />
                        </span>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="#notifications">
                      <div className="nav-link">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="18"
                          height="18"
                          viewBox="0 0 24 24"
                        >
                          <path
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M10.268 21a2 2 0 0 0 3.464 0m-10.47-5.674A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"
                          ></path>
                        </svg>
                        <span>
                          {' '}
                          Notifications
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
              </nav>
              <div className="support-cta">
                <p className="support-text">Need immediate support?</p>
                <button className="btn btn-outline btn-sm">
                  {' '}
                  Contact Rooman Technologies
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </button>
              </div>
            </div>
          </div>
        </section>
        <section id="dashboard-overview" className="dashboard-section">
          <div className="dashboard">
            <div className="snapshot">
              <h2 className="section-title">System Snapshot</h2>
              <p className="section-subtitle">Real-time health at a glance</p>
              <div className="snapshot-metrics">
                <div className="metric-large">
                  <span className="metric-value">99.8%</span>
                  <span className="metric-label">Platform Uptime</span>
                </div>
                <div className="metric-grid">
                  <div className="metric-item">
                    <span className="metric-number">1,245</span>
                    <span className="metric-text">Active Sessions</span>
                  </div>
                  <div className="metric-item">
                    <span className="metric-number">12m</span>
                    <span className="metric-text">Last Sync</span>
                  </div>
                  <div className="metric-item">
                    <span className="metric-number">68%</span>
                    <span className="metric-text">Storage Used</span>
                  </div>
                  <div className="metric-item">
                    <span className="metric-number">847</span>
                    <span className="metric-text">Daily Logins</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="kpis">
              <h3 className="panel-title">Key Performance</h3>
              <div className="kpi-list">
                <div className="kpi-item">
                  <div className="kpi-header">
                    <span className="kpi-label">Course Completion</span>
                    <span className="kpi-value">84%</span>
                  </div>
                  <div className="kpi-bar">
                    <div className="admin-dashboard-kpi-fill1 kpi-fill"></div>
                  </div>
                </div>
                <div className="kpi-item">
                  <div className="kpi-header">
                    <span className="kpi-label">Engagement Rate</span>
                    <span className="kpi-value">92%</span>
                  </div>
                  <div className="kpi-bar">
                    <div className="admin-dashboard-kpi-fill2 kpi-fill"></div>
                  </div>
                </div>
                <div className="kpi-item">
                  <div className="kpi-header">
                    <span className="kpi-label">Assessment Pass</span>
                    <span className="kpi-value">78%</span>
                  </div>
                  <div className="kpi-bar">
                    <div className="admin-dashboard-kpi-fill3 kpi-fill"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="people-pulse">
              <h3 className="panel-title">People Pulse</h3>
              <div className="pulse-stats">
                <div className="pulse-stat">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                  >
                    <g
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    >
                      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                      <circle cx="12" cy="7" r="4"></circle>
                    </g>
                  </svg>
                  <div className="stat-content">
                    <span className="stat-number">142</span>
                    <span className="stat-label">Active Teachers</span>
                  </div>
                </div>
                <div className="pulse-stat">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
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
                  <div className="stat-content">
                    <span className="stat-number">2,705</span>
                    <span className="stat-label">Enrolled Students</span>
                  </div>
                </div>
                <div className="pulse-stat alert">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 13h.01M12 6v3M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"
                    ></path>
                  </svg>
                  <div className="stat-content">
                    <span className="stat-number">8</span>
                    <span className="stat-label">Pending Approvals</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="mixed-grid">
              <div className="activity-card">
                <h3 className="panel-title">Recent Activity</h3>
                <ul className="activity-list">
                  <li className="activity-item">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M20 6L9 17l-5-5"
                      ></path>
                    </svg>
                    <div className="activity-content">
                      <span className="activity-text">
                        New teacher account created
                      </span>
                      <time
                        datetime="2025-02-10T14:30"
                        className="activity-time"
                      >
                        {' '}
                        14m ago
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </time>
                    </div>
                  </li>
                  <li className="activity-item">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
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
                    <div className="activity-content">
                      <span className="activity-text">
                        Course published: Advanced AI
                      </span>
                      <time
                        datetime="2025-02-10T13:45"
                        className="activity-time"
                      >
                        {' '}
                        1h ago
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </time>
                    </div>
                  </li>
                  <li className="activity-item">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
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
                    <div className="activity-content">
                      <span className="activity-text">
                        45 students enrolled today
                      </span>
                      <time
                        datetime="2025-02-10T12:00"
                        className="activity-time"
                      >
                        {' '}
                        3h ago
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </time>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="alerts-card">
                <h3 className="panel-title">Alerts &amp; Compliance</h3>
                <div className="alert-item priority-high">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 13h.01M12 6v3M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"
                    ></path>
                  </svg>
                  <div className="alert-content">
                    <span className="alert-text">
                      8 teacher approvals pending
                    </span>
                    <button className="btn btn-primary btn-sm">
                      Review Now
                    </button>
                  </div>
                </div>
                <div className="alert-item priority-medium">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
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
                  <div className="alert-content">
                    <span className="alert-text">
                      Data backup scheduled tonight
                    </span>
                    <button className="btn btn-outline btn-sm">Details</button>
                  </div>
                </div>
              </div>
              <div className="actions-card">
                <h3 className="panel-title">Quick Actions</h3>
                <div className="action-grid">
                  <button className="action-btn">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 12h14m-7-7v14"
                      ></path>
                    </svg>
                    <span>Add User</span>
                  </button>
                  <button className="action-btn">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M10.268 21a2 2 0 0 0 3.464 0m-10.47-5.674A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"
                      ></path>
                    </svg>
                    <span>Send Alert</span>
                  </button>
                  <button className="action-btn">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                    >
                      <g
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                      >
                        <path d="M12 15V3m9 12v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                        <path d="m7 10l5 5l5-5"></path>
                      </g>
                    </svg>
                    <span>Export Data</span>
                  </button>
                  <button className="action-btn">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                    >
                      <g
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                      >
                        <path d="M9.671 4.136a2.34 2.34 0 0 1 4.659 0a2.34 2.34 0 0 0 3.319 1.915a2.34 2.34 0 0 1 2.33 4.033a2.34 2.34 0 0 0 0 3.831a2.34 2.34 0 0 1-2.33 4.033a2.34 2.34 0 0 0-3.319 1.915a2.34 2.34 0 0 1-4.659 0a2.34 2.34 0 0 0-3.32-1.915a2.34 2.34 0 0 1-2.33-4.033a2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915"></path>
                        <circle cx="12" cy="12" r="3"></circle>
                      </g>
                    </svg>
                    <span>Settings</span>
                  </button>
                </div>
              </div>
            </div>
            <div className="utilities">
              <div className="utility-card">
                <h4 className="utility-title">Resource Access</h4>
                <ul className="utility-list">
                  <li>
                    <a href="#">
                      <div className="utility-link">
                        <span>User Management</span>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <div className="utility-link">
                        <span>Course Catalog</span>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <div className="utility-link">
                        <span>Reporting Suite</span>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <div className="utility-link">
                        <span>Integration Settings</span>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="utility-card">
                <h4 className="utility-title">Operational Notes</h4>
                <p className="utility-text">
                  {' '}
                  System maintenance window scheduled for Feb 15, 02:00-04:00
                  UTC.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
              </div>
              <div className="utility-card">
                <h4 className="utility-title">Performance</h4>
                <div className="performance-indicators">
                  <div className="indicator">
                    <span className="indicator-label">Response Time</span>
                    <span className="indicator-value good">142ms</span>
                  </div>
                  <div className="indicator">
                    <span className="indicator-label">Error Rate</span>
                    <span className="indicator-value good">0.02%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="user-roles-management" className="management-section">
          <div className="management-container">
            <div className="hero-band">
              <div className="hero-band-content">
                <h2 className="section-title">User &amp; Roles Management</h2>
                <p className="section-content">
                  {' '}
                  Centralized control for secure, compliant administration:
                  create, edit, and deactivate admin, teacher, and student
                  accounts with precision.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
                <div className="metrics-row">
                  <div className="metric-box">
                    <span className="metric-num">2,847</span>
                    <span className="metric-desc">Total Users</span>
                  </div>
                  <div className="metric-box">
                    <span className="metric-num">142</span>
                    <span className="metric-desc">Teachers</span>
                  </div>
                  <div className="metric-box">
                    <span className="metric-num">8</span>
                    <span className="metric-desc">Pending</span>
                  </div>
                </div>
              </div>
              <div className="hero-band-cta">
                <button className="btn btn-primary">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 12h14m-7-7v14"
                    ></path>
                  </svg>
                  <span>
                    {' '}
                    Add New User
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </button>
                <button className="btn btn-outline">Bulk Import CSV</button>
              </div>
            </div>
            <div className="main-area">
              <div className="user-list">
                <div className="list-header">
                  <h3 className="list-title">All Users</h3>
                  <div className="list-controls">
                    <div className="search-box">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                      >
                        <g
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                        >
                          <path d="m21 21l-4.34-4.34"></path>
                          <circle cx="11" cy="11" r="8"></circle>
                        </g>
                      </svg>
                      <input type="search" placeholder="Search users..." />
                    </div>
                    <button className="btn btn-outline btn-sm">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M2 5h20M6 12h12m-9 7h6"
                        ></path>
                      </svg>
                      <span>
                        {' '}
                        Filter
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                    </button>
                  </div>
                </div>
                <div className="user-rows">
                  <div className="user-row">
                    <div className="user-info">
                      <div className="user-avatar">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                        >
                          <g
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                          >
                            <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                            <circle cx="12" cy="7" r="4"></circle>
                          </g>
                        </svg>
                      </div>
                      <div className="user-details">
                        <span className="user-name">Dr. Sarah Chen</span>
                        <span className="user-email">
                          s.chen@learnsphere.com
                        </span>
                      </div>
                    </div>
                    <div className="user-role">
                      <span className="role-badge role-teacher">Teacher</span>
                    </div>
                    <div className="user-status">
                      <span className="status-dot active"></span>
                      <span className="status-text">Active</span>
                    </div>
                    <div className="user-actions">
                      <button aria-label="Edit user" className="btn-icon">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="18"
                          height="18"
                          viewBox="0 0 24 24"
                        >
                          <g
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                          >
                            <path d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                            <path d="M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z"></path>
                          </g>
                        </svg>
                      </button>
                    </div>
                  </div>
                  <div className="user-row">
                    <div className="user-info">
                      <div className="user-avatar">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                        >
                          <g
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                          >
                            <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                            <circle cx="12" cy="7" r="4"></circle>
                          </g>
                        </svg>
                      </div>
                      <div className="user-details">
                        <span className="user-name">Michael Rodriguez</span>
                        <span className="user-email">
                          m.rodriguez@learnsphere.com
                        </span>
                      </div>
                    </div>
                    <div className="user-role">
                      <span className="role-badge role-student">Student</span>
                    </div>
                    <div className="user-status">
                      <span className="status-dot active"></span>
                      <span className="status-text">Active</span>
                    </div>
                    <div className="user-actions">
                      <button aria-label="Edit user" className="btn-icon">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="18"
                          height="18"
                          viewBox="0 0 24 24"
                        >
                          <g
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                          >
                            <path d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                            <path d="M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z"></path>
                          </g>
                        </svg>
                      </button>
                    </div>
                  </div>
                  <div className="user-row pending">
                    <div className="user-info">
                      <div className="user-avatar">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                        >
                          <g
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                          >
                            <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                            <circle cx="12" cy="7" r="4"></circle>
                          </g>
                        </svg>
                      </div>
                      <div className="user-details">
                        <span className="user-name">Emma Thompson</span>
                        <span className="user-email">
                          e.thompson@learnsphere.com
                        </span>
                      </div>
                    </div>
                    <div className="user-role">
                      <span className="role-badge role-teacher">Teacher</span>
                    </div>
                    <div className="user-status">
                      <span className="status-dot pending"></span>
                      <span className="status-text">Pending Approval</span>
                    </div>
                    <div className="user-actions">
                      <button className="btn btn-primary btn-sm">
                        Approve
                      </button>
                    </div>
                  </div>
                  <div className="user-row">
                    <div className="user-info">
                      <div className="user-avatar">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                        >
                          <g
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                          >
                            <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                            <circle cx="12" cy="7" r="4"></circle>
                          </g>
                        </svg>
                      </div>
                      <div className="user-details">
                        <span className="user-name">Prof. James Wilson</span>
                        <span className="user-email">
                          j.wilson@learnsphere.com
                        </span>
                      </div>
                    </div>
                    <div className="user-role">
                      <span className="role-badge role-admin">Admin</span>
                    </div>
                    <div className="user-status">
                      <span className="status-dot active"></span>
                      <span className="status-text">Active</span>
                    </div>
                    <div className="user-actions">
                      <button aria-label="Edit user" className="btn-icon">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="18"
                          height="18"
                          viewBox="0 0 24 24"
                        >
                          <g
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                          >
                            <path d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                            <path d="M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z"></path>
                          </g>
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="management-panel">
                <div
                  role="tablist"
                  aria-label="Management options"
                  className="tabs-wrapper"
                >
                  <button
                    role="tab"
                    aria-selected="true"
                    aria-controls="roles-panel"
                    id="roles-tab"
                    className="tab-btn active"
                  >
                    {' '}
                    Roles
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </button>
                  <button
                    role="tab"
                    aria-selected="false"
                    aria-controls="groups-panel"
                    id="groups-tab"
                    className="tab-btn"
                  >
                    {' '}
                    Groups
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </button>
                  <button
                    role="tab"
                    aria-selected="false"
                    aria-controls="audit-panel"
                    id="audit-tab"
                    className="tab-btn"
                  >
                    {' '}
                    Audit
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </button>
                </div>
                <div
                  role="tabpanel"
                  id="roles-panel"
                  aria-labelledby="roles-tab"
                  className="tab-panel active"
                >
                  <h4 className="panel-subtitle">Role-Based Access</h4>
                  <p className="panel-description">
                    {' '}
                    Assign predefined roles or create custom permission sets.
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </p>
                  <div className="role-list">
                    <div className="role-item">
                      <div className="role-icon">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="18"
                          height="18"
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
                      </div>
                      <div className="role-content">
                        <span className="role-name">System Administrator</span>
                        <span className="role-count">12 users</span>
                      </div>
                    </div>
                    <div className="role-item">
                      <div className="role-icon">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="18"
                          height="18"
                          viewBox="0 0 24 24"
                        >
                          <g
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                          >
                            <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                            <circle cx="12" cy="7" r="4"></circle>
                          </g>
                        </svg>
                      </div>
                      <div className="role-content">
                        <span className="role-name">Teacher</span>
                        <span className="role-count">142 users</span>
                      </div>
                    </div>
                    <div className="role-item">
                      <div className="role-icon">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="18"
                          height="18"
                          viewBox="0 0 24 24"
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
                      </div>
                      <div className="role-content">
                        <span className="role-name">Student</span>
                        <span className="role-count">2,693 users</span>
                      </div>
                    </div>
                  </div>
                  <button className="btn btn-outline btn-sm">
                    Create Custom Role
                  </button>
                </div>
                <div
                  role="tabpanel"
                  id="groups-panel"
                  aria-labelledby="groups-tab"
                  hidden="true"
                  className="tab-panel"
                >
                  <h4 className="panel-subtitle">Smart Groups</h4>
                  <p className="panel-description">
                    {' '}
                    Organize users by campus, department, or cohort.
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </p>
                </div>
                <div
                  role="tabpanel"
                  id="audit-panel"
                  aria-labelledby="audit-tab"
                  hidden="true"
                  className="tab-panel"
                >
                  <h4 className="panel-subtitle">Activity Logs</h4>
                  <p className="panel-description">
                    {' '}
                    Track role changes, logins, and administrative actions.
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="data-auditing" className="audit-section">
          <div className="audit-container">
            <div
              role="tablist"
              aria-label="Audit categories"
              className="tabs-header"
            >
              <button
                role="tab"
                aria-selected="true"
                aria-controls="access-panel"
                id="access-tab"
                className="audit-tab active"
              >
                {' '}
                Access Logs
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </button>
              <button
                role="tab"
                aria-selected="false"
                aria-controls="changes-panel"
                id="changes-tab"
                className="audit-tab"
              >
                {' '}
                Data Changes
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </button>
              <button
                role="tab"
                aria-selected="false"
                aria-controls="compliance-panel"
                id="compliance-tab"
                className="audit-tab"
              >
                {' '}
                Compliance
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </button>
              <button
                role="tab"
                aria-selected="false"
                aria-controls="reports-panel"
                id="reports-tab"
                className="audit-tab"
              >
                {' '}
                Reports
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </button>
            </div>
            <div className="audit-main">
              <aside className="audit-nav">
                <h3 className="nav-header">Filters</h3>
                <div className="filter-group">
                  <label className="filter-label">Time Range</label>
                  <select className="filter-select">
                    <option>Last 24 hours</option>
                    <option>Last 7 days</option>
                    <option>Last 30 days</option>
                    <option>Custom range</option>
                  </select>
                </div>
                <div className="filter-group">
                  <label className="filter-label">User Type</label>
                  <div className="checkbox-group">
                    <label className="checkbox-label">
                      <input type="checkbox" checked="true" />
                      <span>All Users</span>
                    </label>
                    <label className="checkbox-label">
                      <input type="checkbox" />
                      <span>Admins</span>
                    </label>
                    <label className="checkbox-label">
                      <input type="checkbox" />
                      <span>Teachers</span>
                    </label>
                    <label className="checkbox-label">
                      <input type="checkbox" />
                      <span>Students</span>
                    </label>
                  </div>
                </div>
                <div className="filter-group">
                  <label className="filter-label">Event Type</label>
                  <select className="filter-select">
                    <option>All Events</option>
                    <option>Login/Logout</option>
                    <option>Data Access</option>
                    <option>Data Modification</option>
                    <option>Export/Download</option>
                  </select>
                </div>
                <button className="btn btn-primary btn-sm">
                  Apply Filters
                </button>
              </aside>
              <div
                role="tabpanel"
                id="access-panel"
                aria-labelledby="access-tab"
                className="audit-feed"
              >
                <div className="feed-header">
                  <h2 className="feed-title">Access Audit Trail</h2>
                  <p className="feed-subtitle">
                    {' '}
                    Complete, tamper-resistant records of every action across
                    the platform.
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </p>
                </div>
                <div className="timeline">
                  <article role="article" className="timeline-event">
                    <time datetime="2025-02-10T14:45" className="event-time">
                      14:45
                    </time>
                    <div className="event-content">
                      <div className="event-header">
                        <h3 className="event-title">User Login</h3>
                        <span className="event-badge success">Success</span>
                      </div>
                      <p className="event-description">
                        {' '}
                        Dr. Sarah Chen logged in from IP 192.168.1.45
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </p>
                      <div className="event-meta">
                        <span className="meta-chip">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="14"
                            height="14"
                            viewBox="0 0 24 24"
                          >
                            <g
                              fill="none"
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                            >
                              <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                              <circle cx="12" cy="7" r="4"></circle>
                            </g>
                          </svg>
                          <span>
                            {' '}
                            Teacher
                            <span
                              dangerouslySetInnerHTML={{
                                __html: ' ',
                              }}
                            />
                          </span>
                        </span>
                        <span className="meta-chip">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="14"
                            height="14"
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
                          <span>
                            {' '}
                            Secure
                            <span
                              dangerouslySetInnerHTML={{
                                __html: ' ',
                              }}
                            />
                          </span>
                        </span>
                      </div>
                    </div>
                  </article>
                  <article role="article" className="timeline-event">
                    <time datetime="2025-02-10T14:30" className="event-time">
                      14:30
                    </time>
                    <div className="event-content">
                      <div className="event-header">
                        <h3 className="event-title">Data Export</h3>
                        <span className="event-badge info">Info</span>
                      </div>
                      <p className="event-description">
                        {' '}
                        Admin exported student enrollment data (847 records)
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </p>
                      <div className="event-meta">
                        <span className="meta-chip">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="14"
                            height="14"
                            viewBox="0 0 24 24"
                          >
                            <g
                              fill="none"
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                            >
                              <path d="M12 15V3m9 12v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                              <path d="m7 10l5 5l5-5"></path>
                            </g>
                          </svg>
                          <span>
                            {' '}
                            Export
                            <span
                              dangerouslySetInnerHTML={{
                                __html: ' ',
                              }}
                            />
                          </span>
                        </span>
                        <span className="meta-chip">CSV</span>
                      </div>
                    </div>
                  </article>
                  <article role="article" className="timeline-event">
                    <time datetime="2025-02-10T14:12" className="event-time">
                      14:12
                    </time>
                    <div className="event-content">
                      <div className="event-header">
                        <h3 className="event-title">Permission Change</h3>
                        <span className="event-badge warning">Action</span>
                      </div>
                      <p className="event-description">
                        {' '}
                        Role updated: Emma Thompson granted Teacher permissions
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </p>
                      <div className="event-meta">
                        <span className="meta-chip">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="14"
                            height="14"
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
                          <span>
                            {' '}
                            Role Change
                            <span
                              dangerouslySetInnerHTML={{
                                __html: ' ',
                              }}
                            />
                          </span>
                        </span>
                        <span className="meta-chip">by Admin</span>
                      </div>
                    </div>
                  </article>
                  <article role="article" className="timeline-event">
                    <time datetime="2025-02-10T13:45" className="event-time">
                      13:45
                    </time>
                    <div className="event-content">
                      <div className="event-header">
                        <h3 className="event-title">Course Access</h3>
                        <span className="event-badge success">Success</span>
                      </div>
                      <p className="event-description">
                        {' '}
                        45 students accessed &quot;Advanced AI Concepts&quot;
                        course materials
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </p>
                      <div className="event-meta">
                        <span className="meta-chip">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="14"
                            height="14"
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
                          <span>
                            {' '}
                            Course
                            <span
                              dangerouslySetInnerHTML={{
                                __html: ' ',
                              }}
                            />
                          </span>
                        </span>
                        <span className="meta-chip">Bulk Access</span>
                      </div>
                    </div>
                  </article>
                  <article role="article" className="timeline-event">
                    <time datetime="2025-02-10T13:20" className="event-time">
                      13:20
                    </time>
                    <div className="event-content">
                      <div className="event-header">
                        <h3 className="event-title">Failed Login Attempt</h3>
                        <span className="event-badge alert">Alert</span>
                      </div>
                      <p className="event-description">
                        {' '}
                        Multiple failed login attempts detected from IP
                        203.45.67.89
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </p>
                      <div className="event-meta">
                        <span className="meta-chip">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="14"
                            height="14"
                            viewBox="0 0 24 24"
                          >
                            <path
                              fill="none"
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M12 13h.01M12 6v3M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"
                            ></path>
                          </svg>
                          <span>
                            {' '}
                            Security
                            <span
                              dangerouslySetInnerHTML={{
                                __html: ' ',
                              }}
                            />
                          </span>
                        </span>
                        <span className="meta-chip">3 attempts</span>
                      </div>
                      <button className="btn btn-outline btn-sm">
                        Investigate
                      </button>
                    </div>
                  </article>
                </div>
                <div className="feed-footer">
                  <button className="btn btn-outline">Load More Events</button>
                </div>
              </div>
              <aside className="inspector">
                <div className="inspector-header">
                  <h3 className="inspector-title">Event Details</h3>
                  <button aria-label="Close inspector" className="btn-icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
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
                </div>
                <div className="inspector-content">
                  <div className="detail-section">
                    <h4 className="detail-title">Event Information</h4>
                    <dl className="detail-list">
                      <dt>
                        <span>Event ID</span>
                      </dt>
                      <dd>
                        <span>EVT-20250210-14450</span>
                      </dd>
                      <dt>
                        <span>Timestamp</span>
                      </dt>
                      <dd>
                        <span>Feb 10, 2025 14:45:23 UTC</span>
                      </dd>
                      <dt>
                        <span>Event Type</span>
                      </dt>
                      <dd>
                        <span>User Authentication</span>
                      </dd>
                      <dt>
                        <span>Status</span>
                      </dt>
                      <dd>
                        <span className="status-badge status-success">
                          Success
                        </span>
                      </dd>
                    </dl>
                  </div>
                  <div className="detail-section">
                    <h4 className="detail-title">User Details</h4>
                    <dl className="detail-list">
                      <dt>
                        <span>User</span>
                      </dt>
                      <dd>
                        <span>Dr. Sarah Chen</span>
                      </dd>
                      <dt>
                        <span>Role</span>
                      </dt>
                      <dd>
                        <span>Teacher</span>
                      </dd>
                      <dt>
                        <span>User ID</span>
                      </dt>
                      <dd>
                        <span>USR-1847</span>
                      </dd>
                    </dl>
                  </div>
                  <div className="detail-section">
                    <h4 className="detail-title">Session Information</h4>
                    <dl className="detail-list">
                      <dt>
                        <span>IP Address</span>
                      </dt>
                      <dd>
                        <span>192.168.1.45</span>
                      </dd>
                      <dt>
                        <span>Location</span>
                      </dt>
                      <dd>
                        <span>San Francisco, CA</span>
                      </dd>
                      <dt>
                        <span>Device</span>
                      </dt>
                      <dd>
                        <span>Chrome on Windows</span>
                      </dd>
                    </dl>
                  </div>
                  <button className="btn btn-primary btn-sm">
                    Export Event Report
                  </button>
                </div>
              </aside>
            </div>
          </div>
        </section>
        <section id="course-insights" className="insights-section">
          <div className="insights-panel">
            <header className="insights-header">
              <div className="header-content">
                <h2 className="section-title">
                  Course &amp; Enrollment Insights
                </h2>
                <p className="section-content">
                  {' '}
                  At-a-glance intelligence on course health, participation, and
                  learner progress across your institution.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
              </div>
              <button className="btn btn-primary">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                >
                  <g
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  >
                    <path d="M12 15V3m9 12v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                    <path d="m7 10l5 5l5-5"></path>
                  </g>
                </svg>
                <span>
                  {' '}
                  Export Report
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </button>
            </header>
            <div className="insights-grid">
              <div className="insights-left">
                <div className="card kpi-card">
                  <h3 className="card-title">Key Enrollment Metrics</h3>
                  <div className="kpi-highlights">
                    <div className="kpi-highlight">
                      <span className="kpi-number">2,847</span>
                      <span className="kpi-label">Total Enrolled</span>
                      <span className="kpi-change positive">
                        +12% vs last month
                      </span>
                    </div>
                    <div className="kpi-highlight">
                      <span className="kpi-number">156</span>
                      <span className="kpi-label">Active Courses</span>
                      <span className="kpi-change positive">+8 new</span>
                    </div>
                  </div>
                </div>
                <div className="card funnel-card">
                  <h3 className="card-title">Enrollment Funnel</h3>
                  <div className="funnel">
                    <div className="funnel-stage">
                      <div className="admin-dashboard-stage-bar1 stage-bar">
                        <span className="stage-label">Brochure Views</span>
                        <span className="stage-value">4,520</span>
                      </div>
                    </div>
                    <div className="funnel-stage">
                      <div className="admin-dashboard-stage-bar2 stage-bar">
                        <span className="stage-label">
                          Registration Started
                        </span>
                        <span className="stage-value">3,390</span>
                      </div>
                    </div>
                    <div className="funnel-stage">
                      <div className="admin-dashboard-stage-bar3 stage-bar">
                        <span className="stage-label">
                          Enrollment Completed
                        </span>
                        <span className="stage-value">2,847</span>
                      </div>
                    </div>
                  </div>
                  <p className="funnel-insight">
                    {' '}
                    63% conversion rate from view to enrollment
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </p>
                </div>
                <div className="card risk-card">
                  <h3 className="card-title">At-Risk Learners</h3>
                  <p className="card-description">
                    {' '}
                    Automatically flagged learners with low engagement or
                    falling completion trajectories.
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </p>
                  <div className="risk-list">
                    <div className="risk-item">
                      <div className="risk-indicator high"></div>
                      <div className="risk-details">
                        <span className="risk-name">Advanced AI Concepts</span>
                        <span className="risk-stat">
                          18 students below 50% progress
                        </span>
                      </div>
                      <button className="btn btn-outline btn-sm">Review</button>
                    </div>
                    <div className="risk-item">
                      <div className="risk-indicator medium"></div>
                      <div className="risk-details">
                        <span className="risk-name">
                          Data Science Fundamentals
                        </span>
                        <span className="risk-stat">
                          12 students inactive 7+ days
                        </span>
                      </div>
                      <button className="btn btn-outline btn-sm">Review</button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="right-grid">
                <div className="card catalog-card">
                  <h3 className="card-title">Catalog Activity</h3>
                  <div className="activity-stats">
                    <div className="stat-item">
                      <span className="stat-label">Published</span>
                      <span className="stat-number">8</span>
                    </div>
                    <div className="stat-item">
                      <span className="stat-label">Updated</span>
                      <span className="stat-number">23</span>
                    </div>
                    <div className="stat-item">
                      <span className="stat-label">Views</span>
                      <span className="stat-number">4.5k</span>
                    </div>
                  </div>
                </div>
                <div className="card benchmark-card">
                  <h3 className="card-title">Performance Benchmarks</h3>
                  <div className="benchmark-list">
                    <div className="benchmark-item">
                      <span className="benchmark-label">Completion Rate</span>
                      <div className="benchmark-bar">
                        <div className="admin-dashboard-benchmark-fill1 benchmark-fill"></div>
                        <span className="benchmark-value">84%</span>
                      </div>
                    </div>
                    <div className="benchmark-item">
                      <span className="benchmark-label">Pass Rate</span>
                      <div className="benchmark-bar">
                        <div className="admin-dashboard-benchmark-fill2 benchmark-fill"></div>
                        <span className="benchmark-value">78%</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card actions-mini-card">
                  <h3 className="card-title">Quick Actions</h3>
                  <div className="action-buttons">
                    <button className="btn btn-primary btn-sm">
                      Publish Update
                    </button>
                    <button className="btn btn-outline btn-sm">
                      Adjust Capacity
                    </button>
                  </div>
                </div>
                <div className="card brochure-card">
                  <div className="brochure-preview">
                    <div className="brochure-overlay">
                      <span className="brochure-label">Latest Brochure</span>
                      <h4 className="brochure-title">
                        AI &amp; Machine Learning Program
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="notifications-section" className="notifications-section">
          <div className="notifications-container">
            <div className="notifications-primary">
              <div className="section-header">
                <h2 className="section-title">Notifications &amp; Reminders</h2>
                <p className="section-content">
                  {' '}
                  Centralized alert management for the whole institution —
                  schedule, send, and track notifications to admins, teachers,
                  and students.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
              </div>
              <div className="notification-cards">
                <article className="notification-card priority-high">
                  <div className="notification-indicator">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M10.268 21a2 2 0 0 0 3.464 0m-10.47-5.674A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"
                      ></path>
                    </svg>
                  </div>
                  <div className="notification-content">
                    <div className="notification-header">
                      <h3 className="notification-title">
                        {' '}
                        Exam Reminder: Advanced AI Concepts
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </h3>
                      <span className="priority-badge high">High Priority</span>
                    </div>
                    <p className="notification-text">
                      {' '}
                      Final exam scheduled for February 15, 2025 at 10:00 AM.
                      Reminder to be sent to 87 students.
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </p>
                    <div className="notification-meta">
                      <span className="meta-item">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="14"
                          height="14"
                          viewBox="0 0 24 24"
                        >
                          <g
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                          >
                            <path d="M12 6v6l4 2"></path>
                            <circle cx="12" cy="12" r="10"></circle>
                          </g>
                        </svg>
                        <span>
                          {' '}
                          Scheduled: Feb 14, 6:00 PM
                          <span
                            dangerouslySetInnerHTML={{
                              __html: ' ',
                            }}
                          />
                        </span>
                      </span>
                      <span className="meta-item">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="14"
                          height="14"
                          viewBox="0 0 24 24"
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
                        <span>
                          {' '}
                          87 recipients
                          <span
                            dangerouslySetInnerHTML={{
                              __html: ' ',
                            }}
                          />
                        </span>
                      </span>
                    </div>
                    <div className="notification-actions">
                      <button className="btn btn-primary btn-sm">Edit</button>
                      <button className="btn btn-outline btn-sm">
                        Preview
                      </button>
                    </div>
                  </div>
                </article>
                <article className="notification-card priority-medium">
                  <div className="notification-indicator">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
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
                  <div className="notification-content">
                    <div className="notification-header">
                      <h3 className="notification-title">
                        Weekly Enrollment Update
                      </h3>
                      <span className="priority-badge medium">Medium</span>
                    </div>
                    <p className="notification-text">
                      {' '}
                      Automated weekly summary of new enrollments, withdrawals,
                      and capacity updates sent to all admins.
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </p>
                    <div className="notification-meta">
                      <span className="meta-item">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="14"
                          height="14"
                          viewBox="0 0 24 24"
                        >
                          <g
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                          >
                            <path d="M12 6v6l4 2"></path>
                            <circle cx="12" cy="12" r="10"></circle>
                          </g>
                        </svg>
                        <span>
                          {' '}
                          Recurring: Every Monday 9:00 AM
                          <span
                            dangerouslySetInnerHTML={{
                              __html: ' ',
                            }}
                          />
                        </span>
                      </span>
                      <span className="meta-item">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="14"
                          height="14"
                          viewBox="0 0 24 24"
                        >
                          <path
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M20 6L9 17l-5-5"
                          ></path>
                        </svg>
                        <span>
                          {' '}
                          Last sent: 98% opened
                          <span
                            dangerouslySetInnerHTML={{
                              __html: ' ',
                            }}
                          />
                        </span>
                      </span>
                    </div>
                    <div className="notification-actions">
                      <button className="btn btn-outline btn-sm">
                        View Template
                      </button>
                      <button className="btn btn-outline btn-sm">
                        Analytics
                      </button>
                    </div>
                  </div>
                </article>
                <article className="notification-card priority-low">
                  <div className="notification-indicator">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
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
                  <div className="notification-content">
                    <div className="notification-header">
                      <h3 className="notification-title">
                        {' '}
                        New Course Launch: Data Science 201
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </h3>
                      <span className="priority-badge low">Info</span>
                    </div>
                    <p className="notification-text">
                      {' '}
                      Announcement sent to all students and teachers about new
                      intermediate data science course.
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </p>
                    <div className="notification-meta">
                      <span className="meta-item">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="14"
                          height="14"
                          viewBox="0 0 24 24"
                        >
                          <g
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                          >
                            <path d="M12 6v6l4 2"></path>
                            <circle cx="12" cy="12" r="10"></circle>
                          </g>
                        </svg>
                        <span>
                          {' '}
                          Sent: Feb 10, 2:30 PM
                          <span
                            dangerouslySetInnerHTML={{
                              __html: ' ',
                            }}
                          />
                        </span>
                      </span>
                      <span className="meta-item">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="14"
                          height="14"
                          viewBox="0 0 24 24"
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
                        <span>
                          {' '}
                          2,847 recipients
                          <span
                            dangerouslySetInnerHTML={{
                              __html: ' ',
                            }}
                          />
                        </span>
                      </span>
                    </div>
                    <div className="notification-actions">
                      <button className="btn btn-outline btn-sm">
                        View Metrics
                      </button>
                    </div>
                  </div>
                </article>
                <article className="notification-card draft">
                  <div className="notification-indicator">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                    >
                      <g
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                      >
                        <path d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                        <path d="M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z"></path>
                      </g>
                    </svg>
                  </div>
                  <div className="notification-content">
                    <div className="notification-header">
                      <h3 className="notification-title">
                        System Maintenance Notice
                      </h3>
                      <span className="priority-badge draft">Draft</span>
                    </div>
                    <p className="notification-text">
                      {' '}
                      Planned maintenance window on Feb 15, 2:00-4:00 AM UTC.
                      Platform will be unavailable during this time.
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </p>
                    <div className="notification-meta">
                      <span className="meta-item">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="14"
                          height="14"
                          viewBox="0 0 24 24"
                        >
                          <g
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                          >
                            <path d="M12 6v6l4 2"></path>
                            <circle cx="12" cy="12" r="10"></circle>
                          </g>
                        </svg>
                        <span>
                          {' '}
                          Draft saved 12m ago
                          <span
                            dangerouslySetInnerHTML={{
                              __html: ' ',
                            }}
                          />
                        </span>
                      </span>
                    </div>
                    <div className="notification-actions">
                      <button className="btn btn-primary btn-sm">
                        {' '}
                        Complete &amp; Schedule
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </button>
                      <button className="btn btn-outline btn-sm">
                        Edit Draft
                      </button>
                    </div>
                  </div>
                </article>
              </div>
            </div>
            <aside className="notifications-secondary">
              <div className="quick-create">
                <h3 className="sidebar-title">Quick Create</h3>
                <button className="btn btn-primary btn-lg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 12h14m-7-7v14"
                    ></path>
                  </svg>
                  <span>
                    {' '}
                    New Notification
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </button>
              </div>
              <div className="templates-widget">
                <h3 className="sidebar-title">Templates</h3>
                <ul className="template-list">
                  <li className="template-item">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
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
                    <span>Assignment Reminder</span>
                  </li>
                  <li className="template-item">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M10.268 21a2 2 0 0 0 3.464 0m-10.47-5.674A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"
                      ></path>
                    </svg>
                    <span>Exam Alert</span>
                  </li>
                  <li className="template-item">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
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
                    <span>Welcome Email</span>
                  </li>
                  <li className="template-item">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
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
                    <span>Security Notice</span>
                  </li>
                </ul>
                <button className="btn btn-outline btn-sm">
                  Manage Templates
                </button>
              </div>
              <div className="analytics-widget">
                <h3 className="sidebar-title">Delivery Metrics</h3>
                <div className="metric-row">
                  <span className="metric-label">This Week</span>
                  <span className="metric-value">247 sent</span>
                </div>
                <div className="metric-row">
                  <span className="metric-label">Open Rate</span>
                  <span className="metric-value">94%</span>
                </div>
                <div className="metric-row">
                  <span className="metric-label">Avg Response Time</span>
                  <span className="metric-value">2.4h</span>
                </div>
                <button className="btn btn-outline btn-sm">
                  Full Analytics
                </button>
              </div>
            </aside>
          </div>
        </section>
        <section id="reports-section" className="reports-section">
          <div className="reports-container">
            <div className="kpi-row">
              <div className="kpi-card">
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
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M16 3.128a4 4 0 0 1 0 7.744M22 21v-2a4 4 0 0 0-3-3.87"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                  </g>
                </svg>
                <div className="kpi-content">
                  <span className="kpi-label">Total Users</span>
                  <span className="kpi-value">2,847</span>
                  <span className="kpi-trend positive">+12% this month</span>
                </div>
              </div>
              <div className="kpi-card">
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
                    d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"
                  ></path>
                </svg>
                <div className="kpi-content">
                  <span className="kpi-label">Active Courses</span>
                  <span className="kpi-value">156</span>
                  <span className="kpi-trend positive">+8 new</span>
                </div>
              </div>
              <div className="kpi-card">
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
                    d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"
                  ></path>
                </svg>
                <div className="kpi-content">
                  <span className="kpi-label">Completion Rate</span>
                  <span className="kpi-value">84%</span>
                  <span className="kpi-trend neutral">+2% vs target</span>
                </div>
              </div>
              <div className="kpi-card">
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
                    <path d="M3 3v16a2 2 0 0 0 2 2h16"></path>
                    <path d="m19 9l-5 5l-4-4l-3 3"></path>
                  </g>
                </svg>
                <div className="kpi-content">
                  <span className="kpi-label">Platform Uptime</span>
                  <span className="kpi-value">99.8%</span>
                  <span className="kpi-trend positive">Above SLA</span>
                </div>
              </div>
            </div>
            <div className="reports-area">
              <div className="report-card">
                <div className="report-header">
                  <h3 className="report-title">User Activity Report</h3>
                  <span className="report-tag">Real-time</span>
                </div>
                <p className="report-description">
                  {' '}
                  Comprehensive usage, performance, and attendance across
                  institutions, cohorts, and individual learners.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
                <div className="report-filters">
                  <select className="filter-select">
                    <option>All Users</option>
                    <option>Teachers</option>
                    <option>Students</option>
                    <option>Admins</option>
                  </select>
                  <select className="filter-select">
                    <option>Last 30 Days</option>
                    <option>Last 7 Days</option>
                    <option>This Month</option>
                    <option>Custom Range</option>
                  </select>
                </div>
                <div className="report-actions">
                  <button className="btn btn-primary">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                    >
                      <g
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                      >
                        <path d="M2.062 12.348a1 1 0 0 1 0-.696a10.75 10.75 0 0 1 19.876 0a1 1 0 0 1 0 .696a10.75 10.75 0 0 1-19.876 0"></path>
                        <circle cx="12" cy="12" r="3"></circle>
                      </g>
                    </svg>
                    <span>
                      {' '}
                      Preview
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </button>
                  <button className="btn btn-outline">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                    >
                      <g
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                      >
                        <path d="M12 15V3m9 12v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                        <path d="m7 10l5 5l5-5"></path>
                      </g>
                    </svg>
                    <span>
                      {' '}
                      Export
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </button>
                </div>
              </div>
              <div className="report-card">
                <div className="report-header">
                  <h3 className="report-title">Course Performance</h3>
                  <span className="report-tag">Analytics</span>
                </div>
                <p className="report-description">
                  {' '}
                  Engagement, assessment outcomes, and resource utilization by
                  program, class, and date range.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
                <div className="report-filters">
                  <select className="filter-select">
                    <option>All Courses</option>
                    <option>Active Only</option>
                    <option>Completed</option>
                  </select>
                  <select className="filter-select">
                    <option>This Semester</option>
                    <option>Last Semester</option>
                    <option>Year to Date</option>
                  </select>
                </div>
                <div className="report-actions">
                  <button className="btn btn-primary">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                    >
                      <g
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                      >
                        <path d="M2.062 12.348a1 1 0 0 1 0-.696a10.75 10.75 0 0 1 19.876 0a1 1 0 0 1 0 .696a10.75 10.75 0 0 1-19.876 0"></path>
                        <circle cx="12" cy="12" r="3"></circle>
                      </g>
                    </svg>
                    <span>
                      {' '}
                      Preview
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </button>
                  <button className="btn btn-outline">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                    >
                      <g
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                      >
                        <path d="M12 15V3m9 12v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                        <path d="m7 10l5 5l5-5"></path>
                      </g>
                    </svg>
                    <span>
                      {' '}
                      Export
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </button>
                </div>
              </div>
              <div className="report-card">
                <div className="report-header">
                  <h3 className="report-title">Attendance &amp; Compliance</h3>
                  <span className="report-tag">Audit-Ready</span>
                </div>
                <p className="report-description">
                  {' '}
                  Traceable attendance logs and assessment records with
                  time-stamped events for accreditation reviews.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
                <div className="report-filters">
                  <select className="filter-select">
                    <option>All Institutions</option>
                    <option>Main Campus</option>
                    <option>Regional Centers</option>
                  </select>
                  <select className="filter-select">
                    <option>Last Quarter</option>
                    <option>Current Term</option>
                    <option>Academic Year</option>
                  </select>
                </div>
                <div className="report-actions">
                  <button className="btn btn-primary">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                    >
                      <g
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                      >
                        <path d="M2.062 12.348a1 1 0 0 1 0-.696a10.75 10.75 0 0 1 19.876 0a1 1 0 0 1 0 .696a10.75 10.75 0 0 1-19.876 0"></path>
                        <circle cx="12" cy="12" r="3"></circle>
                      </g>
                    </svg>
                    <span>
                      {' '}
                      Preview
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </button>
                  <button className="btn btn-outline">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                    >
                      <g
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                      >
                        <path d="M12 15V3m9 12v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                        <path d="m7 10l5 5l5-5"></path>
                      </g>
                    </svg>
                    <span>
                      {' '}
                      Export
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </button>
                </div>
              </div>
              <div className="report-card">
                <div className="report-header">
                  <h3 className="report-title">Executive Summary</h3>
                  <span className="report-tag">Leadership</span>
                </div>
                <p className="report-description">
                  {' '}
                  Presentation-ready summaries with charts and key indicators
                  for board reviews and strategic planning.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
                <div className="report-filters">
                  <select className="filter-select">
                    <option>Monthly Summary</option>
                    <option>Quarterly Review</option>
                    <option>Annual Report</option>
                  </select>
                  <select className="filter-select">
                    <option>PDF with Charts</option>
                    <option>Excel Detailed</option>
                    <option>PowerPoint Deck</option>
                  </select>
                </div>
                <div className="report-actions">
                  <button className="btn btn-primary">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                    >
                      <g
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                      >
                        <path d="M2.062 12.348a1 1 0 0 1 0-.696a10.75 10.75 0 0 1 19.876 0a1 1 0 0 1 0 .696a10.75 10.75 0 0 1-19.876 0"></path>
                        <circle cx="12" cy="12" r="3"></circle>
                      </g>
                    </svg>
                    <span>
                      {' '}
                      Preview
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </button>
                  <button className="btn btn-outline">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                    >
                      <g
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                      >
                        <path d="M12 15V3m9 12v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                        <path d="m7 10l5 5l5-5"></path>
                      </g>
                    </svg>
                    <span>
                      {' '}
                      Export
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </button>
                </div>
              </div>
            </div>
            <div className="timeline-section">
              <h3 className="timeline-title">Recent Report Activity</h3>
              <div className="timeline-list">
                <div className="timeline-item">
                  <div className="timeline-dot"></div>
                  <div className="timeline-content">
                    <span className="timeline-text">
                      {' '}
                      User Activity Report exported by Admin
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <time datetime="2025-02-10T14:30" className="timeline-time">
                      {' '}
                      2 hours ago
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </time>
                  </div>
                </div>
                <div className="timeline-item">
                  <div className="timeline-dot"></div>
                  <div className="timeline-content">
                    <span className="timeline-text">
                      {' '}
                      Monthly Summary scheduled for delivery
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <time datetime="2025-02-10T09:00" className="timeline-time">
                      {' '}
                      7 hours ago
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </time>
                  </div>
                </div>
                <div className="timeline-item">
                  <div className="timeline-dot"></div>
                  <div className="timeline-content">
                    <span className="timeline-text">
                      {' '}
                      Compliance audit report generated
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <time datetime="2025-02-09T16:45" className="timeline-time">
                      {' '}
                      Yesterday
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </time>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer></Footer>
      <a href="https://play.teleporthq.io/signup">
        <div
          aria-label="Sign up to TeleportHQ"
          className="admin-dashboard-container7"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 19 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="admin-dashboard-icon325"
          >
            <path
              d="M9.1017 4.64355H2.17867C0.711684 4.64355 -0.477539 5.79975 -0.477539 7.22599V13.9567C-0.477539 15.3829 0.711684 16.5391 2.17867 16.5391H9.1017C10.5687 16.5391 11.7579 15.3829 11.7579 13.9567V7.22599C11.7579 5.79975 10.5687 4.64355 9.1017 4.64355Z"
              fill="#B23ADE"
            ></path>
            <path
              d="M10.9733 12.7878C14.4208 12.7878 17.2156 10.0706 17.2156 6.71886C17.2156 3.3671 14.4208 0.649963 10.9733 0.649963C7.52573 0.649963 4.73096 3.3671 4.73096 6.71886C4.73096 10.0706 7.52573 12.7878 10.9733 12.7878Z"
              fill="#FF5C5C"
            ></path>
            <path
              d="M17.7373 13.3654C19.1497 14.1588 19.1497 15.4634 17.7373 16.2493L10.0865 20.5387C8.67402 21.332 7.51855 20.6836 7.51855 19.0968V10.5141C7.51855 8.92916 8.67402 8.2807 10.0865 9.07221L17.7373 13.3654Z"
              fill="#2874DE"
            ></path>
          </svg>
          <span className="admin-dashboard-text80">Built in TeleportHQ</span>
        </div>
      </a>
    </div>
  )
}

export default AdminDashboard

import React from 'react'

import Script from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import Navigation from '../../components/navigation.js';
import Footer from '../../components/footer';
import './root-admin-dashboard.css';

const RootAdminDashboard = (props) => {
  return (
    <div className="root-admin-dashboard-container1">
      <Helmet>
        <title>Root-Admin-Dashboard - Thunderous Infinite Parrot</title>
        <meta
          property="og:title"
          content="Root-Admin-Dashboard - Thunderous Infinite Parrot"
        />
      </Helmet>
      <Navigation></Navigation>
      <div className="root-admin-dashboard-container2">
        <div className="root-admin-dashboard-container3">
          <Script
            html={`<style>
@media (prefers-reduced-motion: reduce) {
* {
  animation-duration: 0.01ms !important;
  animation-iteration-count: 1 !important;
  transition-duration: 0.01ms !important;
}
}
</style>`}
          ></Script>
        </div>
      </div>
      <section id="hero-section" className="hero-section">
        <div className="hero-container">
          <div className="hero-content">
            <h1 className="root-admin-dashboard-hero-title">
              Command the Learning Ecosystem
            </h1>
            <p className="root-admin-dashboard-hero-subtitle">
              {' '}
              Unified control center for every institution on your platform
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </p>
            <div className="hero-body">
              <p>
                {' '}
                Cross-organization visibility with instant snapshots of
                adoption, active courses, and compliance status. Centralized
                billing, resource governance, and enterprise-grade metrics to
                demonstrate ROI and learner outcomes.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </p>
            </div>
            <div className="hero-controls">
              <button aria-label="Access Dashboard" className="btn btn-primary">
                {' '}
                Access Dashboard
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </button>
              <button
                aria-label="View Documentation"
                className="btn btn-outline"
              >
                {' '}
                Documentation
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </button>
            </div>
            <div className="hero-features">
              <div className="hero-feature-item">
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
                <span>Secure Operations</span>
              </div>
              <div className="hero-feature-item">
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
                <span>Global Reporting</span>
              </div>
              <div className="hero-feature-item">
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
                <span>Role-Aware Control</span>
              </div>
            </div>
          </div>
          <div
            role="group"
            aria-labelledby="metrics-heading"
            className="hero-metrics-card"
          >
            <h2 id="metrics-heading" className="metrics-heading">
              Platform Status
            </h2>
            <div className="metric-item">
              <div className="metric-value">
                <span>247</span>
              </div>
              <div className="metric-label">
                <span>Active Organizations</span>
              </div>
            </div>
            <div className="metric-item">
              <div className="metric-value">
                <span>18,429</span>
              </div>
              <div className="metric-label">
                <span>Total Users</span>
              </div>
            </div>
            <div className="metric-item">
              <div className="metric-value">
                <span>1,284</span>
              </div>
              <div className="metric-label">
                <span>Active Courses</span>
              </div>
            </div>
            <div className="metric-item">
              <div className="metric-value">
                <span>99.7%</span>
              </div>
              <div className="metric-label">
                <span>System Uptime</span>
              </div>
            </div>
            <div className="metric-actions">
              <button
                aria-label="Refresh metrics"
                className="metric-action-btn"
              >
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
                    d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>
      <section id="dashboard-section" className="dashboard-section">
        <div className="dashboard-container">
          <div className="hero-strip">
            <div className="hero-strip-content">
              <h2 className="root-admin-dashboard-section-title">
                Executive Dashboard
              </h2>
              <p className="section-subtitle">One View, Total Control</p>
            </div>
            <div className="action-center">
              <button aria-label="Export reports" className="btn btn-secondary">
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
                <span>Export</span>
              </button>
              <button
                aria-label="View all organizations"
                className="btn btn-primary"
              >
                {' '}
                All Organizations
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </button>
            </div>
          </div>
          <div className="prioritized-metrics">
            <div className="priority-metric-card">
              <div className="priority-metric-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                >
                  <g
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  >
                    <path d="M12 10h.01M12 14h.01M12 6h.01M16 10h.01M16 14h.01M16 6h.01M8 10h.01M8 14h.01M8 6h.01M9 22v-3a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v3"></path>
                    <rect width="16" height="20" x="4" y="2" rx="2"></rect>
                  </g>
                </svg>
              </div>
              <div className="priority-metric-value">
                <span>247</span>
              </div>
              <div className="priority-metric-label">
                <span>Total Organizations</span>
              </div>
              <div className="priority-metric-change positive">
                <span>+12 this month</span>
              </div>
            </div>
            <div className="priority-metric-card">
              <div className="priority-metric-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
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
              <div className="priority-metric-value">
                <span>3,842</span>
              </div>
              <div className="priority-metric-label">
                <span>Active Sessions</span>
              </div>
              <div className="priority-metric-change positive">
                <span>+8.3%</span>
              </div>
            </div>
            <div className="priority-metric-card">
              <div className="priority-metric-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
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
              </div>
              <div className="priority-metric-value">
                <span>8.7 TB</span>
              </div>
              <div className="priority-metric-label">
                <span>Storage Usage</span>
              </div>
              <div className="priority-metric-change">
                <span>68% capacity</span>
              </div>
            </div>
          </div>
          <div className="org-grid">
            <div
              role="group"
              tabindex="0"
              aria-expanded="false"
              className="org-card"
            >
              <div className="org-card-header">
                <div className="org-card-logo">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                  >
                    <g
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    >
                      <path d="M12 10h.01M12 14h.01M12 6h.01M16 10h.01M16 14h.01M16 6h.01M8 10h.01M8 14h.01M8 6h.01M9 22v-3a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v3"></path>
                      <rect width="16" height="20" x="4" y="2" rx="2"></rect>
                    </g>
                  </svg>
                </div>
                <div className="org-card-title-group">
                  <h3 className="org-card-title">TechEd University</h3>
                  <span className="org-card-status active">Active</span>
                </div>
              </div>
              <div className="org-card-metrics">
                <div className="org-metric">
                  <span className="org-metric-label">Users</span>
                  <span className="org-metric-value">2,847</span>
                </div>
                <div className="org-metric">
                  <span className="org-metric-label">Courses</span>
                  <span className="org-metric-value">186</span>
                </div>
                <div className="org-metric">
                  <span className="org-metric-label">Usage</span>
                  <span className="org-metric-value">94%</span>
                </div>
              </div>
              <div aria-hidden="true" className="org-card-details">
                <p className="section-content">
                  {' '}
                  Enterprise plan with full access to all features including
                  coding workspace and voice bot integration.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
              </div>
            </div>
            <div
              role="group"
              tabindex="0"
              aria-expanded="false"
              className="org-card"
            >
              <div className="org-card-header">
                <div className="org-card-logo">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                  >
                    <g
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    >
                      <path d="M12 10h.01M12 14h.01M12 6h.01M16 10h.01M16 14h.01M16 6h.01M8 10h.01M8 14h.01M8 6h.01M9 22v-3a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v3"></path>
                      <rect width="16" height="20" x="4" y="2" rx="2"></rect>
                    </g>
                  </svg>
                </div>
                <div className="org-card-title-group">
                  <h3 className="org-card-title">Global Learning Institute</h3>
                  <span className="org-card-status active">Active</span>
                </div>
              </div>
              <div className="org-card-metrics">
                <div className="org-metric">
                  <span className="org-metric-label">Users</span>
                  <span className="org-metric-value">1,523</span>
                </div>
                <div className="org-metric">
                  <span className="org-metric-label">Courses</span>
                  <span className="org-metric-value">94</span>
                </div>
                <div className="org-metric">
                  <span className="org-metric-label">Usage</span>
                  <span className="org-metric-value">87%</span>
                </div>
              </div>
              <div aria-hidden="true" className="org-card-details">
                <p className="section-content">
                  {' '}
                  Professional plan with enhanced analytics and multi-campus
                  support.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
              </div>
            </div>
            <div
              role="group"
              tabindex="0"
              aria-expanded="false"
              className="org-card"
            >
              <div className="org-card-header">
                <div className="org-card-logo">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                  >
                    <g
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    >
                      <path d="M12 10h.01M12 14h.01M12 6h.01M16 10h.01M16 14h.01M16 6h.01M8 10h.01M8 14h.01M8 6h.01M9 22v-3a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v3"></path>
                      <rect width="16" height="20" x="4" y="2" rx="2"></rect>
                    </g>
                  </svg>
                </div>
                <div className="org-card-title-group">
                  <h3 className="org-card-title">Innovation Academy</h3>
                  <span className="org-card-status warning">Review</span>
                </div>
              </div>
              <div className="org-card-metrics">
                <div className="org-metric">
                  <span className="org-metric-label">Users</span>
                  <span className="org-metric-value">892</span>
                </div>
                <div className="org-metric">
                  <span className="org-metric-label">Courses</span>
                  <span className="org-metric-value">52</span>
                </div>
                <div className="org-metric">
                  <span className="org-metric-label">Usage</span>
                  <span className="org-metric-value">62%</span>
                </div>
              </div>
              <div aria-hidden="true" className="org-card-details">
                <p className="section-content">
                  {' '}
                  Standard plan approaching storage limits. Review recommended.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
              </div>
            </div>
            <div
              role="group"
              tabindex="0"
              aria-expanded="false"
              className="org-card"
            >
              <div className="org-card-header">
                <div className="org-card-logo">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                  >
                    <g
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    >
                      <path d="M12 10h.01M12 14h.01M12 6h.01M16 10h.01M16 14h.01M16 6h.01M8 10h.01M8 14h.01M8 6h.01M9 22v-3a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v3"></path>
                      <rect width="16" height="20" x="4" y="2" rx="2"></rect>
                    </g>
                  </svg>
                </div>
                <div className="org-card-title-group">
                  <h3 className="org-card-title">NextGen Skills Center</h3>
                  <span className="org-card-status active">Active</span>
                </div>
              </div>
              <div className="org-card-metrics">
                <div className="org-metric">
                  <span className="org-metric-label">Users</span>
                  <span className="org-metric-value">3,204</span>
                </div>
                <div className="org-metric">
                  <span className="org-metric-label">Courses</span>
                  <span className="org-metric-value">214</span>
                </div>
                <div className="org-metric">
                  <span className="org-metric-label">Usage</span>
                  <span className="org-metric-value">91%</span>
                </div>
              </div>
              <div aria-hidden="true" className="org-card-details">
                <p className="section-content">
                  {' '}
                  Enterprise plan with custom integrations and dedicated
                  support.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
              </div>
            </div>
            <div
              role="group"
              tabindex="0"
              aria-expanded="false"
              className="org-card"
            >
              <div className="org-card-header">
                <div className="org-card-logo">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                  >
                    <g
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    >
                      <path d="M12 10h.01M12 14h.01M12 6h.01M16 10h.01M16 14h.01M16 6h.01M8 10h.01M8 14h.01M8 6h.01M9 22v-3a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v3"></path>
                      <rect width="16" height="20" x="4" y="2" rx="2"></rect>
                    </g>
                  </svg>
                </div>
                <div className="org-card-title-group">
                  <h3 className="org-card-title">Professional Dev Hub</h3>
                  <span className="org-card-status active">Active</span>
                </div>
              </div>
              <div className="org-card-metrics">
                <div className="org-metric">
                  <span className="org-metric-label">Users</span>
                  <span className="org-metric-value">1,147</span>
                </div>
                <div className="org-metric">
                  <span className="org-metric-label">Courses</span>
                  <span className="org-metric-value">68</span>
                </div>
                <div className="org-metric">
                  <span className="org-metric-label">Usage</span>
                  <span className="org-metric-value">79%</span>
                </div>
              </div>
              <div aria-hidden="true" className="org-card-details">
                <p className="section-content">
                  {' '}
                  Professional plan with advanced reporting and analytics
                  features.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
              </div>
            </div>
            <div
              role="group"
              tabindex="0"
              aria-expanded="false"
              className="org-card"
            >
              <div className="org-card-header">
                <div className="org-card-logo">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                  >
                    <g
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    >
                      <path d="M12 10h.01M12 14h.01M12 6h.01M16 10h.01M16 14h.01M16 6h.01M8 10h.01M8 14h.01M8 6h.01M9 22v-3a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v3"></path>
                      <rect width="16" height="20" x="4" y="2" rx="2"></rect>
                    </g>
                  </svg>
                </div>
                <div className="org-card-title-group">
                  <h3 className="org-card-title">Digital Campus Network</h3>
                  <span className="org-card-status active">Active</span>
                </div>
              </div>
              <div className="org-card-metrics">
                <div className="org-metric">
                  <span className="org-metric-label">Users</span>
                  <span className="org-metric-value">2,563</span>
                </div>
                <div className="org-metric">
                  <span className="org-metric-label">Courses</span>
                  <span className="org-metric-value">172</span>
                </div>
                <div className="org-metric">
                  <span className="org-metric-label">Usage</span>
                  <span className="org-metric-value">88%</span>
                </div>
              </div>
              <div aria-hidden="true" className="org-card-details">
                <p className="section-content">
                  {' '}
                  Enterprise plan with multi-region deployment and SSO
                  integration.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
              </div>
            </div>
            <div
              role="group"
              tabindex="0"
              aria-expanded="false"
              className="org-card"
            >
              <div className="org-card-header">
                <div className="org-card-logo">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                  >
                    <g
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    >
                      <path d="M12 10h.01M12 14h.01M12 6h.01M16 10h.01M16 14h.01M16 6h.01M8 10h.01M8 14h.01M8 6h.01M9 22v-3a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v3"></path>
                      <rect width="16" height="20" x="4" y="2" rx="2"></rect>
                    </g>
                  </svg>
                </div>
                <div className="org-card-title-group">
                  <h3 className="org-card-title">Elite Training Group</h3>
                  <span className="org-card-status active">Active</span>
                </div>
              </div>
              <div className="org-card-metrics">
                <div className="org-metric">
                  <span className="org-metric-label">Users</span>
                  <span className="org-metric-value">1,876</span>
                </div>
                <div className="org-metric">
                  <span className="org-metric-label">Courses</span>
                  <span className="org-metric-value">129</span>
                </div>
                <div className="org-metric">
                  <span className="org-metric-label">Usage</span>
                  <span className="org-metric-value">85%</span>
                </div>
              </div>
              <div aria-hidden="true" className="org-card-details">
                <p className="section-content">
                  {' '}
                  Professional plan with customized branding and white-label
                  options.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
              </div>
            </div>
            <div
              role="group"
              tabindex="0"
              aria-expanded="false"
              className="org-card"
            >
              <div className="org-card-header">
                <div className="org-card-logo">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                  >
                    <g
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    >
                      <path d="M12 10h.01M12 14h.01M12 6h.01M16 10h.01M16 14h.01M16 6h.01M8 10h.01M8 14h.01M8 6h.01M9 22v-3a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v3"></path>
                      <rect width="16" height="20" x="4" y="2" rx="2"></rect>
                    </g>
                  </svg>
                </div>
                <div className="org-card-title-group">
                  <h3 className="org-card-title">Future Learning Labs</h3>
                  <span className="org-card-status active">Active</span>
                </div>
              </div>
              <div className="org-card-metrics">
                <div className="org-metric">
                  <span className="org-metric-label">Users</span>
                  <span className="org-metric-value">1,394</span>
                </div>
                <div className="org-metric">
                  <span className="org-metric-label">Courses</span>
                  <span className="org-metric-value">87</span>
                </div>
                <div className="org-metric">
                  <span className="org-metric-label">Usage</span>
                  <span className="org-metric-value">92%</span>
                </div>
              </div>
              <div aria-hidden="true" className="org-card-details">
                <p className="section-content">
                  {' '}
                  Standard plan with high engagement rates and active tutor
                  community.
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
      <section id="billing-section" className="billing-section">
        <div className="billing-container">
          <div className="billing-controls">
            <h2 className="root-admin-dashboard-section-title">
              Quick Actions
            </h2>
            <div className="controls-stack">
              <button className="control-btn btn btn-primary">
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
                <span>Create Invoice</span>
              </button>
              <button className="control-btn btn btn-secondary">
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
                    <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
                    <path d="M3 5v14a9 3 0 0 0 18 0V5"></path>
                    <path d="M3 12a9 3 0 0 0 18 0"></path>
                  </g>
                </svg>
                <span>Allocate Resources</span>
              </button>
              <button className="control-btn btn btn-outline">
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
                    d="M2 5h20M6 12h12m-9 7h6"
                  ></path>
                </svg>
                <span>Apply Filters</span>
              </button>
            </div>
            <div className="aggregated-metrics">
              <h3 className="metrics-heading">Overview</h3>
              <div className="metric-row">
                <span className="metric-row-label">Total MRR</span>
                <span className="metric-row-value">$284,750</span>
              </div>
              <div className="metric-row">
                <span className="metric-row-label">Active Plans</span>
                <span className="metric-row-value">247</span>
              </div>
              <div className="metric-row">
                <span className="metric-row-label">Avg. Storage</span>
                <span className="metric-row-value">35.2 GB</span>
              </div>
              <div className="metric-row">
                <span className="metric-row-label">Compute Credits</span>
                <span className="metric-row-value">12,847</span>
              </div>
            </div>
          </div>
          <div className="billing-content">
            <h2 className="root-admin-dashboard-section-title">
              Billing &amp; Resources
            </h2>
            <p className="section-subtitle">
              {' '}
              Centralized control for institutional scale
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </p>
            <div className="billing-cards">
              <div className="billing-card">
                <button
                  aria-expanded="false"
                  aria-controls="invoices-panel"
                  className="accordion-header"
                >
                  <div className="root-admin-dashboard-accordion-header-content1">
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
                        <rect width="20" height="14" x="2" y="5" rx="2"></rect>
                        <path d="M2 10h20"></path>
                      </g>
                    </svg>
                    <div className="accordion-text">
                      <h3 className="accordion-title">
                        Invoices &amp; Subscriptions
                      </h3>
                      <p className="accordion-summary">42 pending</p>
                    </div>
                  </div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    className="root-admin-dashboard-accordion-chevron1"
                  >
                    <path
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m6 9l6 6l6-6"
                    ></path>
                  </svg>
                </button>
                <div
                  id="invoices-panel"
                  aria-hidden="true"
                  className="accordion-panel"
                >
                  <p className="section-content">
                    {' '}
                    View consolidated and organization-level invoices. Approve
                    charges, schedule billing, and export audit-ready statements
                    with transparent financial governance.
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </p>
                  <div className="invoice-list">
                    <div className="invoice-item">
                      <span className="invoice-org">TechEd University</span>
                      <span className="invoice-amount">$12,480</span>
                    </div>
                    <div className="invoice-item">
                      <span className="invoice-org">
                        Global Learning Institute
                      </span>
                      <span className="invoice-amount">$8,950</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="billing-card">
                <button
                  aria-expanded="false"
                  aria-controls="quotas-panel"
                  className="accordion-header"
                >
                  <div className="root-admin-dashboard-accordion-header-content2">
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
                        <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
                        <path d="M3 5v14a9 3 0 0 0 18 0V5"></path>
                        <path d="M3 12a9 3 0 0 0 18 0"></path>
                      </g>
                    </svg>
                    <div className="accordion-text">
                      <h3 className="accordion-title">
                        Quotas &amp; Allocation
                      </h3>
                      <p className="accordion-summary">8.7 TB / 13 TB</p>
                    </div>
                  </div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    className="root-admin-dashboard-accordion-chevron2"
                  >
                    <path
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m6 9l6 6l6-6"
                    ></path>
                  </svg>
                </button>
                <div
                  id="quotas-panel"
                  aria-hidden="true"
                  className="accordion-panel"
                >
                  <p className="section-content">
                    {' '}
                    Provision seats, storage, and compute credits across
                    organizations. Set soft and hard limits, reassign unused
                    capacity instantly.
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </p>
                  <div className="quota-bars">
                    <div className="quota-bar-item">
                      <span className="quota-label">Storage</span>
                      <div className="quota-bar">
                        <div className="root-admin-dashboard-quota-bar-fill1 quota-bar-fill"></div>
                      </div>
                      <span className="quota-value">68%</span>
                    </div>
                    <div className="quota-bar-item">
                      <span className="quota-label">Compute</span>
                      <div className="quota-bar">
                        <div className="root-admin-dashboard-quota-bar-fill2 quota-bar-fill"></div>
                      </div>
                      <span className="quota-value">52%</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="billing-card">
                <button
                  aria-expanded="false"
                  aria-controls="plans-panel"
                  className="accordion-header"
                >
                  <div className="root-admin-dashboard-accordion-header-content3">
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
                    <div className="accordion-text">
                      <h3 className="accordion-title">
                        Plans &amp; Optimization
                      </h3>
                      <p className="accordion-summary">3 recommendations</p>
                    </div>
                  </div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    className="root-admin-dashboard-accordion-chevron3"
                  >
                    <path
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m6 9l6 6l6-6"
                    ></path>
                  </svg>
                </button>
                <div
                  id="plans-panel"
                  aria-hidden="true"
                  className="accordion-panel"
                >
                  <p className="section-content">
                    {' '}
                    Compare active plans and usage trends. Receive proactive
                    recommendations to consolidate subscriptions or right-size
                    resources.
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </p>
                  <div className="plan-recommendations">
                    <div className="recommendation-item">
                      <span className="recommendation-icon">
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
                      </span>
                      <span className="recommendation-text">
                        {' '}
                        Consider upgrading 2 orgs to Enterprise
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="organizations-section" className="organizations-section">
        <div className="organizations-container">
          <div
            role="region"
            aria-labelledby="org-overview-heading"
            className="featured-top"
          >
            <div className="featured-top-content">
              <h2
                id="org-overview-heading"
                className="root-admin-dashboard-section-title"
              >
                Organizations
              </h2>
              <p className="section-subtitle">
                {' '}
                Central control for every institution in your network
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </p>
            </div>
            <div className="featured-top-actions">
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
                  Add Organization
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </button>
            </div>
          </div>
          <div className="organizations-layout">
            <div role="list" className="org-list">
              <div className="org-list-header">
                <div className="search-box">
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
                      <path d="m21 21l-4.34-4.34"></path>
                      <circle cx="11" cy="11" r="8"></circle>
                    </g>
                  </svg>
                  <input
                    type="search"
                    placeholder="Search organizations..."
                    aria-label="Search organizations"
                  />
                </div>
                <button
                  aria-label="Filter organizations"
                  className="filter-btn"
                >
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
                      d="M2 5h20M6 12h12m-9 7h6"
                    ></path>
                  </svg>
                </button>
              </div>
              <div className="org-list-items">
                <div
                  role="listitem"
                  tabindex="0"
                  className="org-list-item active"
                >
                  <div className="org-list-item-icon">
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
                        <path d="M12 10h.01M12 14h.01M12 6h.01M16 10h.01M16 14h.01M16 6h.01M8 10h.01M8 14h.01M8 6h.01M9 22v-3a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v3"></path>
                        <rect width="16" height="20" x="4" y="2" rx="2"></rect>
                      </g>
                    </svg>
                  </div>
                  <div className="org-list-item-content">
                    <h3 className="org-list-item-title">TechEd University</h3>
                    <p className="org-list-item-meta">
                      2,847 users · Enterprise
                    </p>
                  </div>
                  <span className="org-list-item-badge">Active</span>
                </div>
                <div role="listitem" tabindex="0" className="org-list-item">
                  <div className="org-list-item-icon">
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
                        <path d="M12 10h.01M12 14h.01M12 6h.01M16 10h.01M16 14h.01M16 6h.01M8 10h.01M8 14h.01M8 6h.01M9 22v-3a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v3"></path>
                        <rect width="16" height="20" x="4" y="2" rx="2"></rect>
                      </g>
                    </svg>
                  </div>
                  <div className="org-list-item-content">
                    <h3 className="org-list-item-title">
                      Global Learning Institute
                    </h3>
                    <p className="org-list-item-meta">
                      1,523 users · Professional
                    </p>
                  </div>
                  <span className="org-list-item-badge">Active</span>
                </div>
                <div role="listitem" tabindex="0" className="org-list-item">
                  <div className="org-list-item-icon">
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
                        <path d="M12 10h.01M12 14h.01M12 6h.01M16 10h.01M16 14h.01M16 6h.01M8 10h.01M8 14h.01M8 6h.01M9 22v-3a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v3"></path>
                        <rect width="16" height="20" x="4" y="2" rx="2"></rect>
                      </g>
                    </svg>
                  </div>
                  <div className="org-list-item-content">
                    <h3 className="org-list-item-title">Innovation Academy</h3>
                    <p className="org-list-item-meta">892 users · Standard</p>
                  </div>
                  <span className="org-list-item-badge warning">Review</span>
                </div>
                <div role="listitem" tabindex="0" className="org-list-item">
                  <div className="org-list-item-icon">
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
                        <path d="M12 10h.01M12 14h.01M12 6h.01M16 10h.01M16 14h.01M16 6h.01M8 10h.01M8 14h.01M8 6h.01M9 22v-3a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v3"></path>
                        <rect width="16" height="20" x="4" y="2" rx="2"></rect>
                      </g>
                    </svg>
                  </div>
                  <div className="org-list-item-content">
                    <h3 className="org-list-item-title">
                      NextGen Skills Center
                    </h3>
                    <p className="org-list-item-meta">
                      3,204 users · Enterprise
                    </p>
                  </div>
                  <span className="org-list-item-badge">Active</span>
                </div>
                <div role="listitem" tabindex="0" className="org-list-item">
                  <div className="org-list-item-icon">
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
                        <path d="M12 10h.01M12 14h.01M12 6h.01M16 10h.01M16 14h.01M16 6h.01M8 10h.01M8 14h.01M8 6h.01M9 22v-3a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v3"></path>
                        <rect width="16" height="20" x="4" y="2" rx="2"></rect>
                      </g>
                    </svg>
                  </div>
                  <div className="org-list-item-content">
                    <h3 className="org-list-item-title">
                      Professional Dev Hub
                    </h3>
                    <p className="org-list-item-meta">
                      1,147 users · Professional
                    </p>
                  </div>
                  <span className="org-list-item-badge">Active</span>
                </div>
              </div>
            </div>
            <div
              role="region"
              aria-labelledby="org-detail-heading"
              className="org-detail"
            >
              <h2 id="org-detail-heading" className="detail-title">
                TechEd University
              </h2>
              <div className="detail-sections">
                <div className="detail-section">
                  <h3 className="detail-section-title">Profile Overview</h3>
                  <div className="detail-grid">
                    <div className="detail-item">
                      <span className="detail-label">Status</span>
                      <span className="detail-value">Active</span>
                    </div>
                    <div className="detail-item">
                      <span className="detail-label">Subscription</span>
                      <span className="detail-value">Enterprise</span>
                    </div>
                    <div className="detail-item">
                      <span className="detail-label">Total Users</span>
                      <span className="detail-value">2,847</span>
                    </div>
                    <div className="detail-item">
                      <span className="detail-label">Active Courses</span>
                      <span className="detail-value">186</span>
                    </div>
                  </div>
                </div>
                <div className="detail-section">
                  <h3 className="detail-section-title">
                    Access &amp; Permissions
                  </h3>
                  <p className="section-content">
                    {' '}
                    Define role hierarchies, set custom permissions, and apply
                    policy templates to ensure consistent learning governance.
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </p>
                  <div className="permission-list">
                    <div className="permission-item">
                      <span className="permission-role">Admins</span>
                      <span className="permission-count">12</span>
                    </div>
                    <div className="permission-item">
                      <span className="permission-role">Tutors</span>
                      <span className="permission-count">284</span>
                    </div>
                    <div className="permission-item">
                      <span className="permission-role">Students</span>
                      <span className="permission-count">2,551</span>
                    </div>
                  </div>
                </div>
                <div className="detail-section">
                  <h3 className="detail-section-title">Recent Activity</h3>
                  <div className="activity-list">
                    <div className="activity-item">
                      <span className="activity-time">2 hours ago</span>
                      <span className="activity-text">
                        Added 24 new students
                      </span>
                    </div>
                    <div className="activity-item">
                      <span className="activity-time">5 hours ago</span>
                      <span className="activity-text">
                        Published 3 new courses
                      </span>
                    </div>
                    <div className="activity-item">
                      <span className="activity-time">1 day ago</span>
                      <span className="activity-text">
                        Updated subscription plan
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="detail-actions">
                <button className="btn btn-primary">Edit Organization</button>
                <button className="btn btn-outline">View Full Report</button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="usage-section" className="usage-section">
        <div className="usage-container">
          <div className="usage-kpi-rail">
            <h2 className="root-admin-dashboard-section-title">Key Metrics</h2>
            <div className="kpi-stack">
              <div className="kpi-item">
                <div className="kpi-content">
                  <span className="kpi-label">Active Users</span>
                  <span className="kpi-value">18,429</span>
                </div>
                <div className="kpi-icon">
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
                </div>
              </div>
              <div className="kpi-item">
                <div className="kpi-content">
                  <span className="kpi-label">Courses</span>
                  <span className="kpi-value">1,284</span>
                </div>
                <div className="kpi-icon">
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
                      <rect width="7" height="9" x="3" y="3" rx="1"></rect>
                      <rect width="7" height="5" x="14" y="3" rx="1"></rect>
                      <rect width="7" height="9" x="14" y="12" rx="1"></rect>
                      <rect width="7" height="5" x="3" y="16" rx="1"></rect>
                    </g>
                  </svg>
                </div>
              </div>
              <div className="kpi-item">
                <div className="kpi-content">
                  <span className="kpi-label">Avg Pass Rate</span>
                  <span className="kpi-value">87.3%</span>
                </div>
                <div className="kpi-icon">
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
                      d="M20 6L9 17l-5-5"
                    ></path>
                  </svg>
                </div>
              </div>
              <div className="kpi-item">
                <div className="kpi-content">
                  <span className="kpi-label">Sessions Today</span>
                  <span className="kpi-value">3,842</span>
                </div>
                <div className="kpi-icon">
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
                </div>
              </div>
            </div>
          </div>
          <div className="usage-cards">
            <div className="usage-card">
              <div className="usage-card-header">
                <h3 className="usage-card-title">TechEd University</h3>
                <span className="usage-card-badge">High Activity</span>
              </div>
              <div className="usage-card-metrics">
                <div className="usage-metric">
                  <span className="usage-metric-label">Enrollment Rate</span>
                  <span className="usage-metric-value">94%</span>
                </div>
                <div className="usage-metric">
                  <span className="usage-metric-label">Completion</span>
                  <span className="usage-metric-value">89%</span>
                </div>
                <div className="usage-metric">
                  <span className="usage-metric-label">Engagement</span>
                  <span className="usage-metric-value">4.2/5</span>
                </div>
              </div>
            </div>
            <div className="usage-card">
              <div className="usage-card-header">
                <h3 className="usage-card-title">Global Learning Institute</h3>
                <span className="usage-card-badge">Growing</span>
              </div>
              <div className="usage-card-metrics">
                <div className="usage-metric">
                  <span className="usage-metric-label">Enrollment Rate</span>
                  <span className="usage-metric-value">87%</span>
                </div>
                <div className="usage-metric">
                  <span className="usage-metric-label">Completion</span>
                  <span className="usage-metric-value">82%</span>
                </div>
                <div className="usage-metric">
                  <span className="usage-metric-label">Engagement</span>
                  <span className="usage-metric-value">3.9/5</span>
                </div>
              </div>
            </div>
            <div className="usage-card">
              <div className="usage-card-header">
                <h3 className="usage-card-title">Innovation Academy</h3>
                <span className="usage-card-badge warning">
                  Needs Attention
                </span>
              </div>
              <div className="usage-card-metrics">
                <div className="usage-metric">
                  <span className="usage-metric-label">Enrollment Rate</span>
                  <span className="usage-metric-value">62%</span>
                </div>
                <div className="usage-metric">
                  <span className="usage-metric-label">Completion</span>
                  <span className="usage-metric-value">71%</span>
                </div>
                <div className="usage-metric">
                  <span className="usage-metric-label">Engagement</span>
                  <span className="usage-metric-value">3.4/5</span>
                </div>
              </div>
            </div>
            <div className="usage-card">
              <div className="usage-card-header">
                <h3 className="usage-card-title">NextGen Skills Center</h3>
                <span className="usage-card-badge">High Activity</span>
              </div>
              <div className="usage-card-metrics">
                <div className="usage-metric">
                  <span className="usage-metric-label">Enrollment Rate</span>
                  <span className="usage-metric-value">91%</span>
                </div>
                <div className="usage-metric">
                  <span className="usage-metric-label">Completion</span>
                  <span className="usage-metric-value">86%</span>
                </div>
                <div className="usage-metric">
                  <span className="usage-metric-label">Engagement</span>
                  <span className="usage-metric-value">4.1/5</span>
                </div>
              </div>
            </div>
            <div className="usage-card">
              <div className="usage-card-header">
                <h3 className="usage-card-title">Professional Dev Hub</h3>
                <span className="usage-card-badge">Stable</span>
              </div>
              <div className="usage-card-metrics">
                <div className="usage-metric">
                  <span className="usage-metric-label">Enrollment Rate</span>
                  <span className="usage-metric-value">79%</span>
                </div>
                <div className="usage-metric">
                  <span className="usage-metric-label">Completion</span>
                  <span className="usage-metric-value">78%</span>
                </div>
                <div className="usage-metric">
                  <span className="usage-metric-label">Engagement</span>
                  <span className="usage-metric-value">3.7/5</span>
                </div>
              </div>
            </div>
            <div className="usage-card">
              <div className="usage-card-header">
                <h3 className="usage-card-title">Digital Campus Network</h3>
                <span className="usage-card-badge">High Activity</span>
              </div>
              <div className="usage-card-metrics">
                <div className="usage-metric">
                  <span className="usage-metric-label">Enrollment Rate</span>
                  <span className="usage-metric-value">88%</span>
                </div>
                <div className="usage-metric">
                  <span className="usage-metric-label">Completion</span>
                  <span className="usage-metric-value">84%</span>
                </div>
                <div className="usage-metric">
                  <span className="usage-metric-label">Engagement</span>
                  <span className="usage-metric-value">4.0/5</span>
                </div>
              </div>
            </div>
          </div>
          <div className="usage-insights-rail">
            <h2 className="root-admin-dashboard-section-title">Insights</h2>
            <div className="insights-stack">
              <div className="insight-card">
                <div className="insight-icon">
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
                </div>
                <h3 className="insight-title">Engagement Up</h3>
                <p className="insight-text">
                  {' '}
                  Platform engagement increased 8.3% this month
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
              </div>
              <div className="insight-card">
                <div className="insight-icon">
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
                      d="M12 13h.01M12 6v3M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"
                    ></path>
                  </svg>
                </div>
                <h3 className="insight-title">Action Required</h3>
                <p className="insight-text">
                  Innovation Academy needs resource review
                </p>
              </div>
              <div className="insight-card">
                <div className="insight-icon">
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
                      <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
                      <path d="M3 5v14a9 3 0 0 0 18 0V5"></path>
                      <path d="M3 12a9 3 0 0 0 18 0"></path>
                    </g>
                  </svg>
                </div>
                <h3 className="insight-title">Storage Forecast</h3>
                <p className="insight-text">
                  Projected to reach 85% capacity in 45 days
                </p>
              </div>
            </div>
            <button className="export-btn btn btn-primary">
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
          </div>
        </div>
      </section>
      <section id="visibility-section" className="visibility-section">
        <div className="visibility-container">
          <div role="tablist" className="visibility-tabs">
            <button
              role="tab"
              aria-selected="true"
              aria-controls="roles-panel"
              id="roles-tab"
              className="tab-btn active"
            >
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
              <span>Role Policies</span>
            </button>
            <button
              role="tab"
              aria-selected="false"
              aria-controls="access-panel"
              id="access-tab"
              className="tab-btn"
            >
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
              <span>Access Matrix</span>
            </button>
            <button
              role="tab"
              aria-selected="false"
              aria-controls="audit-panel"
              id="audit-tab"
              className="tab-btn"
            >
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
                  d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"
                ></path>
              </svg>
              <span>Audit &amp; Compliance</span>
            </button>
          </div>
          <div className="visibility-core">
            <div className="visibility-archive">
              <h2 className="root-admin-dashboard-section-title">
                Quick Filters
              </h2>
              <div className="filter-group">
                <button className="filter-option active">
                  All Organizations
                </button>
                <button className="filter-option">Enterprise Plans</button>
                <button className="filter-option">Active Users</button>
                <button className="filter-option">Pending Reviews</button>
              </div>
              <div className="archive-stats">
                <h3 className="stats-heading">Current Status</h3>
                <div className="stat-row">
                  <span className="stat-label">Total Roles</span>
                  <span className="stat-value">4</span>
                </div>
                <div className="stat-row">
                  <span className="stat-label">Active Policies</span>
                  <span className="stat-value">27</span>
                </div>
                <div className="stat-row">
                  <span className="stat-label">Custom Permissions</span>
                  <span className="stat-value">142</span>
                </div>
              </div>
            </div>
            <div
              id="roles-panel"
              role="tabpanel"
              aria-labelledby="roles-tab"
              className="visibility-content"
            >
              <h2 className="root-admin-dashboard-section-title">
                Visibility &amp; Access
              </h2>
              <p className="section-subtitle">
                {' '}
                Role-based control for institutional security and governance
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </p>
              <div className="access-cards">
                <div className="access-card">
                  <div className="access-card-header">
                    <h3 className="access-card-title">Root Admins</h3>
                    <span className="access-card-count">8 users</span>
                  </div>
                  <div className="access-card-body">
                    <p className="section-content">
                      {' '}
                      Full platform control including organization management,
                      billing, and global settings. Can delegate admin rights
                      and enforce policies across all institutions.
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </p>
                    <div className="permission-tags">
                      <span className="permission-tag">All Access</span>
                      <span className="permission-tag">Billing</span>
                      <span className="permission-tag">Resources</span>
                    </div>
                  </div>
                </div>
                <div className="access-card">
                  <div className="access-card-header">
                    <h3 className="access-card-title">Organization Admins</h3>
                    <span className="access-card-count">247 users</span>
                  </div>
                  <div className="access-card-body">
                    <p className="section-content">
                      {' '}
                      Manage courses, users, and content within their
                      organization. Can track performance metrics and generate
                      reports for their institution.
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </p>
                    <div className="permission-tags">
                      <span className="permission-tag">Org Management</span>
                      <span className="permission-tag">Reports</span>
                      <span className="permission-tag">Users</span>
                    </div>
                  </div>
                </div>
                <div className="access-card">
                  <div className="access-card-header">
                    <h3 className="access-card-title">Tutors</h3>
                    <span className="access-card-count">3,842 users</span>
                  </div>
                  <div className="access-card-body">
                    <p className="section-content">
                      {' '}
                      Create and manage courses, grade assignments, and
                      communicate with students. Access coding workspace and
                      voice bot for enhanced teaching.
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </p>
                    <div className="permission-tags">
                      <span className="permission-tag">Course Creation</span>
                      <span className="permission-tag">Grading</span>
                      <span className="permission-tag">Communication</span>
                    </div>
                  </div>
                </div>
                <div className="access-card">
                  <div className="access-card-header">
                    <h3 className="access-card-title">Students</h3>
                    <span className="access-card-count">14,332 users</span>
                  </div>
                  <div className="access-card-body">
                    <p className="section-content">
                      {' '}
                      Access enrolled courses, view progress, submit
                      assignments, and earn badges. Use integrated tools
                      including notes, coding workspace, and voice bot.
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </p>
                    <div className="permission-tags">
                      <span className="permission-tag">Course Access</span>
                      <span className="permission-tag">Submissions</span>
                      <span className="permission-tag">Progress</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="access-actions">
                <button className="btn btn-primary">
                  Create Role Template
                </button>
                <button className="btn btn-outline">
                  Export Access Report
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="alerts-section" className="alerts-section">
        <div className="alerts-container">
          <div className="alerts-feed">
            <div className="alerts-header">
              <h2 className="root-admin-dashboard-section-title">
                Alerts &amp; Notifications
              </h2>
              <button className="btn btn-outline btn-sm">Mark All Read</button>
            </div>
            <div className="alert-group">
              <h3 className="alert-group-heading">Critical Alerts</h3>
              <div
                role="article"
                aria-live="polite"
                className="alert-card critical"
              >
                <div className="alert-indicator"></div>
                <div className="alert-content">
                  <div className="alert-header">
                    <h4 className="alert-title">Billing Threshold Exceeded</h4>
                    <span className="alert-time">15 min ago</span>
                  </div>
                  <p className="alert-description">
                    {' '}
                    Innovation Academy has exceeded 95% of allocated storage
                    quota. Immediate action required to prevent service
                    disruption.
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </p>
                  <div className="alert-meta">
                    <span className="alert-org">Innovation Academy</span>
                    <span className="alert-category">Resource Management</span>
                  </div>
                </div>
                <div className="alert-actions">
                  <button
                    aria-label="Review allocation"
                    className="btn btn-primary btn-sm"
                  >
                    {' '}
                    Review
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </button>
                  <button
                    aria-label="Dismiss alert"
                    className="btn btn-sm btn-link"
                  >
                    {' '}
                    Dismiss
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </button>
                </div>
              </div>
              <div
                role="article"
                aria-live="polite"
                className="alert-card critical"
              >
                <div className="alert-indicator"></div>
                <div className="alert-content">
                  <div className="alert-header">
                    <h4 className="alert-title">Payment Failed</h4>
                    <span className="alert-time">2 hours ago</span>
                  </div>
                  <p className="alert-description">
                    {' '}
                    Monthly invoice payment failed for Global Learning
                    Institute. Current usage: $8,950. Account will be suspended
                    in 48 hours without payment.
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </p>
                  <div className="alert-meta">
                    <span className="alert-org">Global Learning Institute</span>
                    <span className="alert-category">Billing</span>
                  </div>
                </div>
                <div className="alert-actions">
                  <button
                    aria-label="Contact organization"
                    className="btn btn-primary btn-sm"
                  >
                    {' '}
                    Contact
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </button>
                  <button
                    aria-label="Dismiss alert"
                    className="btn btn-sm btn-link"
                  >
                    {' '}
                    Dismiss
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </button>
                </div>
              </div>
            </div>
            <div className="alert-group">
              <h3 className="alert-group-heading">Resource Limits</h3>
              <div
                role="article"
                aria-live="polite"
                className="alert-card warning"
              >
                <div className="alert-indicator"></div>
                <div className="alert-content">
                  <div className="alert-header">
                    <h4 className="alert-title">Storage Approaching Limit</h4>
                    <span className="alert-time">4 hours ago</span>
                  </div>
                  <p className="alert-description">
                    {' '}
                    TechEd University at 87% storage capacity. Projected to
                    reach limit in 18 days based on current usage trends.
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </p>
                  <div className="alert-meta">
                    <span className="alert-org">TechEd University</span>
                    <span className="alert-category">Storage</span>
                  </div>
                </div>
                <div className="alert-actions">
                  <button
                    aria-label="Allocate resources"
                    className="btn btn-secondary btn-sm"
                  >
                    {' '}
                    Allocate
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </button>
                  <button
                    aria-label="Dismiss alert"
                    className="btn btn-sm btn-link"
                  >
                    {' '}
                    Dismiss
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </button>
                </div>
              </div>
              <div
                role="article"
                aria-live="polite"
                className="alert-card warning"
              >
                <div className="alert-indicator"></div>
                <div className="alert-content">
                  <div className="alert-header">
                    <h4 className="alert-title">Compute Credits Low</h4>
                    <span className="alert-time">6 hours ago</span>
                  </div>
                  <p className="alert-description">
                    {' '}
                    Professional Dev Hub has 12% compute credits remaining.
                    Usage spike detected from coding workspace sessions.
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </p>
                  <div className="alert-meta">
                    <span className="alert-org">Professional Dev Hub</span>
                    <span className="alert-category">Compute</span>
                  </div>
                </div>
                <div className="alert-actions">
                  <button
                    aria-label="Add credits"
                    className="btn btn-secondary btn-sm"
                  >
                    {' '}
                    Add Credits
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </button>
                  <button
                    aria-label="Dismiss alert"
                    className="btn btn-sm btn-link"
                  >
                    {' '}
                    Dismiss
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </button>
                </div>
              </div>
            </div>
            <div className="alert-group">
              <h3 className="alert-group-heading">Organization Health</h3>
              <div
                role="article"
                aria-live="polite"
                className="alert-card info"
              >
                <div className="alert-indicator"></div>
                <div className="alert-content">
                  <div className="alert-header">
                    <h4 className="alert-title">Low Engagement Detected</h4>
                    <span className="alert-time">1 day ago</span>
                  </div>
                  <p className="alert-description">
                    {' '}
                    Elite Training Group shows 34% decrease in active sessions
                    over past 14 days. Recommended: Outreach to org admin.
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </p>
                  <div className="alert-meta">
                    <span className="alert-org">Elite Training Group</span>
                    <span className="alert-category">Engagement</span>
                  </div>
                </div>
                <div className="alert-actions">
                  <button
                    aria-label="View details"
                    className="btn btn-outline btn-sm"
                  >
                    {' '}
                    Details
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </button>
                  <button
                    aria-label="Dismiss alert"
                    className="btn btn-sm btn-link"
                  >
                    {' '}
                    Dismiss
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </button>
                </div>
              </div>
              <div
                role="article"
                aria-live="polite"
                className="alert-card info"
              >
                <div className="alert-indicator"></div>
                <div className="alert-content">
                  <div className="alert-header">
                    <h4 className="alert-title">Compliance Review Due</h4>
                    <span className="alert-time">1 day ago</span>
                  </div>
                  <p className="alert-description">
                    {' '}
                    Digital Campus Network quarterly access review due in 7
                    days. Ensure all permissions and roles are current.
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </p>
                  <div className="alert-meta">
                    <span className="alert-org">Digital Campus Network</span>
                    <span className="alert-category">Compliance</span>
                  </div>
                </div>
                <div className="alert-actions">
                  <button
                    aria-label="Schedule review"
                    className="btn btn-outline btn-sm"
                  >
                    {' '}
                    Schedule
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </button>
                  <button
                    aria-label="Dismiss alert"
                    className="btn btn-sm btn-link"
                  >
                    {' '}
                    Dismiss
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="alerts-sidebar">
            <div className="alerts-controls">
              <h3 className="sidebar-title">Filters</h3>
              <div className="filter-buttons">
                <button className="filter-btn active">All</button>
                <button className="filter-btn">Critical</button>
                <button className="filter-btn">Warnings</button>
                <button className="filter-btn">Info</button>
              </div>
              <div className="category-filters">
                <label className="checkbox-label">
                  <input type="checkbox" checked="true" />
                  <span>Billing</span>
                </label>
                <label className="checkbox-label">
                  <input type="checkbox" checked="true" />
                  <span>Resources</span>
                </label>
                <label className="checkbox-label">
                  <input type="checkbox" checked="true" />
                  <span>Org Health</span>
                </label>
                <label className="checkbox-label">
                  <input type="checkbox" checked="true" />
                  <span>Compliance</span>
                </label>
              </div>
            </div>
            <div className="alerts-trends">
              <h3 className="sidebar-title">Alert Trends</h3>
              <div className="trend-item">
                <span className="trend-label">This Week</span>
                <span className="trend-value">28 alerts</span>
              </div>
              <div className="trend-item">
                <span className="trend-label">Last Week</span>
                <span className="trend-value">34 alerts</span>
              </div>
              <div className="trend-item">
                <span className="trend-label">Avg Response</span>
                <span className="trend-value">2.4 hours</span>
              </div>
              <div className="trend-summary">
                <p className="section-content">
                  {' '}
                  Alert volume decreased 18% this week. Average response time
                  improved by 32 minutes.
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
      <div className="root-admin-dashboard-container4">
        <div className="root-admin-dashboard-container5">
          <Script
            html={`<style>
        @keyframes heroFadeIn {to {opacity: 1;
transform: translateY(0);}}@keyframes alertFadeIn {to {opacity: 1;
transform: translateY(0);}}
        </style> `}
          ></Script>
        </div>
      </div>
      <div className="root-admin-dashboard-container6">
        <div className="root-admin-dashboard-container7">
          <Script
            html={`<script defer data-name="root-admin-dashboard">
(function(){
  // Organization card expand/collapse
  const orgCards = document.querySelectorAll(".org-card")
  orgCards.forEach((card) => {
    card.addEventListener("click", () => {
      const isExpanded = card.getAttribute("aria-expanded") === "true"
      card.setAttribute("aria-expanded", !isExpanded)
      const details = card.querySelector(".org-card-details")
      details.setAttribute("aria-hidden", isExpanded)
    })

    card.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault()
        card.click()
      }
    })
  })

  // Accordion functionality for billing cards
  const accordionHeaders = document.querySelectorAll(".accordion-header")
  accordionHeaders.forEach((header) => {
    header.addEventListener("click", () => {
      const isExpanded = header.getAttribute("aria-expanded") === "true"
      header.setAttribute("aria-expanded", !isExpanded)
      const panel = header.nextElementSibling
      panel.setAttribute("aria-hidden", isExpanded)
    })
  })

  // Tab functionality for visibility section
  const tabButtons = document.querySelectorAll(".tab-btn")
  const tabPanels = document.querySelectorAll('[role="tabpanel"]')

  tabButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const targetId = button.getAttribute("aria-controls")

      tabButtons.forEach((btn) => {
        btn.classList.remove("active")
        btn.setAttribute("aria-selected", "false")
      })

      button.classList.add("active")
      button.setAttribute("aria-selected", "true")

      tabPanels.forEach((panel) => {
        panel.style.display = "none"
      })

      const targetPanel = document.getElementById(targetId)
      if (targetPanel) {
        targetPanel.style.display = "flex"
      }
    })
  })

  // Filter buttons in alerts section
  const filterButtons = document.querySelectorAll(".filter-buttons .filter-btn")
  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      filterButtons.forEach((btn) => btn.classList.remove("active"))
      button.classList.add("active")
    })
  })

  // Organization list item selection
  const orgListItems = document.querySelectorAll(".org-list-item")
  orgListItems.forEach((item) => {
    item.addEventListener("click", () => {
      orgListItems.forEach((i) => i.classList.remove("active"))
      item.classList.add("active")
    })

    item.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault()
        item.click()
      }
    })
  })

  // Filter options toggle
  const filterOptions = document.querySelectorAll(".filter-option")
  filterOptions.forEach((option) => {
    option.addEventListener("click", () => {
      filterOptions.forEach((opt) => opt.classList.remove("active"))
      option.classList.add("active")
    })
  })

  // Metric animation on scroll
  const observerOptions = {
    threshold: 0.2,
    rootMargin: "0px 0px -50px 0px",
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1"
        entry.target.style.transform = "translateY(0)"
      }
    })
  }, observerOptions)

  const animatedElements = document.querySelectorAll(
    ".priority-metric-card, .usage-card, .access-card"
  )
  animatedElements.forEach((el) => {
    el.style.opacity = "0"
    el.style.transform = "translateY(20px)"
    el.style.transition = \`opacity \${getComputedStyle(document.documentElement)
      .getPropertyValue("--animation-duration-standard")
      .trim()} \${getComputedStyle(document.documentElement)
      .getPropertyValue("--animation-curve-primary")
      .trim()}, transform \${getComputedStyle(document.documentElement)
      .getPropertyValue("--animation-duration-standard")
      .trim()} \${getComputedStyle(document.documentElement)
      .getPropertyValue("--animation-curve-primary")
      .trim()}\`
    observer.observe(el)
  })
})()
</script>`}
          ></Script>
        </div>
      </div>
      <Footer></Footer>
      <a href="https://play.teleporthq.io/signup">
        <div
          aria-label="Sign up to TeleportHQ"
          className="root-admin-dashboard-container8"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 19 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="root-admin-dashboard-icon255"
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
          <span className="root-admin-dashboard-text44">
            Built in TeleportHQ
          </span>
        </div>
      </a>
    </div>
  )
}

export default RootAdminDashboard

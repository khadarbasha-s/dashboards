import React from 'react'

import Script from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import Navigation from '../../components/navigation.js'
import Footer from '../../components/footer'
import './user.css'

const StudentDashboard = (props) => {
  return (
    <div className="student-dashboard-container1">
      <Helmet>
        <title>Student-Dashboard - Apt Acrobatic Skunk</title>
        <meta
          property="og:title"
          content="Student-Dashboard - Apt Acrobatic Skunk"
        />
      </Helmet>
      <Navigation></Navigation>
      <div className="student-dashboard-container2">
        <div className="student-dashboard-container3">
          <Script
            html={`<style>
#dashboard-main {
  background: var(--color-surface);
  color: var(--color-on-surface);
  min-height: 100vh;
  position: relative;
  overflow-x: hidden;
}
@media (prefers-reduced-motion: reduce) {
*, *::before, *::after {
  animation-duration: 0.01ms !important;
  animation-iteration-count: 1 !important;
  transition-duration: 0.01ms !important;
}
}
</style>`}
          ></Script>
        </div>
      </div>
      <main id="dashboard-main">
        <section
          id="dashboard-overview"
          role="region"
          aria-label="Dashboard Overview"
          className="dashboard-section"
        >
          <div className="dashboard-container">
            <div className="dashboard-grid">
              <div className="left-column">
                <div
                  role="group"
                  aria-labelledby="progress-title"
                  className="card progress-card"
                >
                  <div className="card-header">
                    <h1 id="progress-title" className="card-title">
                      Progress Snapshot
                    </h1>
                    <div aria-hidden="true" className="pulse-indicator"></div>
                  </div>
                  <div className="metrics-grid">
                    <div className="metric-item">
                      <span className="metric-label">Overall</span>
                      <span className="metric-value">
                        <span>
                          {' '}
                          68
                          <span
                            dangerouslySetInnerHTML={{
                              __html: ' ',
                            }}
                          />
                        </span>
                        <span className="student-dashboard-metric-unit1">
                          %
                        </span>
                      </span>
                    </div>
                    <div className="metric-item">
                      <span className="metric-label">Streak</span>
                      <span className="metric-value">
                        <span>
                          {' '}
                          12
                          <span
                            dangerouslySetInnerHTML={{
                              __html: ' ',
                            }}
                          />
                        </span>
                        <span className="student-dashboard-metric-unit2">
                          days
                        </span>
                      </span>
                    </div>
                    <div className="metric-item">
                      <span className="metric-label">Active</span>
                      <span className="metric-value">
                        <span>
                          {' '}
                          3
                          <span
                            dangerouslySetInnerHTML={{
                              __html: ' ',
                            }}
                          />
                        </span>
                        <span className="student-dashboard-metric-unit3">
                          courses
                        </span>
                      </span>
                    </div>
                  </div>
                  <div className="progress-bar-wrapper">
                    <div
                      role="progressbar"
                      aria-valuenow="68"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      className="progress-bar"
                    >
                      <div className="student-dashboard-progress-fill1 progress-fill"></div>
                    </div>
                  </div>
                </div>
                <div
                  role="group"
                  aria-labelledby="pulse-title"
                  className="card pulse-card"
                >
                  <h2 id="pulse-title" className="card-title">
                    Learning Pulse
                  </h2>
                  <div className="pulse-content">
                    <div className="pulse-ring">
                      <svg viewBox="0 0 120 120" className="pulse-svg">
                        <circle
                          cx="60"
                          cy="60"
                          r="50"
                          className="pulse-track"
                        ></circle>
                        <circle
                          cx="60"
                          cy="60"
                          r="50"
                          className="student-dashboard-pulse-progress pulse-progress"
                        ></circle>
                      </svg>
                      <div className="pulse-center">
                        <span className="pulse-value">91</span>
                        <span className="pulse-label">Engagement</span>
                      </div>
                    </div>
                    <div className="pulse-stats">
                      <div className="pulse-stat">
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
                            d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"
                          ></path>
                        </svg>
                        <span>High Activity</span>
                      </div>
                      <div className="pulse-stat">
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
                            d="m16 18l6-6l-6-6M8 6l-6 6l6 6"
                          ></path>
                        </svg>
                        <span>3 Labs Completed</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="quick-launch-rail">
                  <h3 className="rail-title">Quick Launch</h3>
                  <button aria-label="Open My Courses" className="rail-btn btn">
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
                    <span>My Courses</span>
                  </button>
                  <button aria-label="Open Calendar" className="rail-btn btn">
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
                        <path d="M8 2v4m8-4v4"></path>
                        <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                        <path d="M3 10h18"></path>
                      </g>
                    </svg>
                    <span>Calendar</span>
                  </button>
                  <button aria-label="Open Notes" className="rail-btn btn">
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
                        <path d="M16 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8Z"></path>
                        <path d="M15 3v4a2 2 0 0 0 2 2h4"></path>
                      </g>
                    </svg>
                    <span>Notes</span>
                  </button>
                </div>
              </div>
              <div className="right-column">
                <div
                  role="group"
                  aria-labelledby="deadlines-title"
                  className="card deadlines-card"
                >
                  <h2 id="deadlines-title" className="card-title">
                    Upcoming Deadlines
                  </h2>
                  <ul aria-live="polite" className="deadline-list">
                    <li className="deadline-item urgent">
                      <div className="deadline-icon">
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
                            <path d="M12 6v6l4 2"></path>
                            <circle cx="12" cy="12" r="10"></circle>
                          </g>
                        </svg>
                      </div>
                      <div className="deadline-content">
                        <p className="deadline-title">AI Model Lab</p>
                        <p className="deadline-time">Due in 4 hours</p>
                      </div>
                    </li>
                    <li className="deadline-item">
                      <div className="deadline-icon">
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
                            <path d="M12 6v6l4 2"></path>
                            <circle cx="12" cy="12" r="10"></circle>
                          </g>
                        </svg>
                      </div>
                      <div className="deadline-content">
                        <p className="deadline-title">Data Structures Quiz</p>
                        <p className="deadline-time">Tomorrow, 2 PM</p>
                      </div>
                    </li>
                    <li className="deadline-item">
                      <div className="deadline-icon">
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
                            <path d="M12 6v6l4 2"></path>
                            <circle cx="12" cy="12" r="10"></circle>
                          </g>
                        </svg>
                      </div>
                      <div className="deadline-content">
                        <p className="deadline-title">Web Systems Project</p>
                        <p className="deadline-time">Friday, 11:59 PM</p>
                      </div>
                    </li>
                  </ul>
                </div>
                <div
                  role="group"
                  aria-labelledby="checkpoints-title"
                  className="card checkpoints-card"
                >
                  <h2 id="checkpoints-title" className="card-title">
                    Checkpoints
                  </h2>
                  <div className="checkpoint-item">
                    <div className="checkpoint-icon">
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
                          <circle cx="12" cy="12" r="10"></circle>
                          <circle cx="12" cy="12" r="6"></circle>
                          <circle cx="12" cy="12" r="2"></circle>
                        </g>
                      </svg>
                    </div>
                    <span>Module 4 Certification Ready</span>
                  </div>
                  <div className="checkpoint-item">
                    <div className="checkpoint-icon">
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
                          <circle cx="12" cy="12" r="10"></circle>
                          <circle cx="12" cy="12" r="6"></circle>
                          <circle cx="12" cy="12" r="2"></circle>
                        </g>
                      </svg>
                    </div>
                    <span>18% to AI Badge</span>
                  </div>
                </div>
                <div
                  role="group"
                  aria-labelledby="recommendations-title"
                  className="card recommendations-card"
                >
                  <h2 id="recommendations-title" className="card-title">
                    Recommended
                  </h2>
                  <p className="recommendation-text">
                    {' '}
                    25-minute coding practice to boost Data Structures mastery
                    by ~6%
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </p>
                  <button className="btn btn-primary">Start Session</button>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section
          id="my-courses"
          role="region"
          aria-label="My Courses"
          className="dashboard-section"
        >
          <div className="dashboard-container">
            <div className="section-header">
              <h2 className="student-dashboard-section-title">My Courses</h2>
              <div className="section-controls">
                <button aria-label="Filter courses" className="filter-btn btn">
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
            </div>
            <div className="courses-layout">
              <div className="courses-nav">
                <button className="nav-card btn">
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
                      <path d="M8 2v4m8-4v4"></path>
                      <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                      <path d="M3 10h18"></path>
                    </g>
                  </svg>
                  <span>Calendar</span>
                </button>
                <button className="nav-card btn btn-primary">
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
                      d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"
                    ></path>
                  </svg>
                  <span>Continue Learning</span>
                </button>
              </div>
              <div className="courses-carousel-wrapper">
                <div className="courses-carousel">
                  <div className="course-card">
                    <div className="course-image">
                      <img
                        src="https://images.pexels.com/photos/4974922/pexels-photo-4974922.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                        alt="AI Fundamentals Course"
                      />
                      <div className="course-badge">
                        <span>82% Complete</span>
                      </div>
                    </div>
                    <div className="course-content">
                      <h3 className="course-title">AI Fundamentals</h3>
                      <p className="course-subtitle">
                        Advanced Machine Learning
                      </p>
                      <div className="course-progress">
                        <div
                          role="progressbar"
                          aria-valuenow="82"
                          aria-valuemin="0"
                          aria-valuemax="100"
                          className="progress-bar"
                        >
                          <div className="student-dashboard-progress-fill2 progress-fill"></div>
                        </div>
                        <span className="progress-label">
                          Next: Coding Lab 4
                        </span>
                      </div>
                      <div className="course-meta">
                        <span className="meta-item">
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
                              <path d="M12 6v6l4 2"></path>
                              <circle cx="12" cy="12" r="10"></circle>
                            </g>
                          </svg>
                          <span>
                            {' '}
                            2 hrs left
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
                              <circle cx="12" cy="12" r="10"></circle>
                              <circle cx="12" cy="12" r="6"></circle>
                              <circle cx="12" cy="12" r="2"></circle>
                            </g>
                          </svg>
                          <span>
                            {' '}
                            18% to badge
                            <span
                              dangerouslySetInnerHTML={{
                                __html: ' ',
                              }}
                            />
                          </span>
                        </span>
                      </div>
                      <button
                        aria-label="Resume AI Fundamentals course"
                        className="course-btn btn btn-primary"
                      >
                        {' '}
                        Resume
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </button>
                    </div>
                  </div>
                  <div className="course-card">
                    <div className="course-image">
                      <img
                        src="https://images.pexels.com/photos/6473097/pexels-photo-6473097.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                        alt="Data Structures Course"
                      />
                      <div className="course-badge">
                        <span>54% Complete</span>
                      </div>
                    </div>
                    <div className="course-content">
                      <h3 className="course-title">Data Structures</h3>
                      <p className="course-subtitle">
                        Core Programming Concepts
                      </p>
                      <div className="course-progress">
                        <div
                          role="progressbar"
                          aria-valuenow="54"
                          aria-valuemin="0"
                          aria-valuemax="100"
                          className="progress-bar"
                        >
                          <div className="student-dashboard-progress-fill3 progress-fill"></div>
                        </div>
                        <span className="progress-label">
                          Next: Practice Problems
                        </span>
                      </div>
                      <div className="course-meta">
                        <span className="meta-item">
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
                              <path d="M12 6v6l4 2"></path>
                              <circle cx="12" cy="12" r="10"></circle>
                            </g>
                          </svg>
                          <span>
                            {' '}
                            4 hrs est.
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
                            Quiz Tomorrow
                            <span
                              dangerouslySetInnerHTML={{
                                __html: ' ',
                              }}
                            />
                          </span>
                        </span>
                      </div>
                      <button
                        aria-label="Resume Data Structures course"
                        className="course-btn btn btn-primary"
                      >
                        {' '}
                        Resume
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </button>
                    </div>
                  </div>
                  <div className="course-card">
                    <div className="course-image">
                      <img
                        src="https://images.pexels.com/photos/9159279/pexels-photo-9159279.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                        alt="Web Systems Course"
                      />
                      <div className="course-badge">
                        <span>29% Complete</span>
                      </div>
                    </div>
                    <div className="course-content">
                      <h3 className="course-title">Web Systems</h3>
                      <p className="course-subtitle">Full-Stack Development</p>
                      <div className="course-progress">
                        <div
                          role="progressbar"
                          aria-valuenow="29"
                          aria-valuemin="0"
                          aria-valuemax="100"
                          className="progress-bar"
                        >
                          <div className="student-dashboard-progress-fill4 progress-fill"></div>
                        </div>
                        <span className="progress-label">
                          Next: Project Draft
                        </span>
                      </div>
                      <div className="course-meta">
                        <span className="meta-item">
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
                              <path d="M12 6v6l4 2"></path>
                              <circle cx="12" cy="12" r="10"></circle>
                            </g>
                          </svg>
                          <span>
                            {' '}
                            8 hrs left
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
                              d="m16 18l6-6l-6-6M8 6l-6 6l6 6"
                            ></path>
                          </svg>
                          <span>
                            {' '}
                            IDE Ready
                            <span
                              dangerouslySetInnerHTML={{
                                __html: ' ',
                              }}
                            />
                          </span>
                        </span>
                      </div>
                      <button
                        aria-label="Resume Web Systems course"
                        className="course-btn btn btn-primary"
                      >
                        {' '}
                        Resume
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </button>
                    </div>
                  </div>
                  <div className="course-card">
                    <div className="course-image">
                      <img
                        src="https://images.pexels.com/photos/5908728/pexels-photo-5908728.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                        alt="Cloud Computing Course"
                      />
                      <div className="course-badge">
                        <span>Coming Soon</span>
                      </div>
                    </div>
                    <div className="course-content">
                      <h3 className="course-title">Cloud Computing</h3>
                      <p className="course-subtitle">
                        Infrastructure &amp; Deployment
                      </p>
                      <div className="course-progress">
                        <div
                          role="progressbar"
                          aria-valuenow="0"
                          aria-valuemin="0"
                          aria-valuemax="100"
                          className="progress-bar"
                        >
                          <div className="student-dashboard-progress-fill5 progress-fill"></div>
                        </div>
                        <span className="progress-label">
                          Unlocks after Web Systems
                        </span>
                      </div>
                      <div className="course-meta">
                        <span className="meta-item">
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
                            Prerequisites
                            <span
                              dangerouslySetInnerHTML={{
                                __html: ' ',
                              }}
                            />
                          </span>
                        </span>
                      </div>
                      <button
                        aria-label="View Cloud Computing course"
                        disabled="true"
                        className="course-btn btn btn-outline"
                      >
                        {' '}
                        View Details
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
            </div>
          </div>
        </section>
        <section
          id="calendar-deadlines"
          role="region"
          aria-label="Calendar and Deadlines"
          className="dashboard-section"
        >
          <div className="dashboard-container">
            <h2 className="student-dashboard-section-title">
              Calendar &amp; Deadlines
            </h2>
            <div className="calendar-grid">
              <div className="calendar-column">
                <div className="calendar-canvas">
                  <div className="calendar-header">
                    <button
                      aria-label="Previous month"
                      className="calendar-nav-btn btn"
                    >
                      {' '}
                      ‹
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </button>
                    <h3 className="calendar-month">October 2025</h3>
                    <button
                      aria-label="Next month"
                      className="calendar-nav-btn btn"
                    >
                      {' '}
                      ›
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </button>
                  </div>
                  <div role="grid" className="calendar-days">
                    <div className="calendar-day-label">
                      <span>Sun</span>
                    </div>
                    <div className="calendar-day-label">
                      <span>Mon</span>
                    </div>
                    <div className="calendar-day-label">
                      <span>Tue</span>
                    </div>
                    <div className="calendar-day-label">
                      <span>Wed</span>
                    </div>
                    <div className="calendar-day-label">
                      <span>Thu</span>
                    </div>
                    <div className="calendar-day-label">
                      <span>Fri</span>
                    </div>
                    <div className="calendar-day-label">
                      <span>Sat</span>
                    </div>
                    <div
                      aria-hidden="true"
                      className="calendar-cell empty"
                    ></div>
                    <div
                      aria-hidden="true"
                      className="calendar-cell empty"
                    ></div>
                    <div
                      aria-hidden="true"
                      className="calendar-cell empty"
                    ></div>
                    <div
                      role="gridcell"
                      aria-label="Wed, Oct 1"
                      className="calendar-cell"
                    >
                      <span>
                        {' '}
                        1
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                    </div>
                    <div
                      role="gridcell"
                      aria-label="Thu, Oct 2"
                      className="calendar-cell"
                    >
                      <span>
                        {' '}
                        2
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                    </div>
                    <div
                      role="gridcell"
                      aria-label="Fri, Oct 3"
                      className="calendar-cell"
                    >
                      <span>
                        {' '}
                        3
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                    </div>
                    <div
                      role="gridcell"
                      aria-label="Sat, Oct 4"
                      className="calendar-cell"
                    >
                      <span>
                        {' '}
                        4
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                    </div>
                    <div
                      role="gridcell"
                      aria-label="Sun, Oct 5"
                      className="calendar-cell"
                    >
                      <span>
                        {' '}
                        5
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                    </div>
                    <div
                      role="gridcell"
                      aria-label="Mon, Oct 6"
                      className="calendar-cell"
                    >
                      <span>
                        {' '}
                        6
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                    </div>
                    <div
                      role="gridcell"
                      aria-label="Tue, Oct 7"
                      className="calendar-cell"
                    >
                      <span>
                        {' '}
                        7
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                    </div>
                    <div
                      role="gridcell"
                      aria-label="Wed, Oct 8"
                      className="calendar-cell"
                    >
                      <span>
                        {' '}
                        8
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                    </div>
                    <div
                      role="gridcell"
                      aria-label="Thu, Oct 9"
                      className="calendar-cell"
                    >
                      <span>
                        {' '}
                        9
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                    </div>
                    <div
                      role="gridcell"
                      aria-label="Fri, Oct 10"
                      className="calendar-cell"
                    >
                      <span>
                        {' '}
                        10
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                    </div>
                    <div
                      role="gridcell"
                      aria-label="Sat, Oct 11"
                      className="calendar-cell"
                    >
                      <span>
                        {' '}
                        11
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                    </div>
                    <div
                      role="gridcell"
                      aria-label="Sun, Oct 12"
                      className="calendar-cell"
                    >
                      <span>
                        {' '}
                        12
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                    </div>
                    <div
                      role="gridcell"
                      aria-label="Mon, Oct 13"
                      className="calendar-cell"
                    >
                      <span>
                        {' '}
                        13
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                    </div>
                    <div
                      role="gridcell"
                      aria-label="Tue, Oct 14, current day, 2 assignments"
                      className="calendar-cell current has-event"
                    >
                      <span>
                        {' '}
                        14
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                      <span className="event-dot"></span>
                    </div>
                    <div
                      role="gridcell"
                      aria-label="Wed, Oct 15, 1 deadline"
                      className="calendar-cell"
                    >
                      <span>
                        {' '}
                        15
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                      <span className="event-dot urgent"></span>
                    </div>
                    <div
                      role="gridcell"
                      aria-label="Thu, Oct 16"
                      className="calendar-cell"
                    >
                      <span>
                        {' '}
                        16
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                    </div>
                    <div
                      role="gridcell"
                      aria-label="Fri, Oct 17, 1 session"
                      className="calendar-cell has-event"
                    >
                      <span>
                        {' '}
                        17
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                      <span className="event-dot"></span>
                    </div>
                    <div
                      role="gridcell"
                      aria-label="Sat, Oct 18"
                      className="calendar-cell"
                    >
                      <span>
                        {' '}
                        18
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                    </div>
                    <div
                      role="gridcell"
                      aria-label="Sun, Oct 19"
                      className="calendar-cell"
                    >
                      <span>
                        {' '}
                        19
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                    </div>
                    <div
                      role="gridcell"
                      aria-label="Mon, Oct 20"
                      className="calendar-cell"
                    >
                      <span>
                        {' '}
                        20
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                    </div>
                    <div
                      role="gridcell"
                      aria-label="Tue, Oct 21"
                      className="calendar-cell"
                    >
                      <span>
                        {' '}
                        21
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                    </div>
                    <div
                      role="gridcell"
                      aria-label="Wed, Oct 22"
                      className="calendar-cell"
                    >
                      <span>
                        {' '}
                        22
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                    </div>
                    <div
                      role="gridcell"
                      aria-label="Thu, Oct 23"
                      className="calendar-cell"
                    >
                      <span>
                        {' '}
                        23
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                    </div>
                    <div
                      role="gridcell"
                      aria-label="Fri, Oct 24"
                      className="calendar-cell"
                    >
                      <span>
                        {' '}
                        24
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                    </div>
                    <div
                      role="gridcell"
                      aria-label="Sat, Oct 25"
                      className="calendar-cell"
                    >
                      <span>
                        {' '}
                        25
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                    </div>
                    <div
                      role="gridcell"
                      aria-label="Sun, Oct 26"
                      className="calendar-cell"
                    >
                      <span>
                        {' '}
                        26
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                    </div>
                    <div
                      role="gridcell"
                      aria-label="Mon, Oct 27"
                      className="calendar-cell"
                    >
                      <span>
                        {' '}
                        27
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                    </div>
                    <div
                      role="gridcell"
                      aria-label="Tue, Oct 28"
                      className="calendar-cell"
                    >
                      <span>
                        {' '}
                        28
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                    </div>
                    <div
                      role="gridcell"
                      aria-label="Wed, Oct 29"
                      className="calendar-cell"
                    >
                      <span>
                        {' '}
                        29
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                    </div>
                    <div
                      role="gridcell"
                      aria-label="Thu, Oct 30"
                      className="calendar-cell"
                    >
                      <span>
                        {' '}
                        30
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                    </div>
                    <div
                      role="gridcell"
                      aria-label="Fri, Oct 31"
                      className="calendar-cell"
                    >
                      <span>
                        {' '}
                        31
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                    </div>
                  </div>
                </div>
                <div className="timeline-strip">
                  <div className="timeline-item">
                    <span className="timeline-time">Today</span>
                    <span className="timeline-label">AI Lab Due</span>
                  </div>
                  <div className="timeline-item">
                    <span className="timeline-time">Tomorrow</span>
                    <span className="timeline-label">Quiz</span>
                  </div>
                  <div className="timeline-item">
                    <span className="timeline-time">Friday</span>
                    <span className="timeline-label">Project Draft</span>
                  </div>
                </div>
              </div>
              <div className="calendar-sidebar">
                <div className="sidebar-card">
                  <h3 className="sidebar-title">Priority Tasks</h3>
                  <div className="task-item priority-high">
                    <div className="task-icon">
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
                          <path d="M10 14.66v1.626a2 2 0 0 1-.976 1.696A5 5 0 0 0 7 21.978m7-7.318v1.626a2 2 0 0 0 .976 1.696A5 5 0 0 1 17 21.978M18 9h1.5a1 1 0 0 0 0-5H18M4 22h16"></path>
                          <path d="M6 9a6 6 0 0 0 12 0V3a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1zm0 0H4.5a1 1 0 0 1 0-5H6"></path>
                        </g>
                      </svg>
                    </div>
                    <div className="task-content">
                      <p className="task-title">AI Model Lab</p>
                      <p className="task-meta">Due: Today, 6 PM • Est: 2 hrs</p>
                    </div>
                  </div>
                  <div className="task-item">
                    <div className="task-icon">
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
                          d="M20 6L9 17l-5-5"
                        ></path>
                      </svg>
                    </div>
                    <div className="task-content">
                      <p className="task-title">Data Structures Quiz</p>
                      <p className="task-meta">Tomorrow, 2 PM • 30 min</p>
                    </div>
                  </div>
                  <div className="task-item">
                    <div className="task-icon">
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
                          d="M12 3v12m5-7l-5-5l-5 5m14 7v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"
                        ></path>
                      </svg>
                    </div>
                    <div className="task-content">
                      <p className="task-title">Web Systems Project</p>
                      <p className="task-meta">Friday, 11:59 PM • 4 hrs</p>
                    </div>
                  </div>
                </div>
                <div className="sidebar-card">
                  <h3 className="sidebar-title">Live Sessions</h3>
                  <div className="session-item">
                    <div className="session-time">
                      <span>3:00 PM</span>
                    </div>
                    <div className="session-content">
                      <p className="session-title">AI Office Hours</p>
                      <button className="btn btn-primary btn-sm">Join</button>
                    </div>
                  </div>
                </div>
                <div className="sidebar-card">
                  <h3 className="sidebar-title">Smart Reminders</h3>
                  <div className="reminder-toggle">
                    <label className="toggle-label">
                      <input
                        type="checkbox"
                        checked="true"
                        aria-label="Enable adaptive reminders"
                      />
                      <span>Adaptive Mode</span>
                    </label>
                  </div>
                  <p className="reminder-text">
                    Optimized for your study rhythm
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section
          id="assignments-badges"
          role="region"
          aria-label="Assignments and badges"
          className="dashboard-section"
        >
          <div className="dashboard-container">
            <div className="assignments-grid">
              <div className="assignments-column">
                <div className="card assignments-card">
                  <div className="card-header">
                    <h2 className="card-title">Assignments</h2>
                    <div role="tablist" className="tab-group">
                      <button
                        role="tab"
                        aria-selected="true"
                        aria-controls="assignments-panel"
                        className="tab-btn active"
                      >
                        {' '}
                        Full
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </button>
                      <button
                        role="tab"
                        aria-selected="false"
                        aria-controls="assignments-panel"
                        className="tab-btn"
                      >
                        {' '}
                        Compact
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </button>
                    </div>
                  </div>
                  <div
                    id="assignments-panel"
                    role="tabpanel"
                    className="assignments-list"
                  >
                    <div className="assignment-item urgent">
                      <div className="assignment-status">
                        <div className="status-indicator in-progress"></div>
                      </div>
                      <div className="assignment-content">
                        <h3 className="assignment-title">
                          AI Neural Network Lab
                        </h3>
                        <p className="assignment-course">
                          AI Fundamentals • Module 4
                        </p>
                        <div className="assignment-meta">
                          <span className="meta-badge urgent">
                            Due in 4 hours
                          </span>
                          <span className="meta-item">
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
                                <path d="M12 6v6l4 2"></path>
                                <circle cx="12" cy="12" r="10"></circle>
                              </g>
                            </svg>
                            <span>
                              {' '}
                              Est: 2 hrs
                              <span
                                dangerouslySetInnerHTML={{
                                  __html: ' ',
                                }}
                              />
                            </span>
                          </span>
                        </div>
                        <div className="assignment-actions">
                          <button
                            aria-label="Upload assignment"
                            className="btn btn-primary btn-sm"
                          >
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
                                d="M12 3v12m5-7l-5-5l-5 5m14 7v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"
                              ></path>
                            </svg>
                            <span>
                              {' '}
                              Upload
                              <span
                                dangerouslySetInnerHTML={{
                                  __html: ' ',
                                }}
                              />
                            </span>
                          </button>
                          <button
                            aria-label="Open in workspace"
                            className="btn btn-sm btn-outline"
                          >
                            {' '}
                            Workspace
                            <span
                              dangerouslySetInnerHTML={{
                                __html: ' ',
                              }}
                            />
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="assignment-item">
                      <div className="assignment-status">
                        <div className="status-indicator not-started"></div>
                      </div>
                      <div className="assignment-content">
                        <h3 className="assignment-title">
                          Binary Trees Practice
                        </h3>
                        <p className="assignment-course">
                          Data Structures • Module 3
                        </p>
                        <div className="assignment-meta">
                          <span className="meta-badge">Tomorrow, 2 PM</span>
                          <span className="meta-item">
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
                                <path d="M12 6v6l4 2"></path>
                                <circle cx="12" cy="12" r="10"></circle>
                              </g>
                            </svg>
                            <span>
                              {' '}
                              Est: 30 min
                              <span
                                dangerouslySetInnerHTML={{
                                  __html: ' ',
                                }}
                              />
                            </span>
                          </span>
                        </div>
                        <div className="assignment-actions">
                          <button
                            aria-label="Start assignment"
                            className="btn btn-primary btn-sm"
                          >
                            {' '}
                            Start
                            <span
                              dangerouslySetInnerHTML={{
                                __html: ' ',
                              }}
                            />
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="assignment-item">
                      <div className="assignment-status">
                        <div className="status-indicator not-started"></div>
                      </div>
                      <div className="assignment-content">
                        <h3 className="assignment-title">
                          Web App Project Draft
                        </h3>
                        <p className="assignment-course">
                          Web Systems • Final Project
                        </p>
                        <div className="assignment-meta">
                          <span className="meta-badge">Friday, 11:59 PM</span>
                          <span className="meta-item">
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
                                <path d="M12 6v6l4 2"></path>
                                <circle cx="12" cy="12" r="10"></circle>
                              </g>
                            </svg>
                            <span>
                              {' '}
                              Est: 4 hrs
                              <span
                                dangerouslySetInnerHTML={{
                                  __html: ' ',
                                }}
                              />
                            </span>
                          </span>
                        </div>
                        <div className="assignment-actions">
                          <button
                            aria-label="Upload assignment"
                            className="btn btn-primary btn-sm"
                          >
                            {' '}
                            Upload
                            <span
                              dangerouslySetInnerHTML={{
                                __html: ' ',
                              }}
                            />
                          </button>
                          <button
                            aria-label="Request peer review"
                            className="btn btn-sm btn-outline"
                          >
                            {' '}
                            Peer Review
                            <span
                              dangerouslySetInnerHTML={{
                                __html: ' ',
                              }}
                            />
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="assignment-item">
                      <div className="assignment-status">
                        <div className="status-indicator submitted"></div>
                      </div>
                      <div className="assignment-content">
                        <h3 className="assignment-title">
                          Algorithm Analysis Report
                        </h3>
                        <p className="assignment-course">
                          Data Structures • Module 2
                        </p>
                        <div className="assignment-meta">
                          <span className="meta-badge submitted">
                            Submitted
                          </span>
                          <span className="meta-item">
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
                              Grading
                              <span
                                dangerouslySetInnerHTML={{
                                  __html: ' ',
                                }}
                              />
                            </span>
                          </span>
                        </div>
                        <div className="assignment-actions">
                          <button
                            aria-label="View submission"
                            className="btn btn-sm btn-outline"
                          >
                            {' '}
                            View
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
                </div>
              </div>
              <div className="badges-column">
                <div className="card badges-card">
                  <h2 className="card-title">Earned Badges</h2>
                  <div className="badges-grid">
                    <div className="badge-item gold">
                      <div className="badge-icon">
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
                            <path d="M10 14.66v1.626a2 2 0 0 1-.976 1.696A5 5 0 0 0 7 21.978m7-7.318v1.626a2 2 0 0 0 .976 1.696A5 5 0 0 1 17 21.978M18 9h1.5a1 1 0 0 0 0-5H18M4 22h16"></path>
                            <path d="M6 9a6 6 0 0 0 12 0V3a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1zm0 0H4.5a1 1 0 0 1 0-5H6"></path>
                          </g>
                        </svg>
                      </div>
                      <span className="badge-label">ML Master</span>
                    </div>
                    <div className="badge-item silver">
                      <div className="badge-icon">
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
                            d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z"
                          ></path>
                        </svg>
                      </div>
                      <span className="badge-label">Code Sprint</span>
                    </div>
                    <div className="badge-item bronze">
                      <div className="badge-icon">
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
                            <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.4 22.4 0 0 1-4 2"></path>
                            <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0m1 7v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path>
                          </g>
                        </svg>
                      </div>
                      <span className="badge-label">Fast Learner</span>
                    </div>
                    <div className="badge-item bronze">
                      <div className="badge-icon">
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
                            <circle cx="12" cy="12" r="10"></circle>
                            <circle cx="12" cy="12" r="6"></circle>
                            <circle cx="12" cy="12" r="2"></circle>
                          </g>
                        </svg>
                      </div>
                      <span className="badge-label">12-Day Streak</span>
                    </div>
                  </div>
                  <p className="badge-progress">
                    {' '}
                    Next: AI Foundation Badge (18% to unlock)
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </p>
                </div>
                <div className="card actions-card">
                  <h2 className="card-title">Quick Actions</h2>
                  <div className="actions-list">
                    <button className="action-btn btn">
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
                          d="M12 3v12m5-7l-5-5l-5 5m14 7v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"
                        ></path>
                      </svg>
                      <span>Bulk Submit</span>
                    </button>
                    <button className="action-btn btn">
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
                      <span>Download Resources</span>
                    </button>
                    <button className="action-btn btn">
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
                      <span>Schedule Tutor</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section
          id="notes"
          role="region"
          aria-label="Notes"
          className="dashboard-section"
        >
          <div className="dashboard-container">
            <div className="notes-layout">
              <div className="notes-column">
                <div className="notes-header">
                  <h2 className="student-dashboard-section-title">
                    Quick Notes
                  </h2>
                  <div className="notes-actions">
                    <button
                      aria-label="Save note"
                      className="notes-action-btn btn"
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
                          d="M20 6L9 17l-5-5"
                        ></path>
                      </svg>
                      <span>
                        {' '}
                        Saved
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                    </button>
                  </div>
                </div>
                <div
                  role="textbox"
                  aria-multiline="true"
                  aria-label="Course note editor"
                  contentEditable="true"
                  className="notes-editor"
                >
                  <p>
                    <span className="student-dashboard-text83">
                      Module 4 - Neural Networks
                    </span>
                  </p>
                  <p>Key concepts from today&apos;s lecture:</p>
                  <p>
                    {' '}
                    • Activation functions: ReLU vs Sigmoid performance
                    comparison
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </p>
                  <p>• Backpropagation optimization techniques</p>
                  <p>• Practical implementation notes for Lab 4</p>
                  <p></p>
                  <p>TODO: Review gradient descent algorithms before quiz</p>
                </div>
                <div className="notes-timeline">
                  <h3 className="timeline-title">Recent Snippets</h3>
                  <div className="snippet-item">
                    <div className="snippet-icon">
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
                          d="m16 18l6-6l-6-6M8 6l-6 6l6 6"
                        ></path>
                      </svg>
                    </div>
                    <div className="snippet-content">
                      <p className="snippet-title">
                        Binary Tree Implementation
                      </p>
                      <p className="snippet-time">
                        2 hours ago • Data Structures
                      </p>
                    </div>
                  </div>
                  <div className="snippet-item">
                    <div className="snippet-icon">
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
                          <path d="M16 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8Z"></path>
                          <path d="M15 3v4a2 2 0 0 0 2 2h4"></path>
                        </g>
                      </svg>
                    </div>
                    <div className="snippet-content">
                      <p className="snippet-title">API Design Patterns</p>
                      <p className="snippet-time">Yesterday • Web Systems</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="notes-sidebar">
                <div className="sidebar-card">
                  <h3 className="sidebar-title">Notebooks</h3>
                  <div className="notebook-list">
                    <button className="notebook-item active btn">
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
                          d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"
                        ></path>
                      </svg>
                      <span>AI Fundamentals</span>
                    </button>
                    <button className="notebook-item btn">
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
                          d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"
                        ></path>
                      </svg>
                      <span>Data Structures</span>
                    </button>
                    <button className="notebook-item btn">
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
                          d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"
                        ></path>
                      </svg>
                      <span>Web Systems</span>
                    </button>
                  </div>
                </div>
                <div className="sidebar-card">
                  <h3 className="sidebar-title">Tags</h3>
                  <div className="tags-list">
                    <span className="tag-chip">Study</span>
                    <span className="tag-chip">Code Snippet</span>
                    <span className="tag-chip">Reference</span>
                    <span className="tag-chip">To-Apply</span>
                  </div>
                </div>
                <div className="sidebar-card">
                  <h3 className="sidebar-title">Actions</h3>
                  <div className="notes-sidebar-actions">
                    <button className="btn btn-primary btn-sm">
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
                          <path d="M12 15V3m9 12v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                          <path d="m7 10l5 5l5-5"></path>
                        </g>
                      </svg>
                      <span>
                        {' '}
                        Export PDF
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                    </button>
                    <button className="btn btn-sm btn-outline">
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
                      <span>
                        {' '}
                        Encrypt
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
            </div>
          </div>
        </section>
        <section
          id="progress-metrics"
          role="region"
          aria-labelledby="progress-metrics-title"
          className="dashboard-section"
        >
          <div className="dashboard-container">
            <div className="progress-panel">
              <div className="progress-grid">
                <div className="progress-rail">
                  <div className="rail-header">
                    <h2
                      id="progress-metrics-title"
                      className="student-dashboard-section-title"
                    >
                      {' '}
                      Progress &amp; Metrics
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </h2>
                  </div>
                  <div className="rail-card">
                    <h3 className="rail-card-title">Overall Progress</h3>
                    <div className="overall-metric">
                      <span className="metric-value-large">
                        <span>
                          {' '}
                          68
                          <span
                            dangerouslySetInnerHTML={{
                              __html: ' ',
                            }}
                          />
                        </span>
                        <span className="student-dashboard-metric-unit4">
                          %
                        </span>
                      </span>
                      <p className="metric-subtitle">Complete</p>
                    </div>
                    <div
                      role="progressbar"
                      aria-valuenow="68"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      className="progress-bar"
                    >
                      <div className="student-dashboard-progress-fill6 progress-fill"></div>
                    </div>
                    <p className="metric-recommendation">
                      {' '}
                      Adaptive pacing: 2 focused sessions this week
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </p>
                  </div>
                  <div className="rail-card">
                    <h3 className="rail-card-title">Quick Actions</h3>
                    <div className="quicklinks">
                      <button className="quicklink-btn btn btn-primary">
                        {' '}
                        Jump to Course
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </button>
                      <button className="quicklink-btn btn btn-outline">
                        {' '}
                        Start Session
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </button>
                      <button className="quicklink-btn btn btn-outline">
                        {' '}
                        Schedule Tutor
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </button>
                    </div>
                  </div>
                </div>
                <div className="progress-canvas">
                  <div className="metric-card">
                    <h3 className="metric-card-title">Course Breakdown</h3>
                    <div className="course-metrics">
                      <div className="course-metric-item">
                        <div className="course-metric-header">
                          <span className="course-metric-name">
                            AI Fundamentals
                          </span>
                          <span className="course-metric-value">82%</span>
                        </div>
                        <div
                          role="progressbar"
                          aria-valuenow="82"
                          aria-valuemin="0"
                          aria-valuemax="100"
                          className="progress-bar"
                        >
                          <div className="student-dashboard-progress-fill7 progress-fill"></div>
                        </div>
                        <p className="course-metric-detail">
                          {' '}
                          Mastery: Applied Labs 1–3 completed • Next: Coding
                          Workspace challenge
                          <span
                            dangerouslySetInnerHTML={{
                              __html: ' ',
                            }}
                          />
                        </p>
                      </div>
                      <div className="course-metric-item">
                        <div className="course-metric-header">
                          <span className="course-metric-name">
                            Data Structures
                          </span>
                          <span className="course-metric-value">54%</span>
                        </div>
                        <div
                          role="progressbar"
                          aria-valuenow="54"
                          aria-valuemin="0"
                          aria-valuemax="100"
                          className="progress-bar"
                        >
                          <div className="student-dashboard-progress-fill8 progress-fill"></div>
                        </div>
                        <p className="course-metric-detail">
                          {' '}
                          Mastery: Concepts 1–4 • Focus: Optimize practice
                          problems (est. 4 hours)
                          <span
                            dangerouslySetInnerHTML={{
                              __html: ' ',
                            }}
                          />
                        </p>
                      </div>
                      <div className="course-metric-item">
                        <div className="course-metric-header">
                          <span className="course-metric-name">
                            Web Systems
                          </span>
                          <span className="course-metric-value">29%</span>
                        </div>
                        <div
                          role="progressbar"
                          aria-valuenow="29"
                          aria-valuemin="0"
                          aria-valuemax="100"
                          className="progress-bar"
                        >
                          <div className="student-dashboard-progress-fill9 progress-fill"></div>
                        </div>
                        <p className="course-metric-detail">
                          {' '}
                          Mastery: Foundations • Focus: Submit Project Draft to
                          unlock peer review
                          <span
                            dangerouslySetInnerHTML={{
                              __html: ' ',
                            }}
                          />
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="metric-card">
                    <h3 className="metric-card-title">Performance Insights</h3>
                    <div className="insights-grid">
                      <div className="insight-item">
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
                              <circle cx="12" cy="12" r="10"></circle>
                              <circle cx="12" cy="12" r="6"></circle>
                              <circle cx="12" cy="12" r="2"></circle>
                            </g>
                          </svg>
                        </div>
                        <div className="insight-content">
                          <p className="insight-label">Consistency Score</p>
                          <p className="insight-value">91%</p>
                          <p className="insight-detail">
                            {' '}
                            12-day streak • High-quality interactions
                            <span
                              dangerouslySetInnerHTML={{
                                __html: ' ',
                              }}
                            />
                          </p>
                        </div>
                      </div>
                      <div className="insight-item">
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
                        <div className="insight-content">
                          <p className="insight-label">
                            Problem-Solving Velocity
                          </p>
                          <p className="insight-value">+18%</p>
                          <p className="insight-detail">
                            {' '}
                            Average completion time improving month-over-month
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
                  <div className="metric-card">
                    <h3 className="metric-card-title">
                      Strengths &amp; Opportunities
                    </h3>
                    <div className="strengths-grid">
                      <div className="strength-column">
                        <h4 className="strength-heading">Strengths</h4>
                        <ul className="strength-list">
                          <li>
                            <span>Applied labs &amp; timed challenges</span>
                          </li>
                          <li>
                            <span>Collaborative reviews</span>
                          </li>
                          <li>
                            <span>Adaptive learning engagement</span>
                          </li>
                        </ul>
                      </div>
                      <div className="strength-column">
                        <h4 className="strength-heading">Opportunities</h4>
                        <ul className="strength-list">
                          <li>
                            <span>End-of-week deadline readiness</span>
                          </li>
                          <li>
                            <span>Conceptual quizzes for Web Systems</span>
                          </li>
                          <li>
                            <span>Pre-session prep consistency</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="metric-card milestone-card">
                    <h3 className="metric-card-title">Milestone Gauge</h3>
                    <div className="milestone-content">
                      <div className="milestone-progress">
                        <div className="milestone-ring">
                          <svg viewBox="0 0 120 120" className="milestone-svg">
                            <circle
                              cx="60"
                              cy="60"
                              r="50"
                              className="milestone-track"
                            ></circle>
                            <circle
                              cx="60"
                              cy="60"
                              r="50"
                              className="student-dashboard-milestone-fill milestone-fill"
                            ></circle>
                          </svg>
                          <div className="milestone-center">
                            <span className="milestone-value">82%</span>
                          </div>
                        </div>
                        <div className="milestone-text">
                          <p className="milestone-label">Next Milestone</p>
                          <p className="milestone-title">
                            {' '}
                            Module Certification in AI Fundamentals
                            <span
                              dangerouslySetInnerHTML={{
                                __html: ' ',
                              }}
                            />
                          </p>
                          <p className="milestone-detail">
                            {' '}
                            18% to badge • ETA: 5 days at current pace
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
                  <div className="metric-card tip-card">
                    <div className="tip-icon">
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
                          d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"
                        ></path>
                      </svg>
                    </div>
                    <div className="tip-content">
                      <h4 className="tip-heading">Adaptive Tip</h4>
                      <p className="tip-text">
                        {' '}
                        25-minute focused practice in the integrated coding
                        workspace to boost Data Structures mastery by ~6%
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </p>
                      <button className="btn btn-sm btn-accent">
                        Start Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <div className="student-dashboard-container5">
        <div className="student-dashboard-container6">
          <Script
            html={`<style>
        @keyframes pulseGlow {0%,100% {opacity: 1;
transform: scale(1);}
50% {opacity: 0.6;
transform: scale(1.2);}}@keyframes shimmer {0% {transform: translateX(-100%);}
100% {transform: translateX(100%);}}@keyframes glowPulse {0% {filter: drop-shadow(0 0 8px var(--color-primary));}
100% {filter: drop-shadow(0 0 16px var(--color-primary));}}@keyframes urgentPulse {0%,100% {box-shadow: 0 0 8px
        color-mix(in srgb, var(--color-accent) 20%, transparent);}
50% {box-shadow: 0 0 16px
        color-mix(in srgb, var(--color-accent) 40%, transparent);}}@keyframes iconPulse {0%,100% {transform: scale(1);}
50% {transform: scale(1.1);}}@keyframes dotPulse {0%,100% {transform: scale(1);}
50% {transform: scale(1.5);}}@keyframes taskPulse {0%,100% {box-shadow: 0 0 8px
        color-mix(in srgb, var(--color-accent) 20%, transparent);}
50% {box-shadow: 0 0 16px
        color-mix(in srgb, var(--color-accent) 40%, transparent);}}@keyframes assignmentPulse {0%,100% {box-shadow: 0 0 8px
        color-mix(in srgb, var(--color-accent) 20%, transparent);}
50% {box-shadow: 0 0 16px
        color-mix(in srgb, var(--color-accent) 40%, transparent);}}@keyframes statusPulse {0%,100% {opacity: 1;}
50% {opacity: 0.6;}}@keyframes badgeGlow {0% {filter: drop-shadow(0 0 8px var(--color-accent));}
100% {filter: drop-shadow(0 0 16px var(--color-accent));}}@keyframes milestoneGlow {0% {filter: drop-shadow(0 0 8px var(--color-accent));}
100% {filter: drop-shadow(0 0 20px var(--color-accent));}}@keyframes tipPulse {0%,100% {transform: scale(1);}
50% {transform: scale(1.1);}}
        </style> `}
          ></Script>
        </div>
      </div>
      <div className="student-dashboard-container7">
        <div className="student-dashboard-container8">
          <Script
            html={`<script defer data-name="student-dashboard">
(function(){
  // Dashboard interactive enhancements

  // Tab switching for assignments
  const tabButtons = document.querySelectorAll(".tab-btn")
  tabButtons.forEach((button) => {
    button.addEventListener("click", function () {
      tabButtons.forEach((btn) => {
        btn.classList.remove("active")
        btn.setAttribute("aria-selected", "false")
      })
      this.classList.add("active")
      this.setAttribute("aria-selected", "true")
    })
  })

  // Notes editor auto-save indicator
  const notesEditor = document.querySelector(".notes-editor")
  if (notesEditor) {
    let saveTimeout
    notesEditor.addEventListener("input", function () {
      clearTimeout(saveTimeout)
      saveTimeout = setTimeout(() => {
        const saveBtn = document.querySelector(".notes-action-btn")
        if (saveBtn) {
          saveBtn.textContent = "✓ Saved"
          setTimeout(() => {
            saveBtn.innerHTML =
              '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 6L9 17l-5-5"/></svg>Saved'
          }, 1000)
        }
      }, 2000)
    })
  }

  // Calendar navigation
  const calendarNavBtns = document.querySelectorAll(".calendar-nav-btn")
  calendarNavBtns.forEach((btn) => {
    btn.addEventListener("click", function () {
      const monthTitle = document.querySelector(".calendar-month")
      if (monthTitle) {
        // Add animation feedback
        monthTitle.style.opacity = "0.5"
        setTimeout(() => {
          monthTitle.style.opacity = "1"
        }, 150)
      }
    })
  })

  // Course cards hover parallax effect
  const courseCards = document.querySelectorAll(".course-card")
  courseCards.forEach((card) => {
    card.addEventListener("mousemove", function (e) {
      const rect = card.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top
      const centerX = rect.width / 2
      const centerY = rect.height / 2
      const deltaX = (x - centerX) / centerX
      const deltaY = (y - centerY) / centerY

      const img = card.querySelector(".course-image img")
      if (img) {
        img.style.transform = \`scale(1.1) translate(\${deltaX * 10}px, \${
          deltaY * 10
        }px)\`
      }
    })

    card.addEventListener("mouseleave", function () {
      const img = card.querySelector(".course-image img")
      if (img) {
        img.style.transform = "scale(1)"
      }
    })
  })

  // Deadline countdown animation
  function updateDeadlineTimers() {
    const urgentItems = document.querySelectorAll(
      ".deadline-item.urgent .deadline-time"
    )
    urgentItems.forEach((item) => {
      const text = item.textContent
      if (text.includes("hour")) {
        item.style.animation = "none"
        setTimeout(() => {
          item.style.animation = ""
        }, 10)
      }
    })
  }

  setInterval(updateDeadlineTimers, 60000) // Update every minute

  // Progress bar animation on scroll
  const observerOptions = {
    threshold: 0.5,
    rootMargin: "0px",
  }

  const progressObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const progressFills = entry.target.querySelectorAll(".progress-fill")
        progressFills.forEach((fill) => {
          const width = fill.style.width
          fill.style.width = "0%"
          setTimeout(() => {
            fill.style.width = width
          }, 100)
        })
      }
    })
  }, observerOptions)

  const progressSections = document.querySelectorAll(".card, .metric-card")
  progressSections.forEach((section) => {
    progressObserver.observe(section)
  })

  // Notebook switching
  const notebookItems = document.querySelectorAll(".notebook-item")
  notebookItems.forEach((item) => {
    item.addEventListener("click", function () {
      notebookItems.forEach((nb) => nb.classList.remove("active"))
      this.classList.add("active")
    })
  })

  // Tag chip interactions
  const tagChips = document.querySelectorAll(".tag-chip")
  tagChips.forEach((chip) => {
    chip.addEventListener("click", function () {
      this.classList.toggle("active")
    })
  })

  // Accessibility: Announce dynamic content changes
  function announceUpdate(message) {
    const announcement = document.createElement("div")
    announcement.setAttribute("role", "status")
    announcement.setAttribute("aria-live", "polite")
    announcement.className = "sr-only"
    announcement.textContent = message
    document.body.appendChild(announcement)
    setTimeout(() => announcement.remove(), 1000)
  }

  // Touch-friendly enhancements for mobile
  if ("ontouchstart" in window) {
    document
      .querySelectorAll(".course-card, .assignment-item, .deadline-item")
      .forEach((item) => {
        item.addEventListener("touchstart", function () {
          this.style.transform = "scale(0.98)"
        })
        item.addEventListener("touchend", function () {
          this.style.transform = ""
        })
      })
  }
})()
</script>`}
          ></Script>
        </div>
      </div>
      <Footer></Footer>
      <a href="https://play.teleporthq.io/signup">
        <div
          aria-label="Sign up to TeleportHQ"
          className="student-dashboard-container9"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 19 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="student-dashboard-icon249"
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
          <span className="student-dashboard-text102">Built in TeleportHQ</span>
        </div>
      </a>
    </div>
  )
}

export default StudentDashboard

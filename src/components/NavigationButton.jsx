import React from 'react'

import blog from '../assets/nav-blog.png'
import search from '../assets/nav-search.png'
import github from '../assets/nav-github.png'
import moon from '../assets/moon.png'

const mainNavItems = [
  // { url: '/', icon: floppy, label: 'Home' },
  { url: '/me', icon: search, label: 'About' },
  { url: '/blog', icon: blog, label: 'Blog' },
]

const socialNavItems = [
  { url: 'https://github.com/taniarascia', icon: github, label: 'GitHub' },
]

export const Navigation = ({ onUpdateTheme }) => {
  return (
    <section className="navigation">
      <div className="container">
        <nav>
          {mainNavItems.map((item) => (
            <div className="nav-item-outer" key={item.url}>
              {/* <Link
                to={item.url}
                key={item.label}
                activeClassName="active"
                className={`item ${slugify(item.label)} ${
                  item.mobileOnly ? 'mobile-only' : ''
                }`}
              >
                <img src={item.icon} alt={item.label} className="nav-image" />
                <span>{item.label}</span>
              </Link> */}
            </div>
          ))}

          {socialNavItems.map((item) => (
            <div className="nav-item-outer" key={item.url}>
              <a
                href={item.url}
                key={item.label}
                className={`desktop-only item ${slugify(item.label)}`}
                target="_blank"
                rel="noreferrer"
              >
                <img src={item.icon} alt={item.label} className="nav-image" />
                <span>{item.label}</span>
              </a>
            </div>
          ))}
        </nav>
        <div className="theme-toggle">
          <button onClick={onUpdateTheme}>
            <img src={moon} alt="Theme" />
          </button>
        </div>
      </div>
    </section>
  )
}

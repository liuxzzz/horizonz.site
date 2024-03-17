import React from 'react'
import blog_icon from '../assets/blog.png'
import about_icon from '../assets/about.png'
import github_icon from '../assets/github.png'
import home_icon from '../assets/home.png'

import moon from '../assets/moon.png'
import sun from '../assets/sun.png'


const mainNavItems = [
  { url: '/', icon: home_icon, label: 'Home' },
  { url: '/about', icon: about_icon, label: 'About' },
  { url: '/blog', icon: blog_icon, label: 'Blog' },
]

const socialNavItems = [
  { url: 'https://github.com/taniarascia', icon: github_icon, label: 'GitHub' },
]

  const   Navigation = () => {


    const handleRoute = (path) => {
      

    }


  return (
    <section className="navigation">
      <div className="container">
        <nav>
          {mainNavItems.map((item) => (
            <div className="nav-item-outer" key={item.url}  onClick={()=>handleRoute(item.url)}>
                <img src={item.icon.src} alt={item.label} className="nav-image" />
                <span>{item.label}</span>
            </div>
          ))}

          {socialNavItems.map((item) => (
            <div className="nav-item-outer" key={item.url}>
              <a
                href={item.url}
                key={item.label}
                target="_blank"
                rel="noreferrer"
              >
                <img src={item.icon.src} alt={item.label} className="nav-image" />
                <span>{item.label}</span>
              </a>
            </div>
          ))}
        </nav>
        {/* <div className="theme-toggle">
          <button onClick={onUpdateTheme}>
            <img src={moon} alt="Theme" />
          </button>
        </div> */}
      </div>
    </section>
  )
}

export default Navigation

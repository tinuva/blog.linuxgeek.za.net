import React from 'react'
import { Helmet } from 'react-helmet'

import Header from './Header/Header'
import Footer from './Footer/Footer'
import SideBar from '../Sidebar'
import MenuFAB from '../MenuFAB'

import './index.css'
import './darkmode.css'
// PrismJS dependency
import 'prismjs/themes/prism-okaidia.css'

import ogImage from '../../../static/default-ogimage.png'

const title = `David Bezuidenhout | All things home automation. Includes occasional learning, software engineering and life stories.`
const description = `This blog and home automation posts are all about helping you get started with home automation in your own life. I'm David and I build things on the web with JavaScript and React. In this blog you will find posts about 💻 web development, 🏠 smart home automation, 👨‍🎓️ life-long learning, goals and stories as well as who knows what else in the future. I write code and solve problems. I love 3D printing, contributing to open source.`

const Layout = ({ children }) => (
  <>
    <Helmet
      title={title}
      meta={[
        {
          name: 'description',
          content: description,
        },
        {
          name: 'keywords',
          content:
            'javascript, JavaScript, React, Gatsby, open source, build guide, tools, 3D printing, solving problems, projects, coding, learning to code, year in review, improving, getting better, become a programmer, growth, smart home automation, home assistant, open source software, OSS, code, DIY, projects, life-long learning, learning, teaching, education, web development, reviews, builds, guides, binding guides',
        },
        {
          property: 'og:image',
          content: `https://blog.linuxgeek.za.net${ogImage}`,
        },
        { property: 'og:type', content: 'website' },
        {
          property: 'og:url',
          content: 'https://blog.linuxgeek.za.net',
        },
        {
          property: 'og:title',
          content: title,
        },
        {
          property: 'og:description',
          content: description,
        },
      ]}
    />

    <Header />

    <div className="main-wrapper">
      <SideBar />
      <MenuFAB />
      <div className="main">{children}</div>
      <Footer />
    </div>
  </>
)

export default Layout

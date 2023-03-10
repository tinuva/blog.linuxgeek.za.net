import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import EternalArchives from '../components/EternalArchives'
import useSortedMarkdown from '../hooks/use-sortedmarkdown'

const activeStyle = {
  color: '#0057e7',
  fontWeight: 600,
  fontSize: '0.95rem',
}

const StyledSidebar = styled.aside`
  a {
    color: #0175d8;
    text-decoration: none;
    box-shadow: none;
  }

  a:hover {
    color: #0175d8;
    box-shadow: none;
  }

  a:not(.sidenav-category):hover {
    text-decoration: underline;
  }
`

const SideBar = () => {
  const sortedByCategory = useSortedMarkdown()

  return (
    // <div></div>
    <StyledSidebar className="sidebar-wrapper">
      <div className="sidebar">
        <ul className="sidenav">
          <li>
            <Link to="/posts/?category=smarthome" className="sidenav-category">
              <span role="img" aria-label="house">
                🏠
              </span>{' '}
              <em>Smart home automation</em>
            </Link>
          </li>
          {sortedByCategory['smarthome'].map((page) => (
            <li key={page.node.id}>
              <Link to={page.node.frontmatter.path} activeStyle={activeStyle}>
                {page.node.frontmatter.title}
              </Link>
            </li>
          ))}
          <li>
            <Link to="/posts/?category=projects" className="sidenav-category">
              <span role="img" aria-label="project">
                📑
              </span>{' '}
              <em>Projects</em>
            </Link>
          </li>
          {sortedByCategory['projects'].map((page) => (
            <li key={page.node.id}>
              <Link to={page.node.frontmatter.path} activeStyle={activeStyle}>
                {page.node.frontmatter.title}
              </Link>
            </li>
          ))}
          {/* <li>
            <Link to="/posts/?category=learning" className="sidenav-category">
              <span role="img" aria-label="student">
                👨‍🎓️
              </span>{' '}
              <em>Life-long learning</em>
            </Link>
          </li>
          {sortedByCategory['learning'].map((page) => (
            <li key={page.node.id}>
              <Link to={page.node.frontmatter.path} activeStyle={activeStyle}>
                {page.node.frontmatter.title}
              </Link>
            </li>
          ))} */}
          <li>
            <Link to="/posts/?category=stories" className="sidenav-category">
              <span role="img" aria-label="hand writing">
                ✍
              </span>{' '}
              <em>Writing</em>
            </Link>
          </li>
          {sortedByCategory['stories'].map((page) => (
            <li key={page.node.id}>
              <Link to={page.node.frontmatter.path} activeStyle={activeStyle}>
                {page.node.frontmatter.title}
              </Link>
            </li>
          ))}
        </ul>
        <hr />
        {/* <EternalArchives /> */}
      </div>
    </StyledSidebar>
  )
}

export default SideBar

import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import Layout from '../../components/structure/layout'
import AuthorMessage from '../../components/AuthorMessage'

const Section = styled.section``

const AboutPage = () => (
  <Layout>
    <Section>
      <AuthorMessage type="webdev" />
      <p>
        {/* I'm a {` `}
        <Link to="/learning/how-i-got-into-software-development/">
          software engineer
        </Link>{' '}
        and currently work mostly with JavaScript, React, TypeScript, Electron,
        Node.js. You can find me on{' '}
        <a href="https://www.youtube.com/@FPVtips">YouTube</a>,{' '}
        <a href="https://twitter.com/jumpalottahigh">Twitter</a>,{' '}
        <a href="https://github.com/jumpalottahigh">GitHub</a>,{' '}
        <a href="https://twitch.tv/jumpalottahigh">Twitch</a> and{' '}
        <a href="https://www.linkedin.com/in/yanevgeorgi">LinkedIn</a>
        . */}
        I'm a {` `}
        <a href="https://www.amazon.jobs/en/jobs/2060592/cloud-support-engineer">Cloud Support Engineer</a> at AWS
        and currently work mostly with the container services
        AppMesh, ECS and EKS. You can find me on{' '}
        <a href="https://twitter.com/tinuvaza">Twitter</a>,{' '}
        <a href="https://github.com/tinuva">GitHub</a>,{' '}
        <a href="https://www.linkedin.com/in/davidbez">LinkedIn</a>
        .
        <br />
      </p>
      <p>
        In this blog you will find posts about {' '}
        <strong>
          <span role="img" aria-label="os">
            🐧
          </span>{' '}
          Linux sysadmin
        </strong>
        ,{' '}
        <strong>
          <span role="img" aria-label="network">
            🔀
          </span>{' '}
          networking
        </strong>
        ,{' '}
        <strong>
          <span role="img" aria-label="computer">
            💻
          </span>{' '}
          web development
        </strong>
        ,{' '}
        <strong>
          <span role="img" aria-label="house">
            🏠
          </span>{' '}
          smart home automation
        </strong>
        ,{' '}
        <strong>
          <span role="img" aria-label="student">
            👨‍🎓️
          </span>{' '}
          life-long learning, goals and stories
        </strong>{' '}
        as well as who knows what else in the future.
      </p>
      <p>
        I also sometimes <strong>enjoy coding</strong>. 
        Most of my projects are open source and{' '}
        <a href="https://github.com/tinuva?tab=repositories">
          available on GitHub
        </a>
        .
      </p>
      <p>
        This blog was a joy to build using{' '}
        <strong>
          <a href="https://www.gatsbyjs.org">Gatsby</a>
          <span role="img" aria-label="heart">
            💜
          </span>
        </strong>{' '}
        and is hosted on{' '}
        <strong>
          <a href="https://pages.github.co">GitHub Pages</a>
          <span role="img" aria-label="fire">
            🔥
          </span>
        </strong>
        .
      </p>
      <div
        css={`
          display: flex;
          flex-flow: column wrap;

          a {
            width: fit-content;
          }
        `}
      >
        {/* <p>More links:</p>
        <a href="https://www.georgi-yanev.com/about/">
          Portfolio, Skills and Projects
        </a>
        <a href="https://www.georgi-yanev.com/bio/">Bio</a>
        <a href="https://www.gyanev.com/cv/">CV</a>
        <Link to="/learning/my-2019-in-review/">
          My last year in review post
        </Link> */}
      </div>
    </Section>
  </Layout>
)

export default AboutPage

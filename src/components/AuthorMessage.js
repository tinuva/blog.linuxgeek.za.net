import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'

import svgReact from '../../static/react.svg'
import svgJS from '../../static/javascript.svg'

const AuthorMessage = ({ type = 'fpv', style }) => {
  const authorImage = useStaticQuery(graphql`
    {
      georgiFpv: file(relativePath: { regex: "/^home/davidb-profile.png/" }) {
        name
        childImageSharp {
          fluid(maxWidth: 100, quality: 75) {
            ...GatsbyImageSharpFluid
          }
        }
      }

      georgi: file(relativePath: { regex: "/^home/davidb-profile.png/" }) {
        name
        childImageSharp {
          fluid(maxWidth: 100, quality: 75) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: '1rem',
        ...style,
      }}
    >
      <div style={{ width: '20%' }}>
        {/* <div style={{ maxWidth: '100px' }}>
          <Img
            fluid={
              type === 'fpv'
                ? authorImage.georgiFpv.childImageSharp.fluid
                : authorImage.georgi.childImageSharp.fluid
            }
            alt="David Bezuidenhout portrait"
            style={{ borderRadius: '50%' }}
          />
        </div> */}
      </div>
      {type === 'fpv' ? (
        <h2
          style={{
            fontSize: '1.4rem',
            width: '80%',
            margin: 0,
            paddingLeft: '1rem',
          }}
        >
          Hi, I'm David and I love all things technology.
        </h2>
      ) : (
        <h2
          style={{
            fontSize: '1.4rem',
            width: '80%',
            margin: 0,
            paddingLeft: '0rem',
          }}
        >
          Hi, I'm David and I enjoy all things internet related
        </h2>
      )}
    </div>
  )
}

export default AuthorMessage

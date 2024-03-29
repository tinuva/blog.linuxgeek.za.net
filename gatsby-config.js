require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  pathPrefix: `/`,
  siteMetadata: {
    title: `David Bezuidenhout's Blog`,
    siteUrl: `https://blog.linuxgeek.za.net`,
    author: `David Bezuidenhout`,
    description: `David Bezuidenhout's Blog`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    // {
    //   resolve: 'gatsby-plugin-ebook',
    //   options: {
    //     filename: 'fpvtips-ebook.epub',
    //     query: `
    //       {
    //         site {
    //           siteMetadata {
    //             title
    //             author
    //           }
    //         }
    //         allMarkdownRemark(
    //           sort: { fields: frontmatter___date, order: ASC },
    //           filter: {
    //             frontmatter: { draft: { ne: true } }
    //             fileAbsolutePath: { regex: "/content/posts/fpv/" }
    //            }
    //         ) {
    //           edges {
    //             node {
    //               id
    //               fileAbsolutePath
    //               rawMarkdownBody
    //               frontmatter {
    //                 title
    //                 date
    //               }
    //             }
    //           }
    //         }
    //       }
    //     `,
    //   },
    // },
    {
      resolve: `gatsby-plugin-sitemap`,
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content`,
        name: 'content',
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/assets/pages`,
        name: `images`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1000,
              backgroundColor: 'transparent',
              withWebp: true,
              quality: 75,
              // Remove the default behavior of adding a link to each
              // image.
              linkImagesToOriginal: true,
              wrapperStyle(image) {
                let maxImageWidth;
                if (image.aspectRatio < 1) maxImageWidth = image.aspectRatio * 1000;
                else maxImageWidth = 1000;
          
                return `max-width: clamp(200px, calc(${
                    image.aspectRatio
                  }* 80vh), ${
                    Math.round(maxImageWidth * 10) / 10
                  }px); max-height: 1000px;`;
                },
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              aliases: {
                sh: 'shell',
                es6: 'javascript',
                env: 'bash',
                mdx: 'md',
              },
            },
          },
          `gatsby-remark-external-links`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
          `@weknow/gatsby-remark-twitter`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-435883xx-xxx`,
      },
    },
    // {
    //   resolve: `gatsby-source-youtube-v3`,
    //   options: {
    //     channelId: ['@FPVtips', '@GeorgiFPV'],
    //     apiKey: process.env.YOUTUBE_API_KEY,
    //     maxVideos: 50, // Defaults to 50
    //   },
    // },
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        feeds: [
          {
            serialize: ({ query: { site, allMarkdownRemark } }) => {
              return allMarkdownRemark.edges.map((edge) => {
                return Object.assign({}, edge.node.frontmatter, {
                  description: edge.node.excerpt,
                  url:
                    site.siteMetadata.siteUrl +
                    edge.node.frontmatter.path +
                    '/',
                  guid:
                    site.siteMetadata.siteUrl +
                    edge.node.frontmatter.path +
                    '/',
                  custom_elements: [{ 'content:encoded': edge.node.html }],
                })
              })
            },
            query: `
            {
              allMarkdownRemark(
                limit: 1000,
                sort: { order: DESC, fields: [frontmatter___date] },
                filter: {
                  fileAbsolutePath: { regex: "/content/posts/" }
                }
              ) {
                edges {
                  node {
                    excerpt(pruneLength: 140)
                    html
                    frontmatter {
                      title
                      date
                      path
                    }
                  }
                }
              }
            }
            `,
            output: '/feed.xml',
            title: "David's Blog",
          },
        ],
      },
    },
    {
      // If you’re using this plugin together with gatsby-plugin-offline (recommended),
      // this plugin should be listed before the offline plugin so that it can cache the created manifest.json.
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'David Bezuidenhout Blog',
        short_name: 'David Blog',
        start_url: '/',
        background_color: '#f7f0eb',
        theme_color: '#0275d8',
        display: 'minimal-ui',
        icons: [
          {
            src: `/android-chrome-512x512.png`,
            sizes: `512x512`,
            type: `image/png`,
          },
        ],
      },
    },
  ],
}

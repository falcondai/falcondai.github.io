import React, { Fragment } from "react"
import { Link } from "gatsby"
import { Styled, css } from "theme-ui"

import Layout from "gatsby-theme-blog/src/components/layout"
import SEO from "gatsby-theme-blog/src/components/seo"

// The blog index page
const Posts = ({ location, posts, siteTitle, socialLinks }) => (
  <Layout title={siteTitle}>
    <main>
      <div>
        <Styled.p>
          👋 Welcome to my opinionated blog where I share ideas technical, philosophical, or otherwise.
        </Styled.p>
      </div>
      {posts.map(({ node }) => {
        const title = node.title || node.slug
        const keywords = node.keywords || []
        return (
          <Fragment key={node.slug}>
            <SEO
              title="Blog"
              location={location.href}
              keywords={keywords}
              description="👋 Welcome to my opinionated blog where I share ideas technical, philosophical, or otherwise."
            />
            <div>
              <Styled.h2
                css={css({
                  mb: 1,
                })}
              >
                <Styled.a
                  as={Link}
                  css={css({
                    textDecoration: `none`,
                  })}
                  to={node.slug}
                >
                  {title}
                </Styled.a>
              </Styled.h2>
              <small
                css={css({
                  color: `muted`,
                })}
              >
                {node.date}
              </small>
              <Styled.p>{node.excerpt}</Styled.p>
            </div>
          </Fragment>
        )
      })}
    </main>
  </Layout>
)

export default Posts

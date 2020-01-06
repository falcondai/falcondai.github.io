import React from "react"
import { graphql } from "gatsby"
import { Styled } from "theme-ui"

import Layout from "gatsby-theme-blog/src/components/layout"
import SEO from "gatsby-theme-blog/src/components/seo"

export default ({
  data: {
    site: {
      siteMetadata: { title },
    },
  },
}) => (
  <Layout title={title}>
    <SEO title='404 | Falcon Dai' />
    <Styled.h1>Error 404</Styled.h1>
    <Styled.p>
      🤯 Page not found. If you think that this page should exist, tell me about it via a tweet {` `}
      <Styled.a href="https://twitter.com/falcondai">
        @falcondai
      </Styled.a>.
    </Styled.p>
  </Layout>
)

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`

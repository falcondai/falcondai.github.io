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
    <SEO title='404' />
    <Styled.h1>Error 404</Styled.h1>
    <Styled.p>
      🤯 Page not found. If you think that this page should exist, tell me about it by opening an{` `}
      <Styled.a href="https://github.com/falcondai/falcondai.github.io/issues">
        issue
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

import React from "react"
import { Styled, css } from "theme-ui"
import { MDXRenderer } from "gatsby-plugin-mdx"

import "katex/dist/katex.min.css"

import Layout from "gatsby-theme-blog/src/components/layout"
import SEO from "gatsby-theme-blog/src/components/seo"

import PostFooter from "../../components/post-footer"

const Post = ({
  data: {
    post,
    site: {
      siteMetadata: {
        title,
        author,
        authorTwitter,
      },
    },
  },
  location,
  previous,
  next,
}) => (
  <Layout title={title}>
    <SEO
      title={post.title}
      meta={[
        // TODO
        // {
        //   property: `article:published_time`,
        //   content: post.date,
        // },
        {
          property: `article:author`,
          content: author,
        },
      ]}
      location={location.href}
      description={post.excerpt}
      isArticle
    />
    <main>
      <Styled.h1>{post.title}</Styled.h1>
      <Styled.p
        css={css({
          fontSize: 1,
          mt: -3,
          mb: 3,
          color: `muted`,
        })}
      >
        {post.date}
      </Styled.p>
      <MDXRenderer>{post.body}</MDXRenderer>
      <Styled.div
        css={css({
          fontSize: 1,
          mt: 4,
          mb: 3,
          color: `muted`,
        })}
      >
        🛠Before a comment system is integrated, feel free to talk to me about this article via <Styled.a href="https://twitter.com/falcondai">{authorTwitter}</Styled.a> on twitter.
      </Styled.div>
    </main>
    <PostFooter {...{ previous, next }} />
  </Layout>
)

export default Post

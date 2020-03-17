import { graphql } from "gatsby"
import PostPage from "gatsby-theme-blog-core/src/components/post"

export default PostPage

export const query = graphql`
  query NewPostPageQuery($id: String!, $previousId: String, $nextId: String) {
    site {
      siteMetadata {
        title
        author
        authorTwitter
        social {
          name
          url
        }
      }
    }
    blogPost(id: { eq: $id }) {
      id
      excerpt
      body
      slug
      title
      tags
      keywords
      date(formatString: "MMMM DD, YYYY")
    }
    previous: blogPost(id: { eq: $previousId }) {
      id
      excerpt
      slug
      title
      date(formatString: "MMMM DD, YYYY")
    }
    next: blogPost(id: { eq: $nextId }) {
      id
      excerpt
      slug
      title
      date(formatString: "MMMM DD, YYYY")
    }
  }
`

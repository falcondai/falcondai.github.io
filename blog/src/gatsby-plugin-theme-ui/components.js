import Prism from '@theme-ui/prism'
import headings from "gatsby-theme-blog/src/components/headings"

export default {
  pre: props => props.children,
  code: Prism,
  ...headings,
}

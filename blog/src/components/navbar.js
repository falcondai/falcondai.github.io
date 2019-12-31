import React from "react"
import { Link } from "gatsby"
import { Styled, css } from "theme-ui"

const ListLink = props => (
  <li style={{ display: `inline-block`, marginRight: `1rem` }}>
    <Styled.a
      as={Link}
      to={props.to}
      css={css({
        color: `secondary`,
      })}
    >
      {props.children}
    </Styled.a>
  </li>
)

const Navbar = () => (
  <nav style={{
    display: `flex`,
    flex: 1,
    justifyContent: `flex-end`,
  }}>
    <ul style={{
      listStyle: `none`,
    }}>
      <ListLink to='/'>About</ListLink>
      <ListLink to='/blog'>Blog</ListLink>
    </ul>
  </nav>
)

export default Navbar

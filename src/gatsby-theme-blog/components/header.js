import React from "react"
import { css, useColorMode, Styled } from "theme-ui"

import Switch from "gatsby-theme-blog/src/components/switch"
import sun from "gatsby-theme-blog/assets/sun.png"
import moon from "gatsby-theme-blog/assets/moon.png"

import Navbar from "../../components/navbar"

const Title = ({ children }) => (
  <Styled.h1
    css={css({
      my: 0,
      fontSize: 5,
      color: `primary`,
    })}
  >
    {children}
  </Styled.h1>
)

const iconCss = [
  css({
    pointerEvents: `none`,
  }),
  { margin: 4 }, // Explicitly leave margin out of theme-ui, this positioning should not change based on theme
]

const checkedIcon = (
  <img
    alt="moon indicating dark mode"
    src={moon}
    width="16"
    height="16"
    role="presentation"
    css={iconCss}
  />
)

const uncheckedIcon = (
  <img
    alt="sun indicating light mode"
    src={sun}
    width="16"
    height="16"
    role="presentation"
    css={iconCss}
  />
)

export default ({ children, title, ...props }) => {
  const [colorMode, setColorMode] = useColorMode()
  const isDark = colorMode === `dark`
  const toggleColorMode = e => {
    setColorMode(isDark ? `light` : `dark`)
  }

  return (
    <header>
      <div
        css={css({
          maxWidth: `container`,
          mx: `auto`,
          px: 3,
          pt: 4,
        })}
      >
        <div
          css={css({
            display: `flex`,
            justifyContent: `space-between`,
            alignItems: `center`,
            mb: 4,
          })}
        >
          <Title {...props}>{title}</Title>
          {children}
          <Navbar />
          <Switch
            aria-label="Toggle dark mode"
            checkedIcon={checkedIcon}
            uncheckedIcon={uncheckedIcon}
            checked={isDark}
            onChange={toggleColorMode}
          />
        </div>
      </div>
    </header>
  )
}

import * as React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import MenuButton from "./buttons/menuButton"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"

const Header = ({ siteTitle }) => (
  <Wrapper>
    <Link to="/">
      <StaticImage
        src="../images/gatsby-icon.png"
        placeholder="blurred"
        layout="fixed"
        width={50}
        height={50}
      />
    </Link>
    <ContentWrapper>
      <MenuButton to="/" title="Headphones"></MenuButton>
      <MenuButton to="/" title="Cases"></MenuButton>
      <MenuButton to="/" title="Chargers"></MenuButton>
    </ContentWrapper>
  </Wrapper>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 50px 20px;
`

const ContentWrapper = styled.div`
  display: flex;
  justify-items: center;
  align-items: center;
  gap: 10px;
  background-color: white;
  border-radius: 20px;
  padding: 10px;
`

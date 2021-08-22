import * as React from "react"
import styled from "styled-components"
import MenuButton from "./buttons/MenuButton"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
import TextField from "./TextField"
import PropTypes from "prop-types"

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
    <TextField placeholder="Search" width="300px" />
    <Link to="/page-2">
      <AccountButton />
    </Link>
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
  border: thin solid gray;
  padding: 10px;
`

const AccountButton = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  align-content: center;
  justify-content: center;
  background-color: white;
  border: thin solid gray;

  :hover {
    background: rgba(255, 255, 255, 0.1);
    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.1),
      inset 0px 0px 0px 0.5px rgba(255, 255, 255, 0.2);
  }
`

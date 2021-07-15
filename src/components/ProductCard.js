import * as React from "react"
import styled from "styled-components"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import SecondaryButton from "./buttons/SecondaryButton"

export default function ProductCard(props) {
  const image = getImage(props.image || "/images/gatsby-icon.png")
  return (
    <Wrapper>
      <ContentWrapper>
        <ImageWrapper>
          <GatsbyImage image={image} alt={"image"} />
        </ImageWrapper>
        <TextWrapper>
          <Title>{props.title}</Title>
          <SubTitle>{props.price} HUF</SubTitle>
          <Text>Category: {props.category}</Text>
        </TextWrapper>
        <SecondaryButton to={props.to} title="See Details" />
      </ContentWrapper>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  background-color: white;
  border-radius: 20px;
  width: 200px;
  transition: 0.5s cubic-bezier(0.075, 0.82, 0.165, 1);
  line-height: 2;
  :hover {
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
      rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
      rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
  }
`

const ContentWrapper = styled.div`
  padding: 15px;
`
const ImageWrapper = styled.div`
  display: flex;
  min-height: 200px;
  align-items: center;
  justify-content: center;
`

const TextWrapper = styled.div`
  padding: 15px 0px;
`

const Title = styled.h3`
  color: black;
  font-weight: bold;
`
const SubTitle = styled.h4`
  color: gray;
  font-size: 15px;
`

const Text = styled.p`
  font-size: 10px;
`

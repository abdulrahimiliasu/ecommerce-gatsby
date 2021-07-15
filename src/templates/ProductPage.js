import * as React from "react"
import styled from "styled-components"
import { graphql } from "gatsby"
import Header from "../components/header"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import SecondaryButton from "../components/buttons/SecondaryButton"
import Gallery from "@browniebroke/gatsby-image-gallery"

export default function ProductPage({ data }) {
  const imgs = data.contentfulAccessories.pictures
  console.log(imgs)
  return (
    <Wrapper>
      <Header />
      <ContentWrapper>
        <ImagesWrapper>
          <Gallery images={imgs} />
        </ImagesWrapper>
        <DetailsSection>
          <Title>{data.contentfulAccessories.name}</Title>
          <SubTitle>{data.contentfulAccessories.price} HUF</SubTitle>
          <Text>
            Color: {data.contentfulAccessories.color} <br />
            Company: {data.contentfulAccessories.company} <br />
            Category: {data.contentfulAccessories.category}
          </Text>
          <SecondaryButton to="/" title="Add to Cart" />
        </DetailsSection>
      </ContentWrapper>
    </Wrapper>
  )
}

export const query = graphql`
  query ($id: String!) {
    contentfulAccessories(id: { eq: $id }) {
      category
      pictures {
        thumb: gatsbyImageData(width: 300, height: 300, placeholder: BLURRED)
        full: gatsbyImageData(layout: FULL_WIDTH)
      }
      name
      color
      company
      price
    }
  }
`

const Wrapper = styled.div``
const ContentWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 25px;
`
const ImagesWrapper = styled.div`
  background-color: gray;
  padding: 20px;
  border-radius: 25px;
  max-width: 500px;
`

const DetailsSection = styled.div`
  background-color: white;
  border-radius: 25px;
  width: 400px;
  line-height: 2;
  padding: 10px;
`

const Title = styled.h1`
  font-weight: bold;
  color: black;
  font-size: 25px;
`

const SubTitle = styled.h2`
  font-weight: bold;
  color: black;
  font-size: 20px;
`

const Text = styled.h3`
  font-weight: bold;
  color: gray;
  font-size: 15px;
  padding: 10px 0px;
`

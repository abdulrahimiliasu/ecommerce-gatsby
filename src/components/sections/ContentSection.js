import * as React from "react"
import styled from "styled-components"
import { graphql, useStaticQuery } from "gatsby"
import ProductCard from "../ProductCard"

export default function ContentSection() {
  const data = useStaticQuery(graphql`
    {
      allContentfulAccessories {
        edges {
          node {
            id
            pictures {
              gatsbyImageData
            }
            name
            price
            category
            color
            company
          }
        }
      }
    }
  `)
  let content = data.allContentfulAccessories.edges
  return (
    <Wrapper>
      <ContentWrapper>
        {content.map(item => (
          <ProductCard
            key={item.node.id}
            image={item.node.pictures[0]}
            title={item.node.name}
            price={item.node.price}
            category={item.node.category}
            to={item.node.id}
          />
        ))}
      </ContentWrapper>
    </Wrapper>
  )
}

const Wrapper = styled.div``

const ContentWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  gap: 25px;
`

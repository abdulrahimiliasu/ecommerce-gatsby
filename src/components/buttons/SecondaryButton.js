import { Link } from "gatsby"
import * as React from "react"
import styled from "styled-components"

export default function SecondaryButton(props) {
  return (
    <Link to={props.to}>
      <Wrapper>
        <Title>{props.title}</Title>
      </Wrapper>
    </Link>
  )
}

const Wrapper = styled.div`
  border-radius: 15px;
  transition: 0.5s cubic-bezier(0.075, 0.82, 0.165, 1);
  box-shadow: rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset,
    rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset,
    rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px,
    rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px,
    rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 15px 0px;
  :hover {
    box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset,
      rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
  }
`

const Title = styled.h3`
  font-size: 17px;
  font-weight: normal;
  color: black;
`

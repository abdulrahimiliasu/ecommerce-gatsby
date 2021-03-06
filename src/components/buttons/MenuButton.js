import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

export default function MenuButton(props) {
  return (
    <Link to={props.to} onClick={props.onClick}>
      <MenuItem title={props.title}>{props.title}</MenuItem>
    </Link>
  )
}

const MenuItem = styled.div`
  color: black;
  display: flex;
  gap: ${props => (props.title ? "10px" : "0px")};
  align-items: center;
  padding: 10px;
  border-radius: 10px;
  transition: 0.5s ease-out;
  :hover {
    background: rgba(255, 255, 255, 0.1);
    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.1),
      inset 0px 0px 0px 0.5px rgba(255, 255, 255, 0.2);
  }
`

import React from "react"
import styled from "styled-components";
import { Link } from "react-router-dom";

const Headerstyle = styled.div`
  background-color: #B7A7AE;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100vw;
  
  h2 {
    color: #58545B;
    margin: 15px
  }
  div {
    margin-right: 20px;
  }
  span {
    margin: 10px;
    color: #58545B;
  }
`

export default function Header() {
  return (
    <Headerstyle>
      <Link to='/' style={{ textDecoration: "none"}}><h2>PlAN HABIT</h2></Link>
      <div>
        <Link to='/plan' style={{ textDecoration: "none"}}><span>Today's plan</span></Link>
        <Link to='/habit' style={{ textDecoration: "none"}}><span>Habit</span></Link>
      </div>
    </Headerstyle>
  )
}

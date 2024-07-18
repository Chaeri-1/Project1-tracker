import React from "react"
import styled from "styled-components";
import kakaotalk from '../img/icons8-kakao-talk-50.png'
import mail from '../img/icons8-mail-24.png'

const Footerstyle = styled.div`
  width: 100vw;
  position: fixed;
  bottom: 0;
  display: flex;
  //justify-content: center;

  background-color: #1C252C;
  color: #E1D5D9;

  div {
    margin: 10px;
    display: flex;
    //flex-direction: column;
    align-items: center;
  }
  p {
    margin: 5px;
    display: flex;
    justify-content: center;
  }
`

const Contact = styled.div`
//한줄로 어떻게 하지..
  a {
    //background-color: #E1D5D9;
    //color: #1C252C;
    text-decoration: none;
    border-radius: 5px;
    margin: 5px;
    padding: 3px;
    justify-content: center;
  }
  img {
    width: 30px;
    height: 30px;
  }
`

export default function Footer() {
  return(
    <Footerstyle>
      <div>
        <p>my frist project</p>
        <p>latest-update<span>2024-07-28</span></p>
        <Contact>
          <span>Contact</span>
          <a
          href="https://open.kakao.com/o/sQHNouhg"
          target="_blank"
          ><img src={kakaotalk}/></a>
          <a href="mailto:alfsdo03@hufs.ac.kr"><img src={mail}/></a>
        </Contact>
      </div>
    </Footerstyle>
  )
}


import React from "react"
import styled from "styled-components";
import kakaotalk from '../img/icons8-kakao-talk-50.png'
import mail from '../img/icons8-mail-24.png'
import { LuMail } from "react-icons/lu";
import { RiKakaoTalkLine } from "react-icons/ri";

const Footerstyle = styled.div`
  width: 100vw;
  position: fixed;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #1C252C;
  color: #E1D5D9;

  h2 {
    display: flex;
    justify-content: center;
    margin-bottom: 0;
    font-size: 30px;
  }

  p {
    display: flex;
    justify-content: center;
    margin: 5px;
    font-size: 12px;
    color: #666;
    font-style: italic;
  }
`

const Contact = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  ul {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 16px;
    margin: 20px;
    padding: 5px;
  }

  a {
    margin: 0 8px;
    text-decoration: none;
    color: #E1D5D9;
  }
`

export default function Footer() {
  return(
    <Footerstyle>
      <h2>MY FIRST PROJECT</h2>
      <p>Last updated: 2024.08.13</p>
      <Contact>
        <ul><LuMail style={{fontSize: '23px'}}/><a href="mailto:alfsdo03@hufs.ac.kr">alfsdo03@hufs.ac.kr</a></ul>
        <ul><RiKakaoTalkLine style={{fontSize: '24px'}}/><a href="https://open.kakao.com/o/sQHNouhg" target="_blank">OpenChat_Link</a></ul>
        </Contact>
    </Footerstyle>
  )
}


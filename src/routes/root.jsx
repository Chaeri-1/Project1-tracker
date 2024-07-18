import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./header";
import Footer from "./footer";
// import styled from "styled-components";

// const Content = styled.div`
//   flex: 1;
// `


export default function Root() {
  return (
    <>
      <div>
        <Header/>
        <Outlet/>
        <Footer/>
      </div>
    </>
  )
}
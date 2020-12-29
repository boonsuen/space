import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import styled from 'styled-components';

import img_logo from '../assets/img/logo.svg';
import img_arrow from '../assets/img/right-arrow-white.svg';

const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 95px;
`;

const Footer = styled.footer`
  border-top: 1px solid #DCDCDC;
  text-align: center;
  padding-top: 20px;
`;

const NavCTAS = styled.div`
  display: flex;

  a {    
    display: flex;
    justify-content: center;
    align-items: center;
    width: 110px;
    height: 45px;    
    border-radius: 5px;
    font-weight: 500;
  }

  a:first-child {
    background: linear-gradient(180deg, #FFFFFF 0%, #FFFFFF 100%);
    box-shadow: 0px 1px 0px 1px #F9F9FB, 0px 8px 12px rgba(31, 33, 81, 0.25);
    color: #313154;
  }

  a:last-child {
    margin-left: 18px;
    background: linear-gradient(180deg, #913DFF 0%, #7733F4 100%);
    box-shadow: 0px 1px 0px 1px #6327D3, 0px 8px 12px rgba(31, 33, 81, 0.25);    
    color: #FFF;
  }
`;

const Hero = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 300px;

  h1 {
    margin: 0 0 25px 0;
    color: rgb(0 0 32 / 90%);
    font-size: 24px;    
  }

  a {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    height: 45px;
    padding: 0 20px;
    background: linear-gradient(180deg, #3B3B54 0%, #060625 100%);
    box-shadow: 0px 8px 12px rgba(31, 33, 81, 0.25);
    border-radius: 5px;
    color: #FFF;
    font-weight: 500;

    img {
      margin-left: 12px;
    }
  }
`;

const FeaturesContainer = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 35px;

  & > div { 
    font-size: 36px;
    font-weight: 700;
    padding: 10px 24px;
    position: relative;
  }

  & > div::before {
    position: absolute;
    background-color: #F4F5FF;
    border-radius: 10px;
    content: "";
    z-index: -1;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }

  & > div:first-child {
    background-image: linear-gradient(135deg, #3423CA 0%, #D957D9 70%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  & > div:nth-child(2) {
    background-image: linear-gradient(135deg, #237ACA 0%, #6957D9 70%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  & > div:nth-child(3) {
    background-image: linear-gradient(135deg, #23C0CA 0%, #579BD9 70%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  & > div:last-child {
    background-image: linear-gradient(135deg, #514DFF 0%, #2888F9 70%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

export default function Home() {
  return (
    <React.Fragment>
      <Head>
        <title>Space</title>
      </Head>
      <NavContainer className="container">
        <Link href="/">
          <a><img src={img_logo} alt="Space logo" /></a>
        </Link>
        <NavCTAS>
          <Link href="/login"><a>Login</a></Link>
          <Link href="/signup"><a>Sign Up</a></Link>
        </NavCTAS>        
      </NavContainer>
      <main>
        <Hero className="container">
          <h1>All In One Place</h1>
          <FeaturesContainer>
            <div>Todo</div>
            <div>Kanban</div>
            <div>List</div>
            <div>Table</div>
          </FeaturesContainer>          
          <Link href="/signup">
            <a>Get Started<img src={img_arrow} alt="Right arrow" /></a>
          </Link>
        </Hero>        
      </main>
      <Footer className="container">
        <a href="#">Feedback</a>
      </Footer>
    </React.Fragment>
  )
}

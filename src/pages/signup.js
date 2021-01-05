import Head from 'next/head';
import Link from 'next/link';
import styled from 'styled-components';

import { media } from '../components/GlobalStyle.css';

import img_logo from '../assets/img/logo.svg';
import img_email from '../assets/img/email.svg';
import img_password from '../assets/img/password.svg';
import img_send from '../assets/img/send.svg';

export const Container = styled.div`
  max-width: 500px;
  width: 90%;
  margin: auto;
  padding: 70px 0;
  color: #141418;
  ${media['800']`max-width: 400px`};
  ${media['675']`padding: 42px 0`};
`;

export const Card = styled.div`
  width: 100%;
  margin-top: 40px;
  box-shadow: 0 25px 50px rgb(74 74 139 / 25%);
  border-radius: 8px;
  padding: 52px 48px;  
  background: #fff;
  ${media['675']`
    margin-top: 25px;
    padding: 32px 26px;
  `}
  ${media['400']`padding: 32px 20px`};

  a {
    color: #4630EB;
  }
`;

export const Title = styled.h1`
  margin: 0 0 30px 0;
  font-size: 24px;
  font-weight: 600;
  ${media['400']`margin: 0 0 25px 0`};
`;

export const Label = styled.label`
  display: flex;
  align-items: center;
  margin-bottom: 10px;  

  img {
    margin-right: 11px;
  }
`;

export const Input = styled.input`
  width: 100%;
  height: 46px;
  margin-bottom: 18px;
  box-sizing: border-box;
  border-radius: 8px;
  border: 1px solid #EDF2F7;
  padding-left: 14px;
  background: #EDF2F7;
  transition: all 300ms;
  color: #374151;
  font-size: 16px;

  &:focus {
    border-color: #889fff;
    background-color: #fcfcff;
  }

  &:focus, &:active {
    outline: none;
  }
  
  &::placeholder {
    color: #718196;
  }
`;

export const Button = styled.button`
  height: 46px;
  margin: 9px 0 27px 0;
  padding: 0 23px;
  border-radius: 8px;
  background-color: #4630EB;
  color: #fff;

  img {
    margin-left: 10px;
  }
`;

const Signup = () => (  
  <Container>
    <Head>
      <title>Space - Sign Up</title>
    </Head>
    <Link href="/">
      <a><img src={img_logo} alt="Space logo" /></a>
    </Link>
    <Card>
      <Title>Create a new account</Title>
      <form>
        <Label htmlFor="email">
          <img src={img_email} alt="Email" />Email
        </Label>
        <Input 
          type="email" 
          id="email" 
          name="email"
          placeholder="you@example.com" 
          required
        />
        <Label htmlFor="password">
          <img src={img_password} alt="Password" />
          Password
        </Label>
        <Input 
          type="password" 
          id="password" 
          name="password"
          placeholder="Enter your password"
          required
        />
        <Button type="submit">
          Continue
          <img src={img_send} alt="Paper Plane" />
        </Button>
      </form>    
      <div>
        <span><span>Have an account&#63;</span> </span>
        <Link href="/login"><a>Log In</a></Link>
      </div>
    </Card>    
  </Container>
);

export default Signup;
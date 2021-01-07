import Head from 'next/head';
import Link from 'next/link';
import { Container, Card, Title, Fieldset, Label, Input, Button } from './signup';

import img_logo from '../assets/img/logo.svg';
import img_email from '../assets/img/email.svg';
import img_password from '../assets/img/password.svg';

const Login = () => (  
  <Container>
    <Head>
      <title>Space - Log In</title>
    </Head>
    <Link href="/">
      <a><img src={img_logo} alt="Space logo" /></a>
    </Link>
    <Card>
      <Title>Log in to your account</Title>
      <form>
        <Fieldset>
          <Label htmlFor="email">
            <img src={img_email} alt="Email" />Email
          </Label>
          <Input 
            type="email" 
            id="email" 
            name="email"
            placeholder="you@example.com" 
          />
        </Fieldset>      
        <Fieldset>
          <Label htmlFor="password">
            <img src={img_password} alt="Password" />
            Password
          </Label>
          <Input 
            type="password" 
            id="password" 
            name="password"
            placeholder="Enter your password"
          />
        </Fieldset>          
        <Button type="submit">
          Log In
        </Button>
      </form>    
      <div>
        <span><span>Don't have an account&#63;</span> </span>
        <Link href="/signup"><a>Sign Up</a></Link>
      </div>
    </Card>    
  </Container>
);

export default Login;
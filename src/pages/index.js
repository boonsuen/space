import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

import img_logo from '../assets/img/logo.svg';

export default function Home() {
  return (
    <React.Fragment>
      <Head>
        <title>Space</title>
      </Head>
      <img src={img_logo} alt="Space logo" />
      <Link href="login"><a>Login</a></Link>
      <Link href="signup"><a>Sign Up</a></Link>
      <main>
        <h1>All In One Place</h1>
        <div>Todo</div>
        <div>Kanban</div>
        <div>List</div>
        <div>Table</div>
        <Link href="signup"><a>Get Started</a></Link>
      </main>



      <footer>
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
        >
          Feedback
        </a>
      </footer>
    </React.Fragment>
  )
}

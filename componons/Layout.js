import { Container } from '@material-ui/core';
import Head from 'next/head';
import React from 'react';
import userStyles from '../utile/style';
import Footer from './Footer';
import Navbar from './Navbar';

export default function Layout({ children }) {
  const classes = userStyles();
  return (
    <div>
      <Head>
        <title>My NextApp</title>
      </Head>
      <Navbar></Navbar>
      <Container className={classes.main}>{children}</Container>
      <Footer></Footer>
    </div>
  );
}

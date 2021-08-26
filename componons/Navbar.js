import React from 'react';
import NextLink from 'next/link';
import { Typography, Toolbar, AppBar, Link } from '@material-ui/core';
import useStyles from '../utile/style';

export default function Navbar() {
  const classes = useStyles();
  return (
    <AppBar position="static" className={classes.navbar}>
      <Toolbar>
        <NextLink href="/" passHref>
          <Link>
            <Typography className={classes.brand}>HelaScript</Typography>
          </Link>
        </NextLink>
      </Toolbar>
    </AppBar>
  );
}

import { Typography } from '@material-ui/core';
import React from 'react';
import userStyles from '../utile/style';

export default function Footer() {
  const classes = userStyles();
  return (
    <footer className={classes.footer}>
      <Typography>All rights reseverd. HelaScript</Typography>
    </footer>
  );
}

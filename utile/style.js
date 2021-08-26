import { makeStyles } from '@material-ui/core';

const userStyles = makeStyles({
  navbar: {
    backgroundColor: '#203040',
    '& a': {
      color: '#ffffff',
      marginLeft: 10,
    },
  },

  brand: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
  },

  main: {
    minHeight: '80vh',
  },

  footer: {
    textAlign: 'center',
  },
});

export default userStyles;

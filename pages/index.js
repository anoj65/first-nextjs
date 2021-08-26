import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  IconButton,
  Typography,
} from '@material-ui/core';
import Head from 'next/head';
import Image from 'next/image';
import Layout from '../componons/Layout';
import styles from '../styles/Home.module.css';
import data from '../utile/data';
import Icon from '@material-ui/core/Icon';
import SaveIcon from '@material-ui/icons/Save';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import useStyles from '../utile/style';

export default function Home() {
  const classes = useStyles();
  return (
    <Layout>
      <div>
        <h1>Product</h1>
        <Grid container spacing={4}>
          {data.product.map((product) => (
            <Grid item md={3} xs={6} sm={4} key={product.name}>
              <Card>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    image={product.image}
                    title={product.name}
                  ></CardMedia>
                  <CardContent>
                    <Typography>{product.name}</Typography>
                    <Typography>${product.price}</Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions style={{ justifyContent: 'center' }}>
                  <IconButton color="primary" aria-label="add to shopping cart">
                    <AddShoppingCartIcon />
                  </IconButton>
                  <IconButton color="secondary" aria-label="add to wish list">
                    <FavoriteBorderIcon />
                  </IconButton>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </div>
    </Layout>
  );
}

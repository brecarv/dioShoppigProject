import React from "react";
import {
  Paper,
  Grid,
  Typography,
  Button,
  makeStyles,
} from "@material-ui/core/";
import { useSelector, useDispatch } from "react-redux";
import cartActions from "./store/actions/cart";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: "5px",
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
  },
}));

const Card = ({ name, price, imgUrl, children }) => {
  const cart = useSelector((state) => state.cart.value);
  const dispatch = useDispatch();
  const classes = useStyles();

  return (
    <Grid item xs={3}>
      <Paper className={classes.paper}>
        <Grid container direction="column">
          <Grid item>
            <img width="140px" src={imgUrl} alt={name} />
            <Typography variant="h6">{children}</Typography>
            <Typography variant="subtitle1">R$ {price}</Typography>
          </Grid>
          <Button
            variant="contained"
            onClick={() => dispatch(cartActions.Add(cart))}
          >
            Adicionar
          </Button>
        </Grid>
      </Paper>
    </Grid>
  );
};

export default Card;

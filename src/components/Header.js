import React from "react";
import { Link } from "react-router-dom";
import { Button, Grid, Typography } from "@material-ui/core";
import Cart from "./Cart";

const Header = () => {
  return (
    <Grid
      container
      direction="row"
      justify="space-between"
      alignItems="center"
      xs={12}
    >
      <Typography variant="h3">Dio Shopping</Typography>

      <Link to="/">
        <Button colo="primary">Home</Button>
      </Link>

      <Link to="/contato">
        <Button colo="primary">Contato</Button>
      </Link>

      <Cart />
    </Grid>
  );
};

export default Header;

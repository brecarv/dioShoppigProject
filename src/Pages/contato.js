import { Button, Grid, TextField } from "@material-ui/core";
import React from "react";

const Contatos = () => {
  return (
    <>
      <Grid container direction="row" xs={12}>
        <TextField id="name" label="Name" fullWidth />
        <TextField id="message" label="Message" fullWidth />
      </Grid>
      <Button variant="contained" color="primary">
        Sent
      </Button>
    </>
  );
};

export default Contatos;

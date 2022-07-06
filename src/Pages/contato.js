import React from "react";
import { useState, useEffect } from "react";
import { Button, Grid, TextField } from "@material-ui/core";

const Contato = () => {
  const [message, setMessage] = useState([]);

  useEffect(async () => {
    const response = await fetch("API");
    const data = await response.json();
    setMessage(data);
  });

  return (
    <>
      <Grid container direction="row" xs={12}>
        <TextField id="name" label="Nome" fullWidth />
        <TextField id="message" label="Mensagem" fullWidth />
      </Grid>
      <Button className="mt-2" variant="contained" color="primary">
        Sent
      </Button>

      <div className="card mt-2">
        <div className="card-body">
          <h5 className="card-title">Autor</h5>
          <p className="card-text"> Conteúdo da mensagem.</p>
          <p className="card-text">
            <small className="text-muted">Data da mensagem.</small>
          </p>
        </div>
      </div>
    </>
  );
};

export default Contato;

import React from "react";
import { connect } from "react-redux";
import { Paper, Grid, Typography, List, makeStyles } from "@material-ui/core/";
import Item from "../components/Item";
import Card from "../components/Card";

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

const HomePage = ({ products }) => {
  const classes = useStyles();

  const categories = products.map((category) => {
    const container = {};
    container["id"] = category.id_categories;
    container["name"] = category.name_categories;
    return container;
  });

  const category = categories
    .map(JSON.stringify)
    .filter(function (item, index, arr) {
      return arr.indexOf(item, index + 1) === -1;
    })
    .map(JSON.parse);

  const arrayCategory = categories.map((category) => category.name);
  let count = {};

  for (let i = 0; i < arrayCategory.length; i++) {
    let key = arrayCategory[i];
    count[key] = count[key] ? count[key] + 1 : 1;
  }

  return (
    <Grid container spacing={3} className={classes.root}>
      <Grid item xs={3}>
        <Paper className={classes.paper}>
          <Typography variant="h5">Categorias</Typography>
          <List>
            {category.map((category) => {
              return (
                <Item
                  key={category.id}
                  name={category.name}
                  details={count[category.name]}
                />
              );
            })}
          </List>
        </Paper>
      </Grid>
      <Grid container xs={9} spacing={3} className={classes.root}>
        {products.map((item) => {
          return (
            <Card key={item.id_product} product={item}>
              {item.name_product}
            </Card>
          );
        })}
      </Grid>
    </Grid>
  );
};

const mapStateToProps = (state) => ({
  products: state.products,
});

export default connect(mapStateToProps)(HomePage);

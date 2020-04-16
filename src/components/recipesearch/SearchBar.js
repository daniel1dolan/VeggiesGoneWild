import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
}));

export default function BasicTextFields(props) {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <form
        className={classes.root}
        noValidate
        autoComplete="off"
        onSubmit={props.submitHandler}
      >
        <TextField
          id="standard-basic"
          label="Search All Recipes"
          onChange={props.searchChange}
        />
        <FormControl className={classes.formControl}>
          <InputLabel id="demo-simple-select-label">Cuisine</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={props.parentState.cuisineField}
            onChange={props.cuisineChange}
          >
            <MenuItem value={"American"}>American</MenuItem>
            <MenuItem value={"Cajun"}>Cajun</MenuItem>
            <MenuItem value={"Caribbean"}>Caribbean</MenuItem>
            <MenuItem value={"Chinese"}>Chinese</MenuItem>
            <MenuItem value={"French"}>French</MenuItem>
            <MenuItem value={"Greek"}>Greek</MenuItem>
            <MenuItem value={"Indian"}>Indian</MenuItem>
            <MenuItem value={"Italian"}>Italian</MenuItem>
            <MenuItem value={"Korean"}>Korean</MenuItem>
            <MenuItem value={"Mediterranean"}>Mediterranean</MenuItem>
            <MenuItem value={"Mexican"}>Mexican</MenuItem>
            <MenuItem value={"Korean"}>Korean</MenuItem>
            <MenuItem value={"Spanish"}>Spanish</MenuItem>
            <MenuItem value={"Thai"}>Thai</MenuItem>
            <MenuItem value={"Vietnamese"}>Vietnamese</MenuItem>
          </Select>
        </FormControl>
        <FormControl className={classes.formControl}>
          <InputLabel id="demo-simple-select-label">Type</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={props.parentState.typeField}
            onChange={props.typeChange}
          >
            <MenuItem value={"main course"}>Main Course</MenuItem>
            <MenuItem value={"side dish"}>Side Dish</MenuItem>
            <MenuItem value={"dessert"}>Dessert</MenuItem>
            <MenuItem value={"appetizer"}>Appetizer</MenuItem>
            <MenuItem value={"salad"}>Salad</MenuItem>
            <MenuItem value={"bread"}>Bread</MenuItem>
            <MenuItem value={"breakfast"}>Breakfast</MenuItem>
            <MenuItem value={"soup"}>Soup</MenuItem>
            <MenuItem value={"beverage"}>Beverage</MenuItem>
            <MenuItem value={"snack"}>Snack</MenuItem>
          </Select>
        </FormControl>
        <Button
          className={classes.selectEmpty}
          variant="contained"
          color="primary"
          type="submit"
          value="submit"
        >
          Search
        </Button>
      </form>
    </div>
  );
}

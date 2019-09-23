import React, { useContext } from "react";
import { CountContext } from "./index";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1)
  },
  input: {
    display: "none"
  }
}));

const CountButton = props => {
  const classes = useStyles();
  const [count, setCount] = useContext(CountContext);
  return (
    <Button
      className={classes.button}
      variant="contained"
      color="secondary"
      onClick={() => setCount(props.countUp ? count + 1 : count - 1)}
    >
      {props.name}
    </Button>
  );
};

export default CountButton;

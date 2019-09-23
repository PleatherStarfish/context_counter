import React, { useContext } from "react";
import CountButton from "./Button";
import { CountContext } from "./index";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    width: "100%",
    color: "white",
    fontSize: "19pt",
    paddingBottom: "20px"
  }
});

const Counter = () => {
  const [count] = useContext(CountContext);
  const classes = useStyles();
  return (
    <>
      <Typography variant="h2" className={classes.root}>
        the current count is {count}
      </Typography>
      <CountButton name="Increment" countUp={true} />
      <CountButton name="Decrement" countUp={false} />
    </>
  );
};

export default Counter;

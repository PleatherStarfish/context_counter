import React, { createContext, useState } from "react";
import ReactDOM from "react-dom";
import Counter from "./Count";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import "./styles.css";

const useStyles = makeStyles({
  root: {
    width: "100%",
    color: "white",
    fontSize: "42pt",
    padding: "40px 0"
  }
});

export const CountContext = createContext();
export const CountProvider = CountContext.Provider;
export const CountConsumer = CountContext.Consumer;

const App = () => {
  const [count, setCount] = useState(0);
  const classes = useStyles();

  return (
    <div className="App">
      <CountProvider value={[count, setCount]}>
        <Typography variant="h1" className={classes.root}>
          Context Counter
        </Typography>

        <Counter />
      </CountProvider>
    </div>
  );
};
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

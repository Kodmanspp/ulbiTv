import {useState} from "react";
import classes from  './Counter.module.scss';


const Counter = () => {
  const [counter, setCounter] = useState<number>(0);

  const increment = () => {
    setCounter(prev => prev + 1);
  }

  return (
    <div className={classes.btn}>
      <button onClick={increment}>{counter}</button>
    </div>
  );
};

export default Counter;

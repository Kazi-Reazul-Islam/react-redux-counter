import React, {useRef} from "react";
import {useDispatch, useSelector} from "react-redux";
import {decrement, increment, setCustom} from "../../redux/state/counter/counterSlice";

const Counter = () => {
    const myNumber = useRef()
  const count = useSelector((state)=>state.counter.value);
  const dispatch = useDispatch();
  return (
    <div className="card text-center">
      <div className="card-header bg-secondary">
        <h4 className="text-white ">My Counter App</h4>
      </div>
      <div className="card-body">
        <h4>{count}</h4>
        <div className="my-4">
          <button onClick={()=>{dispatch(increment())}} className="btn btn-success">Increase</button>
          <button onClick={()=>{dispatch(decrement())}} className="btn btn-danger mx-2" disabled={count === 0}>Decrease</button>
        </div>
          <div className="my-4 forChecking">
              <input ref={myNumber} className="form-control " type="number" />
              <button onClick={()=>{dispatch(setCustom(myNumber.current.value))}} className="btn btn-danger my-4 ">Set Custom</button>
          </div>
      </div>
    </div>
  );
};

export default Counter;

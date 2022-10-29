import { useDispatch, useSelector } from "react-redux";
import { increment,decrement } from "../pages/counterRedux";

const Counter=()=>{
    let counterSelect=useSelector((state)=>{
        return state["counter"]
    });
    let {count}=counterSelect;
    let dispatch=useDispatch();
    let Increment=()=>{
        dispatch(increment());
    }
    let Decrement=()=>{
        dispatch(decrement());
    }
    return (
        <div>
            <div>Hello</div>
            <div>
                <center>
                <button onClick={Increment}> Increment</button><br></br>
                {count}<br></br>
                <button onClick={Decrement}>Decrement</button>
                </center>
            </div>
        </div>

    );
};
export default Counter;
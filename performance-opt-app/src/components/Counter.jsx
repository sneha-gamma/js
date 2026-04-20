
const Counter = ({count, increment, decrement,reset})=>{
       return(
        <div>
            <h2>Counter app</h2>
            <div>{count}</div>
            <div>
                <button onClick={increment}>Increase</button>
                <button onClick={decrement}>Decrement</button>
                <button onClick={reset}>Reset</button>
            </div>
        </div>
       )
};

export default Counter;
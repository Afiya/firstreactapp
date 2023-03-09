import React,{ useState } from 'react';

// const state = useState();


function AppHook(){

    const[count, setCount] = useState(10);

    const IncVal = () => {

        setCount(count + 1);
    };

    return (
        <>
            <h1>{count}</h1>
            <button onClick={IncVal}>Click Me</button>
        </>
    );
};

export default AppHook;
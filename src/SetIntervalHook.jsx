import React,{ useState } from 'react';

function SetIntervalHook(){
    const[ctime1, setCtime] = useState(new Date().toLocaleTimeString());
    const updateTime = () =>{
        setCtime(new Date().toLocaleTimeString());
    };

    setInterval(updateTime,1000);

    return (
        <>
            <h1>{ctime1}</h1>
        </>
    );
};

export default SetIntervalHook;
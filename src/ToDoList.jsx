import React, { useState } from "react";
import AddIcon from '@material-ui/icons/Add';
import AddCircleIcon from '@material-ui/icons/AddCircle';

const ToDoList = () =>{

    const [num, setNum] = useState(9);

    return (
        <>
            <div className="main_div">
                <div className="center_div"><br />
                    <h1>TODO List</h1>
                    <br />
                    <input type="text" placeholder="Add an Items" />
                    <br />
                    <AddCircleIcon />
                    <br />
                    <h1>You have chosen {num}</h1>
                    <select value={num} onChange={(event) => {setNum(event.target.value);}}>
                        <option value="">Select</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                    </select>
                </div>
            </div>
        </>
    );

};
export default ToDoList;
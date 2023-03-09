import React,{ useState } from 'react';


function UserForm(){

const [fullName, setFullName] = useState({
    fname : '',
    lname : ''
});

const inputEvent = (event) =>{

    const {value, name} = event.target;

    setFullName((preValue) => {

        return {
            ...preValue,
            [name] : value
        };

        // if(name=="fname"){
        //     return {
        //         fname : value,
        //         lname : preValue.lname
        //     };
        // } else if(name=="lname"){
        //     return {
        //         fname : preValue.fname,
        //         lname : value
        //     };
        // }

    });

}

    const onSubmits = (event) => {
        event.preventDefault();

    }
    return (
        <>
            <h1>Registration Form</h1>
            <h1>Hello {fullName.fname} {fullName.lname}</h1>
            <form onSubmit={onSubmits}>
            <input type="text" onChange={inputEvent} name="fname" placeholder="First Name" />
       <input type="text" onChange={inputEvent} name="lname" placeholder="Last Name" />
       <button type="submit">Submit</button>
            </form>
        </>
    );
};


export default UserForm;
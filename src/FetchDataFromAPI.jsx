import React, { useEffect,useState } from "react";
import axios from "axios";

const FetchDataFromAPI = () =>{

    const [user, setUser] = useState([]);

//   const fetchData = () => {
//     return fetch("https://jsonplaceholder.typicode.com/users")
//           .then((response) => response.json())
//           .then((data) => setUser(data));
//   }

// const fetchData = () => {
//     return axios.get("https://jsonplaceholder.typicode.com/users")
//           .then((response) => setUser(response.data));
          
//   }

async function fetchData(){
   const response = await axios.get("https://jsonplaceholder.typicode.com/users");
   console.log(response);
   setUser(response.data);
}

  useEffect(() => {
    fetchData();
  });

    return (
        <>
            <div className="main_div">
                <div className="center_div"><br />
                    <h1>Fetching Data from API</h1>
                    <br />
                    <ul>
                    {user && user.length > 0 && user.map((data, index) => (
                        <li key={data.id}>{data.name}</li>
                    ))}
                </ul>
                </div>
            </div>
        </>
    );

};
export default FetchDataFromAPI;
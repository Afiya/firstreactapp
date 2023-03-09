//import { Link } from "react-router-dom";
import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

function Home() {
  return (
    <div>
      <h1 className='text-center'>This is the home page Design By Nafees</h1>
      <button className='btn btn-primary'>Submit</button>
      {/* <Link to="about">Click to view our about page</Link>
      <Link to="contact">Click to view our contact page</Link> */}
    </div>
  );
}

export default Home;
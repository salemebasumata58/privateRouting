import React from 'react'
import {Link} from "react-router-dom";

const Dashboard = () => {
  return (
    <>
    <h1>Welcome to Dashboard</h1>
    <Link to={"/dashboard/settings"}><button>Go to Settings</button> </Link>
    </>
  )
}

export default Dashboard
import React from "react"
import  Tabs   from "../components/Tabs";



const Dashboard = () => {
   const contents = [
       {title: "Books", elements: <h1>Contents of books go here</h1>},
       {title: "Members", elements: <h1>Contents of memebers go here</h1>},
   ]

   
    return(
        
        <Tabs contents={contents}/>
        
    )
};

export default Dashboard;


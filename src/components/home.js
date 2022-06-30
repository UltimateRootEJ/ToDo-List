import React from "react";
import AddList from "./addList.js";
import DisplayList from "./displayList.js";
import NavigationBar from "./navigationBar.js";
import { useState } from "react";
import '../css/home.css'



export default function Home(props)
{
    const [todo,setToDo]=useState([]);
    const addToDo=((description,todoPriotityType)=>{
      setToDo((lists)=>[...lists,{
        description:description,
        todoPriotityType:todoPriotityType
      }])
    })
    
    const arrTodo=[]
    arrTodo.push(JSON.parse(localStorage.getItem('description')))
    
    return(
      <div>
        <NavigationBar></NavigationBar>
        <div className="home" >
         <AddList add={ addToDo}/>
    <DisplayList list={todo}/>

        </div>

        </div>    
        )
}



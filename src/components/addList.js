import React from "react";
import '../css/addList.css'
import { useState } from "react";

export default function AddList(props)
{
    const[description,setDescription]=useState("")
    const[todoPriotityType,setTodoPriotityType]=useState("")
console.log(description);
console.log(todoPriotityType);
    const add=(()=>{
        props.add(description, todoPriotityType);
        for(let i=0;i<description.length;i++)
        {
            localStorage.setItem(description,JSON.stringify(description));
        }
    })

    return(

        <div className="addDiv">
            <h1 >Add ToDo List</h1>
           <div className="inputs"> <input placeholder="Enter item" onChange={(e)=>setDescription(e.target.value)} />
            <select onChange={(e)=>setTodoPriotityType(e.target.value)} >
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
        </select>
        <button className="btnAdd" onClick={add}>Add</button>
        </div>

        </div>
    )

}
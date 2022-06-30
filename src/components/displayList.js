import React from "react";
import '../css/displayList.css'

const DisplayList=(props)=> {

    let arrTodo=[];
    arrTodo.push(JSON.parse(localStorage.getItem('description')))
console.log(arrTodo);

    return (

        <div className="displayDiv">
            {
                props.list.map((item, id) => {

                    if (item.todoPriotityType === "Low") {
                        return (
                            <div key={id} className="divDetails">
                                <div div className="listDescLow">
                                    <p className="descH1">{item.description} </p>
                                </div>

                                <div hidden>
                                    <h1>{item.todoPriotityType}</h1>
                                </div>
                                <div className="lowLine"></div>
                            </div>
                        )

                    }
                      else if (item.todoPriorityType === "Medium") {
                        return (
                            <div key={id} className="divDetails">
                                <div className="listDescMedium">
                                <p className="descH1">{item.description} </p>
                                </div>

                                <div hidden>
                                    <h1>{item.todoPriotityType}</h1>
                                </div>

                                <div className="mediumLine"></div>
                            </div>
                        )

                     }
                    else 
                    // (item.todoPriorityType==="High")
                    {
                        return (

                            <div key={id} className="divDetails">
                                <div className="listDescHigh">
                                    <p className="descH1">{item.description} </p>
                                </div>

                                <div hidden >
                                    <h1 className="prioH1">{item.todoPriotityType}</h1>
                                </div>

                                <div className="highLine"></div>
                            </div>
                        )


                    }
             
            


                })
            }

        </div >

    )
}


export default  DisplayList
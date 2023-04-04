import React from "react";


export default function Cards(props){
    return (
        <div className="card--container">
            <img className="card--img" src={props.item.img} />
            <p>{props.item.title}</p>
            <p>{props.item.date}</p>
        </div>
    )
}


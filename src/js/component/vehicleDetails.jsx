import React from "react";

export const VehicleDetails = (props) => {

    return(
        <div className="container">
        <div className="d-flex">
            <figure>
                <img src={props.img} alt={props.name} />
                <figcaption>
                    name: {props.name}
                </figcaption>
            </figure>
            <div>
                <p>model: {props.model} </p>
                <p>class: {props.class} </p>
                <p>speed: {props.speed} </p>
                <p>size: {props.size} </p>
                <p>cost: {props.cost} </p>
               
            </div>
        </div>
       </div>
    )
}
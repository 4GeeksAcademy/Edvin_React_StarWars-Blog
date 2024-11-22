import React from "react";

export const VehicleDetails = (props) => {

    return(
        <div className="container">
        <div className="d-flex bg-dark rounded justify-content-evenly">
            <figure>
                <img src={props.img} alt={props.name} className="rounded" />
                <figcaption className="text-light text-uppercase fs-5 mt-2 text-center">
                    name: {props.name}
                </figcaption>
            </figure>
            <div className="text-light mt-5">
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
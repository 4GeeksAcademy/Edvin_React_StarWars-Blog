import React from "react";

export const PlanetDetails = (props) => {

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
                <p>population: {props.population} </p>
                <p>diameter: {props.diameter} </p>
                <p>terrain: {props.terrain}</p>
                <p>climate: {props.climate}</p>
               
            </div>
        </div>
       </div>
    )
}
import React from "react";

export const PlanetDetails = (props) => {

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
                <p>population: {props.population} </p>
                <p>diameter: {props.diameter} </p>
                <p>terrain: {props.terrain}</p>
                <p>climate: {props.climate}</p>
               
            </div>
        </div>
       </div>
    )
}
import React from "react";


export const PeopleDetails = (props) => {

    return (
       <div className="container">
        <div className="d-flex bg-dark rounded justify-content-evenly">
            <figure>
                <img src={props.img} alt={props.name} className="rounded" />
                <figcaption className="text-light text-uppercase fs-5 mt-2 text-center">
                    name: {props.name}
                </figcaption>
            </figure>
            <div className="text-light mt-5">
                <p>height: {props.height} </p>
                <p>mass: {props.mass} </p>
                <p>hair color: {props.hair_color} </p>
                <p>skin color: {props.skin_color} </p>
                <p>eye color: {props.eye_color} </p>
                <p>birth year: {props.birth_year} </p>
            </div>
        </div>
       </div>
    )
}
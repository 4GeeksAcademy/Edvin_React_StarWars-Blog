import React from "react";
import { useNavigate } from "react-router";

export const GeneralCard = (props) => {

    const navigate = useNavigate();
   
    const handleLink = () => {
        navigate(`/details/${props.type}/${props.uid}`)
    }


    

    return(
        <div className="card col-sm-6 col-md-4 col-lg-3">
            <figure>
                 <img className="card-img-top" src={props.img} alt={props.name} />
                 <figcaption>{props.name}</figcaption>
            </figure>
            <div className="d-flex">
                <button onClick={handleLink}>
                    Learn More
                </button>
                <button>
                    Favourite
                </button>
            </div>
        </div>
    )
}
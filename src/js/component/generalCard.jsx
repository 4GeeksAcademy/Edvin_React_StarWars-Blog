import React, {useContext}from "react";
import {Context} from "../store/appContext"
import { useNavigate } from "react-router";

export const GeneralCard = (props) => {
    const {store, actions} = useContext(Context);

    const navigate = useNavigate();
   
    const handleLink = () => {
        navigate(`/details/${props.type}/${props.uid}`)
    }

    const {state} =  
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
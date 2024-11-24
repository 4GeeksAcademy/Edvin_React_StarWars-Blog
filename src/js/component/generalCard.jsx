import React, { useContext } from "react";
import { useNavigate } from "react-router";
import { Context } from "../store/appContext";

export const GeneralCard = (props) => {
  const { actions } = useContext(Context);
  const navigate = useNavigate();

  const handleLink = () => {
    navigate(`/details/${props.type}/${props.uid}`);
  };

  return (
    <div className="card col-sm-6 col-md-4 col-lg-3 bg-dark">
      <figure>
        <img
          className="card-img-top"
          src={props.img}
          alt={props.name}
        />
        <figcaption>{props.name}</figcaption>
      </figure>
      <div className="d-flex">
        <button className="rounded bg-primary m-1" onClick={handleLink}>
          Learn More
        </button>
        <button
          className="rounded bg-warning m-1"
          onClick={() =>
            actions.addToFavourite({
              uid: props.uid,
              name: props.name,
              type: props.type,
            })
          }
        >
          Favourite
        </button>
      </div>
    </div>
  );
};

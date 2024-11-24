import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {
  const { store, actions } = useContext(Context);

  return (
    <nav className="navbar navbar-light border-primary mb-3">
      <Link to="/">
        <span className="navbar-brand mb-0 h1">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Star_Wars_Logo.svg/640px-Star_Wars_Logo.svg.png"
            alt="star wars logo"
            width="150"
            height="auto"
          />
        </span>
      </Link>
      <div className="ml-auto">
        <div className="dropdown">
          <button
            className="btn btn-secondary dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Favorites {store.favourites.length}
          </button>
          <ul className="dropdown-menu dropdown-menu-end">
            {store.favourites.length === 0 ? (
              <li>
                <span className="dropdown-item">No favorites yet</span>
              </li>
            ) : (
              store.favourites.map((fav, index) => (
                <li
                  key={index}
                  className="d-flex justify-content-between align-items-center"
                >
                  <Link
                    to={`/details/${fav.type}/${fav.uid}`}
                    className="dropdown-item text-truncate"
                  >
                    {fav.name}
                  </Link>
                  <button
                    className="btn btn-danger btn-sm ms-2"
                    onClick={() =>
                      actions.addToFavourite({ uid: fav.uid, type: fav.type })
                    }
                  >
                    &times;
                  </button>
                </li>
              ))
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

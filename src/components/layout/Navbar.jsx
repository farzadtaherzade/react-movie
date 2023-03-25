import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar bg-base-100 shadow-md px-20 fixed top-0 z-40">
      <div className="flex mr-6">
        <Link to="/" className="normal-case font-bold text-3xl">
          ReactMovie
        </Link>
      </div>
      <div className="flex-1">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link to="/movies" className="btn btn-ghost">
              Movies
            </Link>
          </li>
          <li>
            <Link to="/tvs" className="btn btn-ghost">
              Tvs
            </Link>
          </li>
        </ul>
      </div>
      <div className="flex-none gap-2">
        <div className="form-control">
          <input
            type="text"
            placeholder="Search"
            className="input input-ghost "
          />
        </div>
      </div>
    </div>
  );
}

export default Navbar;

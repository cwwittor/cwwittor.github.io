import React from "react";
import { Link } from "react-router-dom";
import logo1 from "../assets/Logo1.png";


function navBar() {
  //const history = useHistory();
  //console.log(history.location.pathname);

  return (
    <nav class="navbar navbar-expand-lg fixed-top navbar-dark bg-dark">
        <div class="container-fluid">
            <Link to="/" class="mr-auto pull-left navbar-brand"><img src={logo1} alt="logo" class="navImg"/></Link>
            <Link to="/" class="mr-auto navbar-brand">Christian Wittorp</Link>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar" aria-controls="navbar" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class ="collapse navbar-collapse" id= "navbar">
                <ul class= "navbar-nav ml-auto mt-2 mt-lg-0">
                    <li class="nav-item active">
                        <Link to="/" class="nav-link" aria-current="page">Home</Link>
                    </li>
                    <li class="nav-item active">
                        <Link to="/portfolio" class="nav-link" aria-current="page">Portfolio</Link>
                    </li>
                    <li class="nav-item active">
                        <Link to="/contact" class="nav-link" aria-current="page">Contact</Link>
                    </li>
                </ul>
            </div>

        </div>
    </nav>
  );
}

export default navBar;
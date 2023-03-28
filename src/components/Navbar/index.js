import React from "react";
import { NavLink as Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import * as bootstrap from 'bootstrap';
const Navbar = () => {
return (
	<>
	<header className="navbar navbar-expand-lg bd-navbar sticky-top p-0">
	<nav className="container-xxl  flex-row flex-wrap header-primary pb-0 mb-0">
		<div className="container-fluid text-center ">
			<Link to="/" className="navbar-brand header  mb-0 fs-1">
        	The National Rescue Network 
      		</Link>
    		<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
     	 	<span className="navbar-toggler-icon"></span>
    		</button>
    		<div className="collapse navbar-collapse" id="navbarSupportedContent">
			<ul className="navbar-nav d-flex justify-content-evenly w-100 m-0 p-0">
				<li className="nav-item secondary dropdown">
					<a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            		About us
          			</a>
          			<ul className="dropdown-menu">
          				<li>
							<Link to="/aboutUs" className="nav-link dropdown-item">
							The people
							</Link>
						</li>
						<li>
							<Link to="/purpose" className="nav-link dropdown-item">
							The purpose
							</Link>
						</li>
						<li>
							<Link to="/process" className="nav-link dropdown-item">
							How it works
							</Link>
						</li>
					</ul>
				</li>
				<li className="nav-item secondary">
					<Link to="/resources"   className="nav-link ">
					Ways to help
					</Link>
				</li>
				<li className="nav-item secondary">
					<Link to="/logIn"   className="nav-link ">
					Log in
					</Link>
				</li>
				<li className="nav-item secondary">
					<Link to="/signUp"   className="nav-link ">
					Sign up
					</Link>
				</li>
			</ul>
		</div>
	</div>
	</nav>
	</header>
	</>
);
};

export default Navbar;

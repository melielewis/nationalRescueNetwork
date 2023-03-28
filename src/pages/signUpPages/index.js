import React,  { useState }  from 'react';
import * as bootstrap from 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import { NavLink as Link } from "react-router-dom";

const SignUpType = () => {

	return (
	<>
	<div className="container-fluid content ">
		<div className="d-flex justify-content-center mt-2">
			<div className="card w-50">
			
		<div className="secondary heading col-12 text-center">
			I am an		
		</div>
		<div className="d-flex justify-content-center">
		     	 	<div className="list-group col-12 text-center ">
		     	 		
		     	 		<Link to="/orgForm" className="btn list-group-item list-group-item-action">
		     	 		Organization
		     	 		</Link>
		     	 		<Link to="/indForm" className="btn list-group-item list-group-item-action">
		     	 		Individual
		     	 		</Link>
		     	 	</div>
		  </div>


		   </div>
		</div>
</div>
	</>
	);
};

export default SignUpType;
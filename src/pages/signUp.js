import React,  { useState }  from 'react';
import * as bootstrap from 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';



function startView({orgForm, indForm}){
return (
<>
	 		<div className="secondary heading col-12 text-center">
								I am an
		     	 </div>
		     	 <div className="d-flex justify-content-center">
		     	 	<div className="list-group col-12 text-center ">
		     	 	<input name="type"
					value = "Organization"
					id = "org"
					type ="radio"
					className="btn-check"
					onClick={orgForm} />
					<label htmlFor = "org"
					className = "btn list-group-item list-group-item-action">
					Organization
					</label>
					<input name="type"
					value = "Individual"
					id = "ind"
					type ="radio"
					className="btn-check"
					onClick={indForm} />
					<label htmlFor = "ind"
					className = "btn list-group-item list-group-item-action">
					Individual
					</label>
		     	 	</div>
		     	 </div>
		     	 	</>
		     	 	);
};
const registration = {
	"type": {
		text: "I am an",
		opts: [
			{
				value: "Organization",
				type: "radio",
				name: "type",
				class: "btn-check"
			},
			{
				value: "Individual",
				type: "radio",
				name: "type",
				class: "btn-check"
			}],
			previous: null
	},
	"Organization": {
		text: "Location",
		isRadio: false,
		opts: [],
		previous: "type"
	}
};

const SignUp = () => {
const [index, setIndex] = useState({
index: "type",
responses: []
});

  function handleClick(e) {
  	let data = [...index.responses];
  	let prev = index.index;
    setIndex({
    	index: e.target.value,
    	responses: [...data, {index: prev, response: e.target.value}]
    	});
  }
  let q = registration[index.index];
  function RadioBtn({opt}){
  	  		return (<>
					<input name={opt.name}
					value = {opt.value}
					id = {opt.value}
					type = {opt.type}
					className={opt.class}
					onClick={handleClick} />
					<label htmlFor = {opt.value}
					className = "btn list-group-item list-group-item-action">
					{opt.value}
					</label>
					</>)
;
}
function Item({type}){

};
	return (
	<>
	<div className="container-fluid content ">
		<div className="d-flex justify-content-center mt-2">
			<div className="card w-50">
		    	 <div className="secondary heading col-12 text-center">
								{q.text}
		     	 </div>
		     	 <div className="d-flex justify-content-center">
		     	 	<div className="list-group col-12 text-center ">
		     	 	
				{q.opts.map((opt) => 
					<RadioBtn opt={opt} />
										)
				}
		     	 	</div>
		     	 </div>
		   </div>
		</div>
</div>
	</>
	);
};

export default SignUp;

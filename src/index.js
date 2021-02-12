import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

import Phone from "./Phone";
import {phones} from "./phones";

function PhoneList() {
	return (
		<section className="phonelist">
			{phones.map((phone, index) => {
				return <Phone key={phone.id} {...phone}></Phone>;
			})}
		</section>
	);
}

ReactDOM.render(<PhoneList />, document.getElementById("root"));

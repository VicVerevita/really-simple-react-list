import React from "react";

const Phone = ({img, name, price, specs}) => {
	function changeBackground(e) {
		e.target.style.background = "#e6e6e6";
	}

	function changeBackgroundBack(e) {
		e.target.style.background = "#fff";
	}

	function specsBackground(e) {
		e.target.style.background = "#1a1a1a";
		e.target.style.color = "whitesmoke";
	}

	function specsBackgroundBack(e) {
		e.target.style.background = "#f1f1f1";
		e.target.style.color = "black";
	}

	return (
		<article
			className="phone"
			onMouseEnter={changeBackground}
			onMouseLeave={changeBackgroundBack}
		>
			<img src={img} alt="" />
			<h1>{name}</h1>
			<h4>{price}</h4>

			<a
				href={specs}
				onMouseEnter={specsBackground}
				onMouseLeave={specsBackgroundBack}
			>
				Specifications
			</a>
		</article>
	);
};

export default Phone;

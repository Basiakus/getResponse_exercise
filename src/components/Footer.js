import React from 'react';

class Footer extends React.Component {
	render() {
		return (
			<div className="footer">
				<div className="shoping">
					<h2>Running out of products</h2>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
					<div className="buttons">
						<div className="button">Buy Now <span> &#62;</span></div>
					</div>
				</div>
				<div className="mobile">
					<h2>Bod&#9679;&#275; Trainer in your pocket</h2>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
					<div className="buttons">
						<div className="button">iOS <span> &#62;</span></div>
						<div className="button" id="android">Android <span> &#62;</span></div>
					</div>
				</div>
				<div className="faq">
					<h2>Frequently asked questions</h2>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
					<div className="buttons">
						<div className="button">Read FAQs <span> &#62;</span></div>
					</div>
				</div>
			</div>
		)
	}
}

export default Footer;
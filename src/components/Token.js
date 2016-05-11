import React, { Component, PropTypes } from 'react';

import './Token.css'


class Token extends React.Component {
	constructor(props,context){
		super(props,context);
	}

	render(){
		return(
			<div className="fullHeight">
				<div className="token">
					<img src="/public/token/emeraude.png"/>
					<span className="token-count">3</span>
				</div>
				<div className="token">
					<img src="/public/token/saphir.png"/>
					<span className="token-count">3</span>
				</div>
				<div className="token">
					<img src="/public/token/rubius.png"/>
					<span className="token-count">3</span>
				</div>
				<div className="token">
					<img src="/public/token/diamant.png"/>
					<span className="token-count">3</span>
				</div>
				<div className="token">
					<img src="/public/token/onyx.png"/>
					<span className="token-count">3</span>
				</div>
				<div className="token">
					<img src="/public/token/gold.png"/>
					<span className="token-count">3</span>
				</div>

				<div>
				</div>
			</div>



			);
	}
}
export default Token;
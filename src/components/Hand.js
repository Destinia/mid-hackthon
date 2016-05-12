import React, { Component, PropTypes } from 'react';

import './Hand.css'


class Hand extends React.Component {
	constructor(props,context){
		super(props,context);
	}

	render(){
		return(
			<div  className="row user-region">
				<div className="col-sm-2">
				
				</div>
				<div className="col-sm-1 gem first">
					<div className="currency">
						<img src="/public/gems/emeraude.png"/>
						<span>3</span>
					</div>
					<div className="token">
						<img src="/public/token/emeraude.png"/>
						<span>4</span>
					</div>
				</div>
				<div className="col-sm-1 gem">
					<div className="currency">
						<img src="/public/gems/saphir.png"/>
						<span>3</span>
					</div>
					<div className="token">
						<img src="/public/token/saphir.png"/>
						<span>4</span>
					</div>
				</div>
				<div className="col-sm-1 gem">
					<div className="currency">
						<img src="/public/gems/rubis.png"/>
						<span>3</span>
					</div>
					<div className="token">
						<img src="/public/token/rubius.png"/>
						<span>4</span>
					</div>
				</div>
				<div className="col-sm-1 gem">
					<div className="currency">
						<img src="/public/gems/diamant.png"/>
						<span>3</span>
					</div>
					<div className="token">
						<img src="/public/token/diamant.png"/>
						<span>4</span>
					</div>
				</div>
				<div className="col-sm-1 gem">
					<div className="currency">
						<img src="/public/gems/onyx.png"/>
						<span>3</span>
					</div>
					<div className="token">
						<img src="/public/token/onyx.png"/>
						<span>4</span>
					</div>
				</div>
				<div className="col-sm-1 gem">
					<div className="currency">
						<img src="/public/gems/or.png"/>
						<span>3</span>
					</div>
					<div className="token">
						<img src="/public/token/gold.png"/>
						<span>4</span>
					</div>
				</div>






			</div>

			);
	}
}
export default Hand;
import React, { Component, PropTypes } from 'react';

import './Hand.css'


class Hand extends React.Component {
	constructor(props,context){
		super(props,context);
	}

	render(){
		const {user_token,currency}=this.props;
		return(
			<div  className="row user-region">
				<div className="col-sm-2">
				
				</div>
				<div className="col-sm-1 gem first">
					<div className="currency">
						<img src="/public/gems/emeraude.png"/>
						<span>{currency.Emerald}</span>
					</div>
					<div className="token">
						<img src="/public/token/emeraude.png"/>
						<span>{user_token.Emerald}</span>
					</div>
				</div>
				<div className="col-sm-1 gem">
					<div className="currency">
						<img src="/public/gems/saphir.png"/>
						<span>{currency.Sapphire}</span>
					</div>
					<div className="token">
						<img src="/public/token/saphir.png"/>
						<span>{user_token.Sapphire}</span>
					</div>
				</div>
				<div className="col-sm-1 gem">
					<div className="currency">
						<img src="/public/gems/rubis.png"/>
						<span>{currency.Ruby}</span>
					</div>
					<div className="token">
						<img src="/public/token/rubius.png"/>
						<span>{user_token.Ruby}</span>
					</div>
				</div>
				<div className="col-sm-1 gem">
					<div className="currency">
						<img src="/public/gems/diamant.png"/>
						<span>{currency.Diamond}</span>
					</div>
					<div className="token">
						<img src="/public/token/diamant.png"/>
						<span>{user_token.Diamond}</span>
					</div>
				</div>
				<div className="col-sm-1 gem">
					<div className="currency">
						<img src="/public/gems/onyx.png"/>
						<span>{currency.Agate}</span>
					</div>
					<div className="token">
						<img src="/public/token/onyx.png"/>
						<span>{user_token.Agate}</span>
					</div>
				</div>
				<div className="col-sm-1 gem">
					<div className="currency">
						<img src="/public/gems/or.png"/>
						<span>{currency.Gold}</span>
					</div>
					<div className="token">
						<img src="/public/token/gold.png"/>
						<span>{user_token.Gold}</span>
					</div>
				</div>






			</div>

			);
	}
}
export default Hand;
import React, { Component, PropTypes } from 'react';

import './cards.css'

class Desk extends React.Component {
	constructor(props,context){
		super(props,context);
	}

	
	createCard(card) {

		const {perchase} = this.props;
		var renderToken = (token) => {
			if(card.price[token]!=0){
				return (<span className="suit">
							<span className={token}>&diams;</span>
							<span className="price">{card.price[token]}</span>
						</span>
					);
			}
		}

		var img_src = (type) => {
			return ("/public/card-type/"+type+".png");
		}
		return(
			<li>
				<a className="card" onClick={perchase.bind(this,card)}>
					<span className="rank">
						<span>{card.score}</span>
						<img src={"/public/card-type/"+card.type+".png"}/>
					</span>
					{Object.keys(card.price).map(renderToken,this)}
				</a>
			</li>
			);
	}

	render(){
		const {cards}= this.props;
		var test_card = {type:"Diamond",score:1,price:{Emerald:3,Sapphire:2,Ruby:1,Diamond:1,Agate:2,Gold:3}}
		return (
			<div className="playingCards fourColours rotateHand ">
				<ul className="table">
					{cards.top.map(this.createCard,this)}
				</ul>
				<ul className="table">
					{cards.mid.map(this.createCard,this)}
        		</ul>
        		<ul className="table">
        			{cards.bot.map(this.createCard,this)}
				</ul>
			</div>

		);
	}

}
export default Desk;
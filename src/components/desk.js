import React, { Component, PropTypes } from 'react';

import './cards.css'

class Desk extends React.Component {



	createCard(card) {
		var renderToken = (token) => {
			if(card.price[token]!=0){
				return (<span className="suit">
							<span className={token}>&diams;</span>
							<span className="price">{card.price[token]}</span>
						</span>
					);
			}
		}
		return(
			<li>
				<a className="card">
					<span className="rank">{card.score}</span>
					{Object.keys(card.price).map(renderToken,this)}
				</a>
			</li>
			);
	}

	render(){
		var test_card = {type:"Diamond",score:1,price:{Emerald:3,Sapphire:2,Ruby:1,Diamond:1,Agate:2,Gold:3}}

		return (
			<div className="playingCards fourColours rotateHand ">
				<ul className="table">
					{this.createCard(test_card)}
					<li>
            			<a className="card" href="#">
                			<span className="rank">2</span>
                			<span className="suit">&diams;</span>
            			</a>
        			</li>
        			<li>
            			<a className="card" href="#">
                			<span className="rank">2</span>
                			<span className="suit">&diams;</span>
            			</a>
					</li>
					<li>
            			<a className="card" href="#">
                			<span className="rank">2</span>
                			<span className="suit">&diams;</span>
            			</a>
					</li>
					<li>
            			<a className="card" href="#">
                			<span className="rank">2</span>
                			<span className="suit">&diams;</span>
            			</a>
					</li>
				</ul>
				<ul className="table">
					<li>
					    <label for="c-10C" className="card rank-10 clubs">
					        <span className="rank">10</span>
					        <span className="suit">&clubs;</span>
					        <input type="checkbox" name="c-10C" id="c-10C" value="select" />
					    </label>
					</li>
					<li>
					    <label for="c-JD" className="card rank-j diams">
					        <span className="rank">J</span>
					        <span className="suit">&diams;</span>
					        <input type="checkbox" name="c-JD" id="c-JD" value="select" />
					    </label>
					</li>
					<li>
					    <label for="c-9S" className="card rank-9 spades">
					        <span className="rank">9</span>
					        <span className="suit">&spades;</span>
					        <input type="checkbox" name="c-9S" id="c-9S" value="select" />
					    </label>
					</li>
					<li>
            			<a className="card" href="#">
                			<span className="rank">2</span>
                			<span className="suit">&diams;</span>
            			</a>
        			</li>
        		</ul>
        		<ul className="table">

					<li>
            			<a className="card" href="#">
                			<span className="rank">2</span>
                			<span className="suit">&diams;</span>
            			</a>
        			</li>
					<li>
            			<a className="card" href="#">
                			<span className="rank">2</span>
                			<span className="suit">&diams;</span>
            			</a>
        			</li>
				</ul>
			</div>

		);
	}

}
export default Desk;
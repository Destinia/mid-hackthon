import React, { Component, PropTypes } from 'react';
import io from 'socket.io-client';
import Desk from './desk';
import Token from './Token';
import Hand from './Hand';
import Nobel from './nobel';
const socket = io('',{path:'/api/game'});


import "./BoardApp.css"

class BoardApp extends React.Component {
	constructor(props,context){
		super(props,context);

		var init_card = {
			type:"Diamond",score:1,price:{Emerald:0,Sapphire:0,Ruby:0,Diamond:0,Agate:0,Gold:0}
		}

		this.state = {
			cur_player:false,
			name:"",
			token:{
				Emerald:7,
				Sapphire:7,
				Ruby:7,
				Diamond:7,
				Agate:7,
				Gold:5
			},
			currency:{
				Emerald:0,
				Sapphire:0,
				Ruby:0,
				Diamond:0,
				Agate:0,
				Gold:0
			},
			players:{
				
			},
			cards:{
				top:[init_card,init_card,init_card,init_card],
				mid:[init_card,init_card,init_card,init_card],
				bot:[init_card,init_card,init_card,init_card]
			},
			nobel:{

			}
		}
	}



	componentDidMount() {
		socket.on('init',this.init.bind(this));
  	}

  	init(data){
  		console.log(data);
  		this.setState({players:data.users,name:data.name,cards:data.cards,token:data.token});
  	}

	perchase(card){
		console.log(this.state.name);
		socket.emit('card',{name:this.state.name,card:card});
	}
	render(){
		console.log(this.state.cards);
		return (
		<div className="background">
		<div className="container-fluid fix">
			<div className="row desk-region">
				<div className="col-sm-2">
					<button onClick={this.perchase.bind(this)}>test</button>
				</div>
				<div className="col-sm-5">
					<Desk cards={this.state.cards} perchase={this.perchase}/>
				</div>
				<div className="col-sm-3">
					<Nobel nobel={this.state.cards.nobel}/>
				</div>
				<div className="col-sm-2">
					<Token token={this.state.token}/>
				</div>
				
			</div>
			<div className="row user-region">
			<div className="container-fluid">
				<Hand/>
			</div>
			</div>
		</div>
		</div>
		);
	}

}

export default BoardApp;
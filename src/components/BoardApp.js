import React, { Component, PropTypes } from 'react';
import io from 'socket.io-client';
import Desk from './desk';
import Token from './Token';
import Hand from './Hand';
import Nobel from './nobel';
const socket = io('localhost:8080',{path:'/api/game'});


import "./BoardApp.css"

class BoardApp extends React.Component {
	constructor(props,context){
		super(props,context);

		var init_card = {
			type:"Diamond",score:1,price:{Emerald:0,Sapphire:0,Ruby:0,Diamond:0,Agate:0,Gold:0}
		}

		this.state = {
			inited:false,
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
			user_token:{
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
		socket.emit('mount',{});
		socket.on('init',this.init.bind(this));
		socket.on('drawcard',this.draw_card.bind(this));
		socket.on('test',(data)=>{console.log(data);})
  	}

  	draw_card(data){
  		console.log("yaaaaa",data);
  		this.setState({cards:data.cards});
  	};

  	init(data){
  		console.log(data);
  		this.setState({inited:true,players:data.users,name:data.name,cards:data.cards,token:data.token,nobel:data.nobel});
  	}

	perchase(card,index){
		var level;
		for(var key in this.state.cards){
			find()
		}
		//identify money 
		var cur = this.state.currency;
		cur[card.type]++;
		this.setState({currency:cur});
		socket.emit('card',{card:card,level:card.level,index:index});
	}

	take_token(type){
		var cur_token = this.state.token;
		cur_token[type]--;
		var usr_token = this.state.user_token;
		usr_token[type]++;
		this.setState({token:cur_token,user_token:usr_token});
	}
	render(){
		if(this.state.inited){
			return (
			<div className="background">
			<div className="container-fluid fix">
				<div className="row desk-region">
					<div className="col-sm-2">
						<button onClick={this.perchase.bind(this)}>test</button>
					</div>
					<div className="col-sm-5">
						<Desk cards={this.state.cards} perchase={this.perchase.bind(this)}/>
					</div>
					<div className="col-sm-3">
						<Nobel nobel={this.state.nobel}/>
					</div>
					<div className="col-sm-2">
						<Token token={this.state.token} take_token={this.take_token.bind(this)}/>
					</div>
					
				</div>
				<div className="row user-region">
				<div className="container-fluid">
					<Hand currency={this.state.currency} user_token={this.state.user_token}/>
				</div>
				</div>
			</div>
			</div>
			);
		}
		else {
			return (
				<div className="background">
					<h1>Loading...</h1>
				</div>
				);
		}
	}

}

export default BoardApp;
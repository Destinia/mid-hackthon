import React, { Component, PropTypes } from 'react';
import io from 'socket.io-client';
import Desk from './desk';
import Token from './Token';
const socket = io('',{path:'/api/game'});


import "./BoardApp.css"

class BoardApp extends React.Component {
	constructor(props,context){
		super(props,context);
		this.state = {
			cur_player:false,
			name:"",
			currency:{
				Emerald:7,
				Sapphire:7,
				Ruby:7,
				Diamond:7,
				Agate:7,
				Gold:5
			},
			players:{
				
			},
			cards:{
				top:[],
				mid:[],
				bot:[]
			}

		}
	}

	componentDidMount() {
		socket.on('init',this.init.bind(this));
  	}

  	init(data){
  		console.log(data);
  		this.setState({players:data.users,name:data.name});
  	}

	perchase(){
		console.log(this.state.name);
		socket.emit('card',{name:this.state.name});
	}
	render(){
		return (
		<div className="background">
		<div className="container-fluid">
			<div className="row desk-region">
				<div className="col-sm-2">
					<button onClick={this.perchase.bind(this)}>test</button>
				</div>
				<div className="col-sm-6">
					<Desk/>
				</div>
				<div className="col-sm-2">

				</div>
				<div className="col-sm-2">
					<Token/>
				</div>
				
			</div>
			<div className="row user-region">
			</div>
		</div>
		</div>
		);
	}

}

export default BoardApp;
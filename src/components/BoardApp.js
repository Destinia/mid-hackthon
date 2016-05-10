import React, { Component, PropTypes } from 'react';
import io from 'socket.io-client';
import Desk from './desk';
const socket = io('',{path:'/api/game'});


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
		<div className="container">
			<div className="row">
				<div className="col-sm-2">
					<button onClick={this.perchase.bind(this)}>test</button>
				</div>
				<div className="col-sm-9">
				<Desk/>
				</div>
				<div className="col-sm-1">
				</div>
				
			</div>
			<div className="row">
			</div>
		</div>
		);
	}

}

export default BoardApp;
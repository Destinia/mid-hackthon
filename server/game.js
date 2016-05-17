//TODO
/*
	object template?
	random draw
	token and currency
	justify money enough
	preserve card
	royal left to next commit

	card template
	{type:"Diamond",score:1,price:{token}}
*/
	

var Deck = require("./Splendor.json");



exports = module.exports = function createGame()

{
	token = () => {return {Emerald:0,Sapphire:0,Ruby:0,Diamond:0,Agate:0,Gold:0}}
	var create_user = (socket) => {return {token:token(),score:0,currency:token(),socket:socket}}
	const win = 15;
	var cur_card = {top:[],mid:[],bot:[],nobel:[]};


	var users = [];
	//cur_user = 4 for win
	var cur_user = 0;

	var cur_token = {Emerald:7,Sapphire:7,Ruby:7,Diamond:7,Agate:7,Gold:5};
	var deck = Deck;

	var add_user = (socket) => {
		users.push(create_user(socket));
		users.forEach(function(user){console.log(user.socket.id);});
	}

	var get_users = ()=> {return users;};
	var get_cur_user = ()=> {console.log(cur_user);return users[cur_user];};
	var next_turn = () => {cur_user  = (cur_user===users.length-1)? 0:cur_user+1;};
	var get_cur_card = () => {return {top:cur_card.top,mid:cur_card.mid,bot:cur_card.bot};};
	var get_cur_token = () => {return cur_token;};
	var get_nobel = () => {return cur_card.nobel;};

	var init_draw = () => {
		cur_card = {
			top:[draw_card("top"),draw_card("top"),draw_card("top"),draw_card("top")],
			mid:[draw_card("mid"),draw_card("mid"),draw_card("mid"),draw_card("mid")],
			bot:[draw_card("bot"),draw_card("bot"),draw_card("bot"),draw_card("bot")],
			nobel:[draw_card("nobel"),draw_card("nobel"),draw_card("nobel"),draw_card("nobel"),draw_card("nobel")],
		}
	};

	//TODO front_end render no card(null)
	var take_card = (pos,index) => {
		checkout(cur_card[pos][index]);
		score(cur_card[pos][index]);
		if(deck[pos].length!==0){
			cur_card[pos][index] = draw_card(pos);
		}
		else{
			cur_card[pos].splice(index,1);
		}
		//token_back(price);
	};
	//do server need to know price?
	var checkout = (card) => {
		users[cur_user].currency[card.type] += 1;
		var owned = 0;
		for(var key in card.price){
			if(key!=="Gold") {
				card.price[key] -= users[cur_user].currency[key];
				if(card.price[key]>0){
					users[cur_user].token[key] -= card.price[key];
				}
				if(users[cur_user].token[key]<0){
					owned = users[cur_user].token[key];
					users[cur_user].token[key] = 0;
				}
			}
		}
		users[cur_user].token["Gold"] +=owned;
	};

	var score = (card) => {
		users[cur_user].score += card.score;
		if(users[cur_user].score>win){
			cur_user = 4;
		}
	};


	var draw_card = (where) => {
		if(deck[where].length===0)return;
		const rand = Math.floor(Math.random()*deck[where].length);
		const target = deck[where][rand];
		deck[where][rand] = deck[where][deck[where].length-1];
		deck[where].pop();
		return target;
	};

	var take_token = (types) => {
		if(types.length===3) {
			types.forEach((type)=>{
				cur_token[type] -= 1;users[cur_user].token[type]+=1;
			});
		}
		else if(types.length===1){
			cur_token[types[0]] -= 2;users[cur_user].token[types[0]]+=2;
		}
		else
			throw e;

	};



	//return method
	return {
		init_draw:init_draw,
		next_turn:next_turn,
		get_users:get_users,
		get_cur_user:get_cur_user,
		get_cur_card:get_cur_card,
		get_cur_token:get_cur_token,
		get_nobel:get_nobel,
		take_card:take_card,
		checkout:checkout,
		score:score,
		draw_card:draw_card,
		take_token:take_token,
		add_user:add_user

	}

	


}
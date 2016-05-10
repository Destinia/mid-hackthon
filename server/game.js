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



{
	token = () => {return {Emerald:0,Sapphire:0,Ruby:0,Diamond:0,Agate:0,Gold:0}}
	user = (index) => {return {index:index,token:token(),score:0,currency:token()}}
	const win = 15;
	var cur_card = {top:[],mid:[],bot:[]};


	var users = [user(0),user(1),user(2),user(3)];
	//cur_user = 4 for win
	var cur_user = 0;

	var cur_token = {Emerald:7,Sapphire:7,Ruby:7,Diamond:7,Agate:7,Gold:5};
	var deck = {top:[],mid:[],bot:[]};


	var next_turn = () => {return (cur_user===3)? 0:++cur_user;};
	var get_cur_card = () => {return cur_card;};
	var get_cur_token = () => {return cur_token;};

	//TODO front_end render no card(null)
	var take_card = (pos,index,price) => {
		checkout(cur_card[pos][index]);
		score(cur_card[pos][index]);
		cur_card[pos][index] = draw_card(pos);
		token_back(price);
	};
	//do server need to know price?
	var checkout = (card) => {
		if(card.type!=='none')
		users[cur_user].currency[card.type] += 1;
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
		deck[where] = deck.[where].slice(0,rand).concat(deck[where].slice(rand+1,deck[where].length-1));
		return target;
	};

	var take_token = (kind1,kind2,kind3) => {
		if(kind2) {
			cur_token[kind1] -= 1;users[cur_user].token[kind1]+=1;
			cur_token[kind2] -= 1;users[cur_user].token[kind2]+=1;
			cur_token[kind3] -= 1;users[cur_user].token[kind3]+=1;

		}
		else {
			cur_token[kind1] -= 2;users[cur_user].token[kind1]+=2;
		}

	};

	var token_back = (price) => {
		for(var key in price){
			users[cur_user].token[key] -= price[key];
			cur_token[key] += price[key];
		}
	};

	


}
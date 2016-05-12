// Keep track of which names are used so that there are no duplicates
var createGame = require("./Game.js");

var userNames = (function () {
  var names = {};

  var claim = function (name) {
    if (!name || names[name]) {
      return false;
    } else {
      names[name] = true;
      return true;
    }
  };

  // find the lowest unused "guest" name and claim it
  var getGuestName = function () {
    var name,
      nextUserId = 1;

    do {
      name = 'Guest ' + nextUserId;
      nextUserId += 1;
    } while (!claim(name));

    return name;
  };

  // serialize claimed names as an array
  var get = function () {
    var res = [];
    for (user in names) {
      res.push(user);
    }

    return res;
  };

  var free = function (name) {
    if (names[name]) {
      delete names[name];
    }
  };

  return {
    claim: claim,
    free: free,
    get: get,
    getGuestName: getGuestName
  };
}());

var newGame = createGame();
newGame.init_draw();
console.log(newGame.get_cur_card());



exports = module.exports = function (io) {

  io.on('connection', function(socket){
    var name = userNames.getGuestName();
    console.log("new user" + name);
  
    // send the new user their name and a list of users
    socket.emit('init', {
      name: name,
      users: userNames.get(),
      cards: newGame.get_cur_card(),
      token: newGame.get_cur_token()
    });

    socket.on('card', function(data){
      console.log("here",data);
      newGame.draw_card(data.level);
      socket.emit('drawcard',{cards:newGame.get_cur_card()})
    });
  
    // notify other clients that a new user has joined
    socket.broadcast.emit('user:join', {
      name: name
    });
  
    // broadcast a user's message to other users
    socket.on('send:message', function (data) {
      socket.broadcast.emit('send:message', {
        user: name,
        text: data.text
      });
    });
  
    // validate a user's name change, and broadcast it on success
    socket.on('change:name', function (data, fn) {
      if (userNames.claim(data.name)) {
        var oldName = name;
        userNames.free(oldName);
  
        name = data.name;
        
        socket.broadcast.emit('change:name', {
          oldName: oldName,
          newName: name
        });
  
        fn(true);
      } else {
        fn(false);
      }
    });
  
    // clean up when a user leaves, and broadcast it to other users
    socket.on('disconnect', function () {
      socket.broadcast.emit('user:left', {
        name: name
      });
      userNames.free(name);
    });

  });
}

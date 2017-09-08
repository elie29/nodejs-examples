const Events = require("events");

const myEvent = new Events();

// Je reçois ping, je lance pong après 1 seconde
myEvent.on("ping", () => {
   console.log('Got a ping!');

   setTimeout(() => {
      myEvent.emit('pong');
   }, 1000);
});

// Je reçois pong, je lance ping après 1 seconde
myEvent.on("pong", () => {
   console.log('Got a pong!');

   setTimeout(() => {
      myEvent.emit('ping');
   }, 1000);
});

// Je commence par ping
myEvent.emit('ping');
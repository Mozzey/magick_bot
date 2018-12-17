export const BasicBot = () => {
  const tmi = require("tmi.js");

  var options = {
    options: {
      debug: true
    },
    connection: {
      reconnect: true
    },
    identity: {
      username: "magick_bot",
      password: "oauth:k8q7mfq6qp10bwudu0j5yvw4g774e4"
    },
    channels: ["#k00ka"]
  };

  const client = new tmi.Client(options);

  const commandPrefix = "!";
  const connectedChannels = [...options.channels];
  const botName = options.identity.username;
  const userList = [];

  client.connect();

  // Bot is connected
  const botConnected = (address, port) => {
    console.log(`Address: ${address} \nPort: ${port}`);
    client.action(connectedChannels[0], `has entered the chat!`);
  };

  // Rock Paper Scissor game function
  const rockPaperScissor = message => {
    const shootArray = ["rock", "paper", "scissor"];
    const random = Math.floor(Math.random() * 2 + 1);
    let response = shootArray[random];
    if (message === "!shoot-rock" && response === "scissor") {
      return client.action(
        connectedChannels[0],
        `Magick_Bot rolls ${response} - You rock smash them scissors like the Juggernaut! You win!`
      );
    } else if (message === "!shoot-paper" && response === "rock") {
      return client.action(
        connectedChannels[0],
        `Magick_Bot rolls ${response} - You"re piece of paper smothers the rock into submission! You win!`
      );
    } else if (message === "!shoot-scissor" && response === "paper") {
      return client.action(
        connectedChannels[0],
        `Magick_Bot rolls ${response} - You slice and dice the paper into bits! You win!`
      );
    } else {
      return client.action(
        connectedChannels[0],
        `Magick_Bot rolls ${response} - You lost this round!`
      );
    }
  };

  client.on("chat", (channel, user, message, self) => {
    if (self) {
      return;
    }
    // if command prefix isnt equal to !
    if (message.substring(0, 1) !== commandPrefix) {
      client.action(
        connectedChannels[0],
        "There are no comands with that prefix..."
      );
    }

    if (message === `${commandPrefix}hi`) {
      client.action(connectedChannels[0], "Heyo!");
    }

    // Rock, Paper, Scissor
    if (
      message === `${commandPrefix}shoot-rock` ||
      message === `${commandPrefix}shoot-paper` ||
      message === `${commandPrefix}shoot-scissor`
    ) {
      client.action(connectedChannels[0], rockPaperScissor(message));
    }

    if (message === `${commandPrefix}testing`) {
      if (!userList.includes(user.username)) {
        userList.push(user.username);
        console.log(userList);
        client.action(connectedChannels[0], `from if`);
      } else {
        console.log(userList);
        client.action(connectedChannels[0], `from else`);
      }
    }
  });
  // magick_bot has entered the channel
  client.on("connected", botConnected);
};

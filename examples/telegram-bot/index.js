var axios = require('axios');

const BOT_TOKEN = "400458894:AAGmGT3hBVxYa2pZ0PTofqB3ID8IWctZJHc"

function notify(userId, message) {
  const url = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage?chat_id=${userId}&text=${message}`;

  axios.get(url)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
      console.log(error);
    });
}

// Example 
const jiachen_id = "133866436";
notify(jiachen_id, "Hi jiachen!!!")
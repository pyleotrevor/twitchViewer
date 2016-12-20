$(document).ready(function() {

var userArr = [];
var userArr = ["ESL_SC2", "OgamingSC2", "freecodecamp", "habathcx", "RobotCaleb", "noobs2ninjas","inceptionxx","ikasperr","AutomateAllTheThings","totallythadcastle"]

userArr.forEach(function(user) {
  var apiBase = "https://wind-bow.gomix.me/twitch-api/";
  var fullAPI;
  var fullAPI = apiBase + "streams/" + user;
  var fullOfflineAPI;
  var fullOfflineAPI = apiBase + "channels/" + user;


  $.ajax({
      url: fullAPI,
      crossDomain: true,
      dataType: 'jsonp',
      success: function(userData) {


        if (userData.stream) {
          $(".container").append("<a class = 'online' href =" + userData.stream.channel.url + ">" + "<img class = 'logoPic' src =" + userData.stream.channel.logo +  ">" + "<span>" + userData.stream.channel.status + "</span>" + "<img src = 'https://cdn0.iconfinder.com/data/icons/small-n-flat/24/678134-sign-check-128.png'" + "</a>")
          console.log(userData);
        }

        else {
            $.ajax({
              url: fullOfflineAPI,
              crossDomain: true,
              dataType: 'jsonp',
              success: function(userDataOffline) {
                console.log(userDataOffline);
                $(".container").append("<a class = 'offline' href =" + userDataOffline.url + ">" + "<img class = 'logoPic' src =" + userDataOffline.logo + ">" + "<span>" + userDataOffline.status +"</span>" + "<img src = 'https://cdn0.iconfinder.com/data/icons/shift-free/32/Error-128.png'" + "</a>")
              }
            })
          }
        }
    });
    });
      });

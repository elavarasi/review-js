function User() {
  var username, password;
  function doLogin(user, pw) {
    username = user;
    password = pw;
    console.log("user login is done here " + username + " " + password);
  }

  var publicAPI = {
    login: doLogin
  };

  return publicAPI;
}

var fred = User();
fred.login("fred", "12344");
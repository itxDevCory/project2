//Gets input from the user in index.html and retrieves data from api-routes
$(document).ready(function() {
  $.get("/api/user/myID").then(function() {
    $.get("api/search", {
      email: email,
      password: password,
      zipcode: zipcode,
      start: start,
      end: end,
      type: type
    });
  });
});

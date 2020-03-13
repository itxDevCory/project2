//*Gets input from the user in index.html and retrieves data from api-routes*
$(document).ready(function() {
  $.post("api/search", {
    zipcode: zipcode,
    start: startdate,
    end: enddate,
    type: type
  }).then(function() {
    res.append("/index.html");
  });
});
//*

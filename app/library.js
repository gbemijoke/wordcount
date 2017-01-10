module.exports = {
CallService:function(str)
{
  var url = "https://openexchangerates.org/api/latest.json?app_id=0bb87a00a9b44afd91e54c224736c93d";

  
  var client = new XMLHttpRequest();
  client.open("GET", url, false);
  client.setRequestHeader("Content-Type", "text/plain");
  client.send();
  if (client.status == 200)
  {
    console.log("The request succeeded!\n\nThe response representation was:\n\n" + client.responseText)
  }
  else
  {
    console.log("The request did not succeed!\n\nThe response status was: " + client.status + " " + client.statusText + ".");
  }
}

CallService();
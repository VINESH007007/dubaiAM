$(document).ready(function(){
$.get("URL", function(user,error){

if(!error) {
if(user.username) {
$("#dashboardText").html('Welcome..'+user.username);
} else {
$("#dashboardText").html('User Data not available!');
}
} else {
$("#dashboardText").html('Backend API not set!');
}
}); 


});
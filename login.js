$(document).ready(function(){
$("#login").click(function(){
//	alert("clicked");
var email = $("#email").val();
var password = $("#password").val();
// Checking for blank fields.
if( email =='' || password ==''){
$('input[type="text"],input[type="password"]').css("border","2px solid #CC6666");
$('input[type="text"],input[type="password"]').css("box-shadow","0 0 3px #CC6666");
alert("Please fill all fields...!!!!!!");
}else {
	//add the URL 
	$.post("URL", {email: email,password:password},
	 function(status) { 
	$("#loading").hide(); // To Hide progress bar alert(status); });
		alert("Success");
}
});


});


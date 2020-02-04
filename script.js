$("button").click(function() {
$("img").hide(); 
$("p").hide(); 
$("#gradient").hide(); 
$(".result").hide();
$(".back").show();
});

// document.getElementById("form1").onsubmit=function() {
$(".result").click(function() {	   

	  color = parseInt(document.querySelector('input[name = "color"]:checked').value);
	   
console.log(color);


	  place = parseInt(document.querySelector('input[name = "place"]:checked').value);

console.log(place);

	   total= place + color;
	   
	 console.log(total); 

if (total === 2 || total === 7) {
$(".message").html("You Are Villanelle");
 $(".villanelle").show();
}	  

if (total === 5 ) { 
$(".message").html("You Are Eve ");
 $(".eve").show();
};

if (total === 8 || total === 4) {
$(".message").html("You Are Konstanin");
 $(".kon").show();
}	  

if (total === 3 || total === 6) { 
$(".message").html("You Are Kenny ");
 $(".ken").show();
 
};

});

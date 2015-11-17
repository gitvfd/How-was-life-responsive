
var i = 1820;                     //  set your counter to first year of data

function play () {           //  create a loop function
   	setTimeout(function () {    //  call a 1.6s setTimeout when the loop is called
        chart.selectAll("circle")    
   			.attr("fill",function(d){
        		if(d.Year==i){
          			return "rgb(224,47,123)";
        		}
        		else{
        			return "rgba(225,219,193,.1)";
        		};
      		});
		document.getElementById("yearWellBeing").innerHTML = i;


      	update(i);          //  your code here
      	i=i+10;                     //  increment the counter
      	if (i < 2020) {            //  if the counter < 10, call the loop function
        	play();             //  ..  again which will trigger another 
      	}else{
      		i = 1820;
      	}                        //  ..  setTimeout()
   	}, 1500);
}


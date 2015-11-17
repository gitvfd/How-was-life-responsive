function DQ_HEIGHT(year,country){
	d3.tsv("data/DQ_HEIGHT.tsv", function(tsv) {
		

		var dq_Data=tsv.filter(function(d) {
			
	      return(d.variable== parseFloat(year) && d.country==country)
	    });

	    if(dq_Data!=""){
	    	var text = "Data quality in " + country + " is equal to " + dq_Data[0].value + " in " + year ;
			document.getElementById("DQ_HEIGHT").innerHTML= text;
		}
		else{
			document.getElementById("DQ_HEIGHT").innerHTML= "No information on data quality for this year";
		}

	});
}
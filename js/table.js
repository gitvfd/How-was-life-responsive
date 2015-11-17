function table(country,columns){

	d3.select("#countryTable")
		.selectAll("table")
		.remove();

if(country != " Select a Country"){
    var table = d3.select("#countryTable")
    	.append("table")
        .attr("style", "margin-left: 10px"),
        thead = table.append("thead"),
        tbody = table.append("tbody");

    // append the header row
    thead.append("tr")
        .selectAll("th")
        .data(columns)
        .enter()
        .append("th")
        .text(function(column) { return column; });

	d3.tsv("data/countryAvailability.tsv", function(tsv) {


		var selectedCountry=tsv.filter(function(d) {
			 return(d.country==country);
			});


		var dataset = [];

		dataset.push(["Year","Availability","Number of data"]);

		for(var i = 1820; i<=2010; i=i+10){
			dataset.push([i,"",""])
		};


		for(var i = 1820; i<=2010; i=i+10){
			var yearAvail="No";
			var numberData=""
			selectedCountry.forEach(function(d){
				if(d.year==dataset[1+(i-1820)/10][0]){
					yearAvail="Yes";
					numberData=d.numberData;
				}
			});
			dataset[1+(i-1820)/10][1]=yearAvail;
			dataset[1+(i-1820)/10][2]=numberData;
		};

	
		
	    table.style("border-collapse", "collapse")
	    .style("border", "3px #464646 solid")
	    
	    .selectAll("tr")
	    .data(dataset)
	    .enter().append("tr")
	    
	    .selectAll("td")
	    .data(function(d){return d;})
	    .enter().append("td")
	    .style("border", "1px #464646 solid")
	    .on("mouseover", function(){d3.select(this).style("background-color", "red")}) 
	    .on("mouseout", function(){d3.select(this).style("background-color", "rgb(250,250,250)")}) 
	    .text(function(d){return d;});

  
	});
};
}
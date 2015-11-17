function line_Wage(country){

	var margin = 5,
        width = 350,
        height = 50;

	d3.select("#lineWage")
				.selectAll("svg")
	            .remove();			

		    lineChart = d3.select("#lineWage").append("svg")
		               .attr("width", width)
		               .attr("height", height);


	d3.tsv("data/Labourers-Real-Wage-WB.tsv", function(tsv) {

		var dataLine=tsv.filter(function(d) {
	      return(d.Country==country)
	    });


	    //Create scale functions
	    var xScale = d3.scale.linear()
	      .domain([d3.min(dataLine, function(d) { return parseFloat(d.variable); }), d3.max(dataLine, function(d) { return parseFloat(d.variable); })])
	      .range([5*margin, width - 1.5*margin ]);


	      //Define X axis
	     var xAxis = d3.svg.axis()
	        .scale(xScale)
	        .orient("bottom")
	        .tickFormat(d3.format("d"));


	    var yScale = d3.scale.linear()
	      .domain([d3.min(dataLine, function(d) { return parseFloat(d.value); }), d3.max(dataLine, function(d) { return parseFloat(d.value); })])
	      .range([height - 2*margin , margin]);


		var yAxis = d3.svg.axis()
			.scale(yScale)
			.orient("left")
			.ticks(4);


		var line = d3.svg.line()
		    .x(function(d) { return xScale(d.variable); })
		    .y(function(d) { return yScale(d.value); });

	  	lineChart.append("g")
	    	.attr("class", "lineaxis")
	    	.attr("transform", "translate(0," + 0.7*height + ")")
	    	.call(xAxis);

	  	lineChart.append("g")
	    	.attr("class", "lineaxis")
	    	.attr("transform", "translate(" + 7*margin + ",0)")
	     	.call(yAxis);

	  	lineChart.append("path")
	      	.datum(dataLine)
	      	.attr("class", "line")
	      	.attr("d", line)
	      	.attr("stroke","#2CA3E0")
	      	.attr("stroke-width","1.5px")
	      	.attr("fill","none");
	});
}
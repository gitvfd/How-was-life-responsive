function heightFunction(year){
  d3.tsv("data/Height-WB.tsv", function(tsv) {
    data = tsv;

    //Create scale functions
    var xScale = d3.scale.linear()
      .domain([d3.min(data, function(d) { return parseFloat(d.value); }), d3.max(data, function(d) { return parseFloat(d.value); })])
      .range([margin, width - margin * 2]);

    HeightData=data.filter(function(d) {
      return(d.variable== year)
    });

    var test=chartHeight.selectAll("circle")
      .data(HeightData);

    //Create circles
    test
      .transition().duration(1000).ease("linear")
      .attr("cx", function(d) {
        return xScale(parseFloat(d.value));
      })
      .attr("cy", height/2)
      .attr("r", function(d){
        if(d.Country==document.getElementById("countryDropdown").options[document.getElementById("countryDropdown").selectedIndex].value){
          return 9;
        }
        else{
          return 6;
        };
      })
      .attr("fill",function(d){
        if(d.Country==document.getElementById("countryDropdown").options[document.getElementById("countryDropdown").selectedIndex].value){
          return "red";
        }
        else{
          return "#7C3A73";
        };
      })
      .attr("opacity", function(d){
        if(d.Country==document.getElementById("countryDropdown").options[document.getElementById("countryDropdown").selectedIndex].value){
          return 1;
        }
        else{
          return 0.2;
        };
      });

    test      
      .data(HeightData)
      .enter()
      .append("circle")
      .attr("cx", function(d) {
        return xScale(parseFloat(d.value));
      })
      .attr("cy", height/2)
      .attr("r", function(d){
        if(d.Country==document.getElementById("countryDropdown").options[document.getElementById("countryDropdown").selectedIndex].value){
          return 9;
        }
        else{
          return 6;
        };
      })
      .attr("fill",function(d){
        if(d.Country==document.getElementById("countryDropdown").options[document.getElementById("countryDropdown").selectedIndex].value){
          return "red";
        }
        else{
          return "#7C3A73";
        };
      })
      .attr("opacity", function(d){
        if(d.Country==document.getElementById("countryDropdown").options[document.getElementById("countryDropdown").selectedIndex].value){
          return 1;
        }
        else{
          return 0.2;
        };
      });

      test.exit().remove();

    chartHeight.selectAll("circle")
      .on("mouseover",function(d) {

        DQ_HEIGHT(d.variable,d.Country);


        line_HEIGHT(d.Country);

        d3.select(this)
          .attr("opacity",0.60);

        //Get this bar's x/y values, then augment for the tooltip
        var xPosition = parseFloat(d3.select(this).attr("cx"))/2 +document.getElementById("height").offsetLeft  ;
        var yPosition = parseFloat(d3.select(this).attr("cy")) +document.getElementById("height").offsetTop + 5;


        
        d3.select("#countryNameHeight")
          .text(function(){
            return d.Country
          });

        d3.select("#tooltipHeight")
          .style("left", xPosition + "px")
          .style("top", yPosition + "px") ;

        //Show the tooltip
        d3.select("#tooltipHeight").classed("hidden", false);


    })

    chartHeight.selectAll("circle")
      .on("mouseout",function(d) {
        d3.select(this)
          .attr("opacity",function(d){
            if(d.Country==document.getElementById("countryDropdown").options[document.getElementById("countryDropdown").selectedIndex].value){
              return 1;
            }
            else{
              return 0.2;
            };
          });
  
        d3.select("#tooltipHeight").classed("hidden", true);

        document.getElementById("DQ_HEIGHT").innerHTML= "Mouse over a country to have information on data quality from 1: great, to 4: estimate";

      });

  });

}
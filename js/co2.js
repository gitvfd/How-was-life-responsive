function co2(year){
  d3.tsv("data/Total_CO2_Emissions.tsv", function(tsv) {
    data = tsv;

    //Create scale functions
    var xScale = d3.scale.sqrt()
      .domain([d3.min(data, function(d) { return parseFloat(d.value); }), d3.max(data, function(d) { return parseFloat(d.value); })])
      .range([margin, width - margin * 2]);

    CO2Data=data.filter(function(d) {
      return(d.variable== year)
    });

    var test=chartCO2.selectAll("circle")
      .data(CO2Data);

    //Create circles
    test
      .transition().duration(1500).ease("linear")
      .attr("cx", function(d) {
        return xScale(parseFloat(d.value));
      })
      .attr("cy", height/2)
      .attr("r", function(d){
        if(d.value=="0"){
          return 0;
        }
        else if(d.Country==document.getElementById("countryDropdown").options[document.getElementById("countryDropdown").selectedIndex].value){
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
          return "#30A457";
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
      .data(CO2Data)
      .enter()
      .append("circle")
      .attr("cx", function(d) {
        return xScale(parseFloat(d.value));
      })
      .attr("cy", height/2)
      .attr("r", function(d){
        if(d.value=="0"){
          return 0;
        }
        else if(d.Country==document.getElementById("countryDropdown").options[document.getElementById("countryDropdown").selectedIndex].value){
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
          return "#30A457";
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

    chartCO2.selectAll("circle")
      .on("mouseover",function(d) {

        DQ_CO2(d.variable,d.Country);


        line_CO2(d.Country);

        d3.select(this)
          .attr("opacity",0.60);

        //Get this bar's x/y values, then augment for the tooltip
        var xPosition = parseFloat(d3.select(this).attr("cx"))/2 +document.getElementById("co2").offsetLeft  ;
        var yPosition = parseFloat(d3.select(this).attr("cy")) +document.getElementById("co2").offsetTop + 5;


        
        d3.select("#countryNameCO2")
          .text(function(){
            return d.Country
          });

        d3.select("#tooltipCO2")
          .style("left", xPosition + "px")
          .style("top", yPosition + "px") ;

        //Show the tooltip
        d3.select("#tooltipCO2").classed("hidden", false);


    })

    chartCO2.selectAll("circle")
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
  
        d3.select("#tooltipCO2").classed("hidden", true);

        document.getElementById("DQ_CO2").innerHTML= "Mouse over a country to have information on data quality from 1: great, to 4: estimate";

      });

  });

}
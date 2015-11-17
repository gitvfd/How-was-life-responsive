function so2(year){
  d3.tsv("data/Total_SO2_Emissions.tsv", function(tsv) {
    data = tsv;

    //Create scale functions
    var xScale = d3.scale.sqrt()
      .domain([d3.min(data, function(d) { return parseFloat(d.value); }), d3.max(data, function(d) { return parseFloat(d.value); })])
      .range([margin, width - margin * 2]);

    SO2Data=data.filter(function(d) {
      return(d.variable== year)
    });

    var test=chartSO2.selectAll("circle")
      .data(SO2Data);

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
      .data(SO2Data)
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

    chartSO2.selectAll("circle")
      .on("mouseover",function(d) {

        DQ_SO2(d.variable,d.Country);


        line_SO2(d.Country);

        d3.select(this)
          .attr("opacity",0.60);

        //Get this bar's x/y values, then augment for the tooltip
        var xPosition = parseFloat(d3.select(this).attr("cx"))/2 +document.getElementById("so2").offsetLeft  ;
        var yPosition = parseFloat(d3.select(this).attr("cy")) +document.getElementById("so2").offsetTop + 5;


        
        d3.select("#countryNameSO2")
          .text(function(){
            return d.Country
          });

        d3.select("#tooltipSO2")
          .style("left", xPosition + "px")
          .style("top", yPosition + "px") ;

        //Show the tooltip
        d3.select("#tooltipSO2").classed("hidden", false);


    })

    chartSO2.selectAll("circle")
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
  
        d3.select("#tooltipSO2").classed("hidden", true);

        document.getElementById("DQ_SO2").innerHTML= "Mouse over a country to have information on data quality from 1: great, to 4: estimate";

      });

  });

}
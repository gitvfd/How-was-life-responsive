function homicide(year){
  d3.tsv("data/Homicide_rates-WB.tsv", function(tsv) {
    data = tsv;

    //Create scale functions
    var xScale = d3.scale.linear()
      .domain([d3.min(data, function(d) { return parseFloat(d.value); }), d3.max(data, function(d) { return parseFloat(d.value); })])
      .range([margin, width - margin * 2]);

    HomicideData=data.filter(function(d) {
      return(d.variable== year)
    });

    var test=chartHomicide.selectAll("circle")
      .data(HomicideData);

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
          return "#606060";
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
      .data(HomicideData)
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
          return "#606060";
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

    chartHomicide.selectAll("circle")
      .on("mouseover",function(d) {

        DQ_HOMICIDE(d.variable,d.Country);


        line_HOMICIDE(d.Country);

        d3.select(this)
          .attr("opacity",0.60);

        //Get this bar's x/y values, then augment for the tooltip
        var xPosition = parseFloat(d3.select(this).attr("cx"))/2 +document.getElementById("homicide").offsetLeft  ;
        var yPosition = parseFloat(d3.select(this).attr("cy")) +document.getElementById("homicide").offsetTop + 5;


        
        d3.select("#countryNameHomicide")
          .text(function(){
            return d.Country
          });

        d3.select("#tooltipHomicide")
          .style("left", xPosition + "px")
          .style("top", yPosition + "px") ;

        //Show the tooltip
        d3.select("#tooltipHomicide").classed("hidden", false);


    })

    chartHomicide.selectAll("circle")
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
  
        d3.select("#tooltipHomicide").classed("hidden", true);

        document.getElementById("DQ_HOMICIDE").innerHTML= "Mouse over a country to have information on data quality from 1: great, to 4: estimate";

      });

  });

}
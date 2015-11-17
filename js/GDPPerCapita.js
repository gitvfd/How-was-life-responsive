function GDPPerCapita(year){
  d3.tsv("data/GDP_Per_Capita-WB.tsv", function(tsv) {
    data = tsv;

    //Create scale functions
    var xScale = d3.scale.linear()
      .domain([d3.min(data, function(d) { return parseFloat(d.value); }), d3.max(data, function(d) { return parseFloat(d.value); })])
      .range([margin, width - margin * 2]);

    GDPData=data.filter(function(d) {
      return(d.variable== year)
    });

    var test=chartGDP.selectAll("circle")
      .data(GDPData);

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
          return "rgb(45,113,138)";
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
      .data(GDPData)
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
          return "rgb(45,113,138)";
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

    chartGDP.selectAll("circle")
      .on("mouseover",function(d) {
        var sel = d3.select(this);
          sel.moveToFront();

        DQ_GDP(d.variable,d.Country);


        line_GDP(d.Country);

        d3.select(this)
          .attr("opacity",0.60);

        //Get this bar's x/y values, then augment for the tooltip
        var xPosition = parseFloat(d3.select(this).attr("cx"))/2 +document.getElementById("gdpPerCapita").offsetLeft  ;
        var yPosition = parseFloat(d3.select(this).attr("cy")) +document.getElementById("gdpPerCapita").offsetTop + 5;


        
        d3.select("#countryName")
          .text(function(){
            return d.Country
          });

        d3.select("#tooltipGDP")
          .style("left", xPosition + "px")
          .style("top", yPosition + "px") ;

        //Show the tooltip
        d3.select("#tooltipGDP").classed("hidden", false);


    })

    chartGDP.selectAll("circle")
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
  
        d3.select("#tooltipGDP").classed("hidden", true);

        document.getElementById("DQ_GDP").innerHTML= "Mouse over a country to have information on data quality from 1: great, to 4: estimate";

      });

        //d3.select(window).on('resize', resizeGDP); 


        //function resizeGDP() {
            // update width
          //  width = parseInt(d3.select('#gdpPerCapita').style('width'), 10);
          //  margin = 0.03* parseInt(d3.select('#gdpPerCapita').style('width'), 10);
            // resize the chart
            xScale.range([margin, width - margin * 2]);

          //  d3.select("#chartGDP")
                //.style('height', (y.rangeExtent()[1] + margin.top + margin.bottom) + 'px')
           //     .style('width', (width) + 'px');


             // chartGDP.selectAll("circle")
              //    .attr("cx", function(d) { return xScale(d.value); });
              
              //chartGDP.selectAll("text")
              //    .attr("x", 0.93*width);


              // update axes
              //chart.select('.x.axis.top').call(xAxis.orient('top'));
              
              //chartGDP.select('.x.axis.bottom').call(xAxis.orient('bottom'));
          //}

  });

}
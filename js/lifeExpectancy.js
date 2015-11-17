function lifeExpectancy(year){
  d3.tsv("data/Life_Expectancy_at_Birth-WB.tsv", function(tsv) {
    data = tsv;

    //Create scale functions
    var xScale = d3.scale.linear()
      .domain([18, d3.max(data, function(d) { return parseFloat(d.value); })])
      .range([margin, width - margin * 2]);

    LifeExpData=data.filter(function(d) {
      return(d.variable== year)
    });

    var test=chartLifeExp.selectAll("circle")
      .data(LifeExpData);

    //Create circles
    test
      .transition().duration(1500).ease("linear")
      .attr("cx", function(d) {
        if(parseFloat(d.value)<18){
          return 0;
        }
        else{
          return xScale(parseFloat(d.value));
        }
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
      .data(LifeExpData)
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
      })      .attr("fill",function(d){
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

    chartLifeExp.selectAll("circle")
      .on("mouseover",function(d) {

        DQ_LIFEEXP(d.variable,d.Country);


        line_LIFEEXP(d.Country);

        d3.select(this)
          .attr("opacity",0.60);

        //Get this bar's x/y values, then augment for the tooltip
        var xPosition = parseFloat(d3.select(this).attr("cx"))/2 +document.getElementById("lifeExpectancy").offsetLeft  ;
        var yPosition = parseFloat(d3.select(this).attr("cy")) +document.getElementById("lifeExpectancy").offsetTop + 5;


        
        d3.select("#countryNameLifeExp")
          .text(function(){
            return d.Country
          });

        d3.select("#tooltipLifeExp")
          .style("left", xPosition + "px")
          .style("top", yPosition + "px") ;

        //Show the tooltip
        d3.select("#tooltipLifeExp").classed("hidden", false);


    })

    chartLifeExp.selectAll("circle")
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
  
        d3.select("#tooltipLifeExp").classed("hidden", true);

        document.getElementById("DQ_LIFEEXP").innerHTML= "Mouse over a country to have information on data quality from 1: great, to 4: estimate";

      });

  });

}
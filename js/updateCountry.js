function updateCountry(){
var selectedCountry = document.getElementById("countryDropdown").options[document.getElementById("countryDropdown").selectedIndex].value;

//if (selectedCountry == "Western Europe" || selectedCountry == "Eastern Europe" || selectedCountry == "Western Offshoots" || selectedCountry == "Latin America and Caribbean" || selectedCountry == "Sub-Saharan Africa" || selectedCountry == "MENA" || selectedCountry == "East Asia" || selectedCountry == "South and South-East Asia"){
//*************GDP PER CAPITA *****************************//
chartGDP.selectAll("circle")
  .attr("fill",function(d){
    if(d.Country==selectedCountry){
      return "red";
    }
    else{
      return "rgb(45,113,138)";
    };
  })
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
  .attr("opacity",function(d){
    if(d.Country==selectedCountry){
      return 1;
    }
    else{
      return 0.2;
    };
  });

//*************REAL WAGES *****************************//
chartRealWages.selectAll("circle")
  .attr("fill",function(d){
    if(d.Country==selectedCountry){
      return "red";
    }
    else{
      return "#2CA3E0";
    };
  })
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
  .attr("opacity",function(d){
    if(d.Country==selectedCountry){
      return 1;
    }
    else{
      return 0.2;
    };
  });

//*************EDUCATION *****************************//
chartEducation.selectAll("circle")
  .attr("fill",function(d){
    if(d.Country==selectedCountry){
      return "red";
    }
    else{
      return "#7EA943";
    };
  })
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
  .attr("opacity",function(d){
    if(d.Country==selectedCountry){
      return 1;
    }
    else{
      return 0.2;
    };
  });

//*************LIFE EXPECTANCY *****************************//
chartLifeExp.selectAll("circle")
  .attr("fill",function(d){
    if(d.Country==selectedCountry){
      return "red";
    }
    else{
      return "#7C3A73";
    };
  })
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
  .attr("opacity",function(d){
    if(d.Country==selectedCountry){
      return 1;
    }
    else{
      return 0.2;
    };
  });

//************* HEIGHT *****************************//
chartHeight.selectAll("circle")
  .attr("fill",function(d){
    if(d.Country==selectedCountry){
      return "red";
    }
    else{
      return "#7C3A73";
    };
  })
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
  .attr("opacity",function(d){
    if(d.Country==selectedCountry){
      return 1;
    }
    else{
      return 0.2;
    };
  });

//************* HOMICIDE *****************************//
chartHomicide.selectAll("circle")
  .attr("fill",function(d){
    if(d.Country==selectedCountry){
      return "red";
    }
    else{
      return "#606060";
    };
  })
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
  .attr("opacity",function(d){
    if(d.Country==selectedCountry){
      return 1;
    }
    else{
      return 0.2;
    };
  });
 
 //************* HOMICIDE *****************************//
chartPolity.selectAll("circle")
  .attr("fill",function(d){
    if(d.Country==selectedCountry){
      return "red";
    }
    else{
      return "#DCA922";
    };
  })
  .attr("r", function(d){
    if(d.Country==document.getElementById("countryDropdown").options[document.getElementById("countryDropdown").selectedIndex].value){
      return 9;
    }
    else{
      return 6;
    };
  })
  .attr("opacity",function(d){
    if(d.Country==selectedCountry){
      return 1;
    }
    else{
      return 0.2;
    };
  }); 

 
 //************* CO2 *****************************//
chartCO2.selectAll("circle")
  .attr("fill",function(d){
    if(d.Country==selectedCountry){
      return "red";
    }
    else{
      return "#30A457";
    };
  })
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
  .attr("opacity",function(d){
    if(d.Country==selectedCountry){
      return 1;
    }
    else{
      return 0.2;
    };
  });
 
 //************* SO2 *****************************//
chartSO2.selectAll("circle")
  .attr("fill",function(d){
    if(d.Country==selectedCountry){
      return "red";
    }
    else{
      return "#30A457";
    };
  })
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
  .attr("opacity",function(d){
    if(d.Country==selectedCountry){
      return 1;
    }
    else{
      return 0.2;
    };
  });

 
 //************* CROPLAND *****************************//
chartCropland.selectAll("circle")
  .attr("fill",function(d){
    if(d.Country==selectedCountry){
      return "red";
    }
    else{
      return "#30A457";
    };
  })
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
  .attr("opacity",function(d){
    if(d.Country==selectedCountry){
      return 1;
    }
    else{
      return 0.2;
    };
  });    

 //************* INCOME INEQUALITY *****************************//
chartIncomeIneq.selectAll("circle")
  .attr("fill",function(d){
    if(d.Country==selectedCountry){
      return "red";
    }
    else{
      return "#2CA3E0";
    };
  })
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
  .attr("opacity",function(d){
    if(d.Country==selectedCountry){
      return 1;
    }
    else{
      return 0.2;
    };
  });    
}
//**********************ELSE *****************************//
//**********************ELSE *****************************//
//**********************ELSE *****************************//
//**********************ELSE *****************************//

//else {
//*************GDP PER CAPITA *****************************//
/**chartGDP.selectAll("circle")
  .attr("fill",function(d){
    if(d.Country==selectedCountry){
      return "red";
    }
    else{
      return "rgb(45,113,138)";
    };
  })
  .attr("opacity",function(d){
    if(d.Country==selectedCountry){
      return 1;
    }
    else{
      return 0.2;
    };
  });**/

//*************REAL WAGES *****************************//
/**chartRealWages.selectAll("circle")
  .attr("fill",function(d){
    if(d.Country==selectedCountry){
      return "red";
    }
    else{
      return "rgb(42,123,204)";
    };
  })
  .attr("opacity",function(d){
    if(d.Country==selectedCountry){
      return 1;
    }
    else{
      return 0.2;
    };
  });

}  
}
}**/
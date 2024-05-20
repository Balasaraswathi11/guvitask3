### This repo is create for the day 3 task of Guvi.
### This folder contains a js , html file and a md file.
### It contains all the `flags` of the  countries.
function reqListener() {
        const countries = JSON.parse(this.responseText)
        console.log(countries)
        for(i=0;i<countries.length;i++)
          {console.log(countries[i].name.common+' ' + "flag :"+countries[i].flags.png)}
            
      }
      
      const req = new XMLHttpRequest();
      req.addEventListener("load", reqListener);
      req.open("GET", "https://restcountries.com/v3.1/all");
      req.send();

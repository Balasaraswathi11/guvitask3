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

function reqListener() {
    const countries=JSON.parse(this.responseText)
    console.log(countries)
    for(i=0;i<countries.length;i++)
      {console.log(countries[i].name.common)
        console.log(countries[i].region)
        console.log(countries[i].subregion)
        console.log(countries[i].population)
        console.log('\n')
      }
        
  }

  
  const req = new XMLHttpRequest();
  req.addEventListener("load", reqListener);
  req.open("GET", "https://restcountries.com/v3.1/all");
  req.send();

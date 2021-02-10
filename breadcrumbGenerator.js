const invalidShortList = [
    "the",
    "of",
    "in",
    "from",
    "by",
    "with",
    "and",
    "or",
    "for",
    "to",
    "at",
    "a",
  ];
  
  function generateBC(url, separator) {
    let indexOfWildCard = url.indexOf("?");
    if (indexOfWildCard >= 0) {
      url = url.substring(indexOfWildCard, url.lenght - 1);
    }
    let indexOfSharp = url.indexOf("#");
    if (indexOfSharp >= 0) {
      url = url.substring(indexOfSharp, url.lenght - 1);
    }
    url = url.replace('http://');
    url = url.replace('https://');
    url = url.replace('www.');
  
    let urlParts = url.split("/");
  
    let prevLink = "/";
    let bC = '';
        
    urlParts = urlParts.filter((x)=>{return !x.startsWith('index.')});
    for (let i = 1; i < urlParts.length; i++) {
      let urlPart = urlParts[i].split(".")[0];
      let urlPartText = "";
        if (urlPart.length > 30) {
          urlPartText = urlPart
            .split("-")
            .filter((x) => {
              return invalidShortList.indexOf(x) < 0;
            })
            .map((x)=> {return x[0]})
            .join("")
            .toUpperCase();
        } else {
          urlPartText = urlPart.split("-").join(" ").toUpperCase();
        }
        if(!urlPartText)
          continue;
        if (i === (urlParts.length - 1)) {
          bC =  bC+'<span class="active">' + urlPartText + "</span>";
        } else {
          bC =
            bC +
            '<a href="' +
            prevLink +
            urlPart +
            '/">' +
            urlPartText +
            "</a>"
            +separator;
          prevLink =   prevLink + urlPart + '/';
        }
    }

    if (!bC) {
        bC = '<span class="active">HOME</span>';    
      }
      else{
        bC = '<a href="/">HOME</a>' + separator + bC;    
      }
  
  
    return bC;
  }
  
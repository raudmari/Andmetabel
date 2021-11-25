// Sünnikuupäeva format from M/D/Y to dd.mm.yyyy
function convertDate(strDate) {
  let dateParts = strDate.split("/"); // tükeldatakse kriipsu kohalt
  let day = dateParts[1] <= 9 ? "0" + dateParts[1] : dateParts[1];
  let month = dateParts[0] <= 9 ? "0" + dateParts[0] : dateParts[0];
  let year = dateParts[2];
    return day + "." + month + "." + year;
}

// Eposti loomine
function emailCreation(fname, lname, company) {
  let firstN = fname.toLowerCase();
  let lastN = lname.toLowerCase();
  if (company.length > 0) {
    let cmpny = company.split(" ");
    return firstN + "." + lastN + "@" + cmpny[0].toLowerCase() + ".com";
  }
}


// Kontroll, kas kõik andmed on kõigil väljadel olemas
function allData(jsondata, i) {
  this.jsondata = jsondata;
  if (jsondata[i].ID != "" &&
    jsondata[i].Lastname != "" &&
    jsondata[i].Birthdate != "" &&
    jsondata[i].Firstname != "" &&
    jsondata[i].Country != "" &&
    jsondata[i].Company != "" &&
    jsondata[i].Color != "") {
    return true;
  } else {
    return false;
  }
}



module.exports = {
  convertDate: convertDate,
  emailCreation: emailCreation,
  allData: allData
}

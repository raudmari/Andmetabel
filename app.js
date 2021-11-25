const express = require("express");
const path = require("path");
const ejs = require("ejs");
let jsonData = require("./ExportJson.json");
const myfuncs = require("./helpers/myfuncs.js");

const app = express();

jsonData = jsonData.objects.sort((a, b) => a.Lastname > b.Lastname && 1 || -1)
console.log(jsonData);

app.set("views", path.join(__dirname, "views"));
app.use(express.static(__dirname + '/public'));
app.set("view engine", "ejs");


let title = "No name"

app.get("/", (req, res) => {
  title = "Andmetabel";
  res.render("table", {
    title,
    jsonData,
    myfuncs
  });
});

app.get("/:id", (req, res) => {
      const {
        id
      } = req.params;
      let find = false;
      for (var jd of jsonData) {
        if (jd.ID === id) {
          find = true;
          const data = jsonData.find(jd => jd.ID === id);
          title = "Show data";
          res.render("details", {
            title,
            myfuncs,
            data
          });
        }
      }
      if (find == false) {
        title = "Error 404",
          res.render("Error404", {
            title
          });
      }
    });

    app.listen(3000, () => {
      console.log("Server is running on port " + 3000);
    });

    app.get("/*", (req, res) => {
      title = "Error 404";
      res.render("Error404", {
        title
      });
    });

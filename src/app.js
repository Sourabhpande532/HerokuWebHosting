const express = require("express");
const app = express();
const path = require("path");
const port = process.env.PORT || 3000;
const hbs = require('hbs');

app.set("view engine", "hbs");


const view_path = path.join(__dirname, "../views")
// console.log(view_path);
app.set("views", view_path)
const view_templete = path.join(__dirname, "../templet/views")
app.set("views", view_templete);
const view_partials = path.join(__dirname, "../templet/partials")
hbs.registerPartials(view_partials)


// public Static path for css 
const Public_path =  path.join(__dirname,"../public")
app.use(express.static(Public_path))


app.get("/", (req, res) => {
  res.render("index");
});
app.get("/about", (req, res) => {
  res.render("about");
});
app.get("/weather", (req, res) => {
  res.render("weather");
});
app.get("*", (req,res)=>{
    res.render("404error",{
      errorMassage: 'Opps Page not found' 
    })
})

app.listen(port, () => {
  console.log(`The port is listing ${port}`);
});

// if some error regarding change name
// nodemon src/app.js -e js,hbs type
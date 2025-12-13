const express = require('express');
const path = require('path');
const app = express();
const ejsMate = require('ejs-mate');
const PORT = 3000;

app.engine('ejs', ejsMate);
app.set("view engine","ejs" );
app.set("views",path.join(__dirname,"views"));
app.use(express.static(path.join(__dirname,"/public")));

app.get('/home', (req, res) => {
  res.render('pages/index'); // render full page directly
});

app.get('/skills', (req, res) => {
  res.render('pages/skills');
});
app.get('/projects', (req, res) => {
  res.render('pages/projects');
});
app.get('/aboutMe', (req, res) => {
  res.render('pages/aboutMe');
});

app.get("/resume",(req,res)=>{
  res.render("pages/resume");
})

app.get('/contactMe', (req, res) => {
  res.render('pages/contactMe');
});
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});



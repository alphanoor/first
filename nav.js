const path = require('path');
const express = require('express');
const app = express();

//const hbs = require('hbs');
const port = 3000;
const staticPath = path.join(__dirname, "../express/public");
//console.log(path.join(__dirname, "../express/public"));
app.use(express.static(staticPath));
app.get("/", (req, res) => {
    res.send("enjoy");
})
app.listen(port, () => {
    console.log(`listening to the port at ${port}`);
});
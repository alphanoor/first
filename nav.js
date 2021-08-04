const path = require('path');
const express = require('express');
const app = express();
app.set('view engine', 'pug');
//const hbs = require('hbs');
const port = process.env.PORT || 3000;
const staticPath = path.join(__dirname, "../express/public");
//console.log(path.join(__dirname, "../express/public"));
app.use(express.static(staticPath));
app.get("/", (req, res) => {
    res.send('index');
})
app.listen(port, () => {
    console.log(`listening to the port at ${port}`);
});
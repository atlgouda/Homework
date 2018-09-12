// app.js

//require express package
const express = require('express');
//save an express module as 'app'
const app     = express();
// assigning 3000 as our port
const PORT    =  process.env.PORT || 3000;
var hbs = require('hbs');

app.set("view engine", "hbs");
app.use(express.static(__dirname + '/public'))

//app.js

app.get("/test/:someValue", (req, res, next) => {
    res.render("index.hbs", {
      message: req.params.someValue
    });
  });

app.get('/topping/:type', function(req, res, next) {

    res.render("toppings.hbs", {
        message: req.params.type
    
    })
});

app.get('/order/:amount/:size', function(req, res, next) {

    res.render("order.hbs", {
        message: req.params.amount
    })
    res.render("order.hbs", {
        message2: req.params.size
    })
    
});

app.get('/', (req, res) => {
    res.send('Welcome to Pizza Express!')
})

app.get('/:error', (req, res) => {
    res.render('error.hbs', {
        message: req.params.error
    })
})

app.listen(PORT, function(){
  console.log("==========================")
  console.log(`LISTENING ON PORT ${PORT}`);
  console.log("==========================")
});
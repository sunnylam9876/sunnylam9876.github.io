let express = require('express');
let bodyParser = require('body-parser');
let app = express();

app.use(bodyParser.urlencoded({extended: true}));

app.use('/static', express.static('public'));
app.set('view engine', 'pug');

app.get('/', (req, res) => {
    res.render('index');
});

app.post('/', (req, res) => {
    let age = req.body.age;
    let weight = req.body.weight;
    let height = req.body.height / 100;
    let result = weight / (height * height);
    let bmi = result.toFixed(1);
    res.render('index', {bmi: bmi});
    console.log("BMI: " + bmi);

})


app.listen(3000, () => {
    console.log('The application is running on localhost:3000');
});

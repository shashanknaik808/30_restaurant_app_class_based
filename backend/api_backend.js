const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

const users = [
    { username: 'Shashank', password: 'sak' },
    { username: 'John', password: '12345' }
];

app.post("/login", (req, res) => {
    const { username, password } = req.body;

    const user = users.find(user => user.username === username);

    if (user && user.password === password) {
        res.json({ flag: true, msg: 'Login Success' });
    } else {
        res.json({ flag: false, msg: 'Login Failed' });
    }
});

let foodData = [
    { foodName: 'French Fries', price: 'Rs.250/', category: 'veg' },
    { foodName: 'Tandoori Mushrooms', price: 'Rs.450/', category: 'veg' },
    { foodName: 'Chicken Alabu', price: 'Rs.550/', category: 'non-veg' },
    { foodName: 'Dragon Prawns', price: 'Rs.650/', category: 'non-veg' },
]

let drinkData = [
    { drinkName: 'Virgin Mojito', price: 'Rs.250/', category: 'mocktail' },
    { drinkName: 'Pinacolada', price: 'Rs.350/', category: 'mocktail' },
    { drinkName: 'Sex on the Beach', price: 'Rs.550/', category: 'cocktail' },
    { drinkName: 'Moscow Mule', price: 'Rs.650/', category: 'cocktail' },
]

let data = [foodData, drinkData];
app.get('/data', (req, res) => {
    res.json(data);
});

app.listen(3200, () => {
    console.log("Backend application is running at port 3200");
});

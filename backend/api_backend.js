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

app.listen(3200, () => {
    console.log("Backend application is running at port 3200");
});

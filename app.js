const express = require('express');

const app = express();

app.use((req, res, next) => {
    console.log(req.url, req.method);
    next();
})

app.use(express.urlencoded())

app.get("/", (req, res, next) => {
    res.send(`
        <h1>Welcome to airbnb</h1>
        <a href="add-home">Add home</a>
        `);
    next();
})

app.get("/add-home", (req, res, next) => {
    res.send(`
        <h1>Register your home here</h1>
        <form action="add-home" method="POST">
            <input type="text" name="houseName"
            placeholder="Enter house name" />
            <input type="submit" />
        </form>
        `);
})

app.post("/add-home", (req, res, next) => {
    console.log(req.body);
    res.send(`
        <h1>Home registered successfully</h1>
        <a href="/">Go to home</a>
        `);
})

app.listen(3000, () => {
    console.log(`Server listening on http://localhost:3000`)
})
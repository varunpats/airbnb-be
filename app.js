const express = require('express');

const userRouter = require('./routes/userRouter');
const hostRouter = require('./routes/hostRouter');

const app = express();

app.use((req, res, next) => {
    console.log(req.url, req.method);
    next();
})

app.use(express.urlencoded());
app.use(userRouter);
app.use("/host", hostRouter);

app.use((req, res, next) => {
    res.status(404).send("<h1>Page not found</h1>")
})

app.listen(3000, () => {
    console.log(`Server listening on http://localhost:3000`)
})
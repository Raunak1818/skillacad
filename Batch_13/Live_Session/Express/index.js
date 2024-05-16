const express = require('express');
const app = express();
const path=require('path');


app.use('/indexfile',express.static(path.join(__dirname,'public')))
app.use('/demofile',express.static(path.join(__dirname,'public/demofile.html')))
app.get('/', (req, res) => {
    res.send('<h1>Hello from home page</h1>')
})

app.get('/about', (req, res) => {
    res.send('<h1>Hello from about page</h1>')
})


app.get('/contact', (req, res) => {
    res.send('<h1>Hello from contact page</h1>')
})

app.get('*', (req, res) => {
    res.send('<h2>error page</h2>')
})



app.listen(3200, () => {
    console.log('server is listening');
})
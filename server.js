// import express
import express from 'express'
import { Students } from './data/attendance.js'

// initialize express
const app = express()

// configure app
app.set('view engine', 'ejs')

//mount middleware

//mount routes
app.get('/', function (req, res){
    res.render('home')
})

app.get('/attendance166', function(req, res){
    res.render('attendance',{
        Students: Students
    })
})

app.get('/home', function(req, res) {
  res.render('home')
})


// tell app to listen to port 3000
app.listen(3000, function(){
    console.log('Listening on port 3000')
})
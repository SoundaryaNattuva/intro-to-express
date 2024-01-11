// import express
import express from 'express'
import { students, petsavailable } from './data/attendance.js'

// initialize express
const app = express()

// configure app
app.set('view engine', 'ejs')

//mount middleware

//mount routes
app.get('/', function (req, res){
    res.render('home')
})

app.get('/', function (req, res){
    res.redirect('/home')
})
// Jurgen suggested doing the above instead of the below. 
app.get('/home', function(req, res) {
    res.render('home')
  })

app.get('/attendance166', function(req, res){
    res.render('attendance/waffles/index',{
        persons: students
    })
})

//

app.get('/cats', function(req,res){
    res.render('cats/index', {
        pets : petsavailable
    })
})

app.get('/cats/adoption', function(req, res){
    res.render('cats/adoption')
})

app.get('/dogs', function(req,res){
    res.render('dogs/index')
})

app.get('/dogs/adoption', function(req, res){
    res.render('dogs/adoption')
})


// tell app to listen to port 3000
app.listen(3000, function(){
    console.log('Listening on port 3000')
})
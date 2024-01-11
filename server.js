// import express
import express from 'express'
import { catsavailable, dogsavailable } from './data/adoption.js'

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
//

app.get('/cats', function(req,res){
    res.render('cats/index')
})

app.get('/cats/adoption', function(req, res){
    res.render('cats/adoption', {
        catsavailable : catsavailable
    })
})

app.get('/cats/create', function(req, res){
    res.render('cats/create')
})

// Dogs
app.get('/dogs', function(req,res){
    res.render('dogs/index')
})

app.get('/dogs/adoption', function(req, res){
    res.render('dogs/adoption', {
        dogsavailable : dogsavailable
    })
})

app.get('/dogs/create', function(req, res){
    res.render('dogs/create')
})

// tell app to listen to port 3000
app.listen(3000, function(){
    console.log('Listening on port 3000')
})
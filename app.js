const express = require('express')
const app = express();
const user = require('./routes/user')


const engine = require('ejs-locals')
app.engine('ejs', engine)
app.set('views', './views')
app.set('view engine', 'ejs')
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/user', user)

// 增加靜態檔案的路徑
app.use(express.static('public'))
app.get('/', function (reqest, response) {
  response.render('index', {
    title: 'layout',
    boss: '<h2>boss</h2>',
    show: true,
    course: ['html', 'js', 'bs']},)
})
app.get('/user', function (reqest, response) {
  response.render('user',{title: 'layout2'})
  
})

// app.get('/user/edit-profile', function (reqest, response) {
//   response.send('profile')
// })
// app.get('/user/photo', function (reqest, response) {
//   response.send('photo')
// })

// 這邊假設是後端
app.post('/searchList', function(req, res) {
  console.log(req.body)
  res.redirect('/')
})
app.post('/searchAJAX', function(req, res) {
  // 前端送過來的資料
  console.log(req.body)
  // 這是後面回傳給前端
  res.send({
    title:'123',
    name:'danny'
  })
  res.redirect('/')
  
})

module.exports = app;


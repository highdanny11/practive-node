const express = require('express')
// 它可以把 user 路由的資訊先寫入
const router = express.Router();


router.get('/edit-profile', function (reqest, response) {
  response.send('profile')
})
router.get('/photo', function (reqest, response) {
  response.send('photo')
})

module.exports = router;
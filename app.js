var express = require('express')
var path = require('path')

var app = new express()
app.use(express.static(path.resolve(__dirname, 'src/.vuepress/dist')))

app.listen(80, function () {
  console.log('app listening at http://localhost:80')
})

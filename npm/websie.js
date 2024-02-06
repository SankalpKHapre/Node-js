const http = require('http')

const port = process.env.PORT||3000 

const server = http.createServer((req,res)=>{
  res.statusCode =200
  if (req.url=='/') {
    res.end('<h1>Thisis it</h1>')
  }
  else if (req.url == '/about' ) {
    res.end('<p>About of site</p>')
  }
  else{
    res.end("<p>Not Found </p>")
  }
  res.setHeader('Content-Type','text/html')
 
})

server.listen(port ,()=>{
  
  console.log(`server is listening on port ${port}`)

})
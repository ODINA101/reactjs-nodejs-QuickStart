var express = require("express")
var app = express();
var http = require("http")


app.use(express.static("./build/static"))

app.get('/',(req,res) => {
    res.sendFile(__dirname + "/index.html")
})

app.get("/api",(req,res)=> res.json({test:"test"}))

http.createServer(app).listen(3000,(err) => {

    if(err) {
        console.log(err)
    }else{
        console.log('server is running on 3000')
    }

})




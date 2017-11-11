var express = require('express')
var app = express()

app.set('port', (process.env.PORT || 5000))
app.use(express.static(__dirname + '/public'))

const knex =  require('knex')({
    client: 'mysql',
    connection: {
      host     : 'sql36.main-hosting.eu',
      user     : 'u709419413_qlue',
      password : 'gerald_samosir',
      database : 'u709419413_qlue'
    }
});

const ModelUsers = new ( 
    class _ModelUsers  {

      getall(req,res){
        return knex("user")
      }

    }
)


const ControllerUser = new ( 
  class _ControllerUser {

    async getall(req,res){
        let User =  await ModelUsers.getall()
        if(User !=""){
          res.status(200)
          res.json({
            respond :"success",
            result : User
          })
        }
    }

  }
)




app.get('/', function(request, response) {
  response.send('Hello World!')
})

app.get("/test",(req,res)=>{
    res.json({
      message: "ok"
    })
})

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
})

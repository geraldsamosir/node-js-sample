const express = require('express')
const app = express()

app.set('port', (process.env.PORT || 5000))

const knex =  require('knex')({
    client: 'mysql',
    connection: {
      host     : 'sql36.main-hosting.eu',
      user     : 'u709419413_qlue',
      password : 'gerald_samosir',
      database : 'u709419413_qlue'
    }
});

const ModelUsers =   {

      getall:function(req,res){
        return knex("user")
      }

  }



const ControllerUser = {
  
     getall: function(req,res){
        ModelUsers.getall()
        .then((result)=>{
            res.status(200)
            res.json({
              respond :"success",
              result : result
            })
        })

    }

  }




app.get('/', function(request, response) {
  response.send('Qlue Test  by: gerald halomoan samosir')
})

app.get("/listUser",ControllerUser.getall)

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
})

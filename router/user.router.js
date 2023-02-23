const { Router } = require("express")

const route = Router();

route.get("/users" , (req , res) =>{
   
     res.send("Esto es un Get a users desde mi servidor")
});

route.post("/users" ,(req , res) =>{
     const body = req.body
     res.json(body);
   
})

module.exports= route;
const express = require("express")
const morgan = require("morgan");
const exampleUsers = require("./router/user.router")

const app = express();

app.use(morgan("tiny"));
app.use(express.json());
app.use(exampleUsers);

 app.use("/users", (req , res) =>{
      console.log(req.body)
      res.send("Body")
})

app.listen(8001 , () =>{
    console.log("Servidor Corriendo")
});
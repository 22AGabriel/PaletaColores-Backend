import express from "express"

const app = express();
app.set("port", process.env.PORT || 4003)

app.listen(app.get("port"), ()=>{
    console.log("estoy en el puerto " + app.get("port"))
})

console.log("Paleta de colores")
const express = require("express");
const app = express();
const data = require("./data.json");
app.use(express.json());

//GET Recebe os dados do resource
app.get("/clients", function(req, res){
    res.json(data);
});
//GET Recebe os dados do resource
app.get("/clients/:id", function(req, res){
    const { id } = req.params;
    const client = data.find(cli => cli.id == id);

    if(!client) return res.status(204).json();

    res.json(client);
});
//POST Envia informações para ser processadas em um cliente para um resource
app.post("/clients", function(req, res){
    const { name, email } = req.body;

    //lógica de salvar

    res.json ({ name, email });

});
//PUT Atualiza dados do resrouce
app.put("/clients/:id", function(req, res){
    const { id } = req.params;
    const client = data.find(cli => cli.id == id);

    if(!client) return res.status(204).json();

    const { name } = req.body;

    client.name = name;

    res.json(client);

});
//DELETE Deleta um resource
app.delete("/clients/:id", function(req, res){
    const { id } = req.params;
    const clientsFiltered = data.filter(client => client.id != id);

    res.json(clientsFiltered)

});
//Indica qual a porta vai se usada
app.listen(process.env.PORT || 3000, function(){
    console.log("Server is runing");
});
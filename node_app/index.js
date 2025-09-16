const express = require("express");
const mysql = require("mysql2/promise");

const app = express();
const PORT = 3001;

// Configuração do MySQL (igual ao docker-compose)
const dbConfig = {
  host: "mysql",       // nome do serviço no docker-compose
  user: "appuser",
  password: "apppass",
  database: "appdb"
};

app.get("/api/v1/cliente",async (req, res) => {
  //res.json({ message: "Hello World!" });
  try{
    const connection = await mysql.createConnection(dbConfig);
    const [rows] = await connection.execute("SELECT * FROM clientes");
    await connection.end();
    res.json(rows);
  } catch(err){
    res.status(500).json({error:err.message});
  }
});

app.get("/api/v1/cliente/:id", async (req, res) => {
  try {
    const cliente = req.params.id;
    const connection = await mysql.createConnection(dbconfig);
    const [rows] = await connection.execute("SELECT * FROM clientes where id = ?",[cliente]);
    await connection.destroy();
    res.json(rows); 
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.post("/api/v1/cliente/",async(req,res)=>{

  try{
    const cliente = req.body;

    if(cliente.email == null || cliente.nome == null || cliente.celular == null){
      res.statusCode(500).json({error:"Faltou algum parametro"})
    } 
    const connection = await mysql.createConnection(dbConfig);
    const [result] = await connection.execute("insert into clientes(email,telefone,nome) values(?,?,?",[cliente.e]);
    await connection.end();

    if(result.affectedRows > 0){
      res.json({
        message:"Cliente inserido com sucesso!",
        id:result.insertId
      });
    } else{
      res.statusCode(500).json({error:"Falha ao inserir cliente."});
    }
  } catch(err){
    res.status(500).json({error:err.message});
  }
});

app.delete("/api/v1/cliente/:id",async(req,res)=>{
    try{
      const cliente = req.params.id;

      const connection = await mysql.createConnection(dbconfig);
      const [rows] = await connection.execute("delete from clientes where id = ?",[cliente]);
      await connection.end();
      res.json(rows);
    } catch (err){
      res.status(500).json({error:err.message});
    }

});

app.listen(PORT, () => {
  console.log(`🚀 Servidor Node rodando na porta ${PORT}`);
});

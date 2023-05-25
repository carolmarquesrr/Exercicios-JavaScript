const express = require("express");
const app = express();
const PORT = process.env.PORT ?? 3060;

app.use(express.json());

app.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}`));

const names = ["hugo", "andrezza", "cláudio", "tomás"];
const apelidos = ["raposo", "cunha", "lima", "costa"]

app.get("/api/generator", (req, res) => {
  return res.status(200).json({names, apelidos});
});

app.post("/api/generator", (req, res) => {
  const { name, apelido } = req.body;

  if(typeof name === 'string'){
    names.push(name)
    res.status(200).json({names, apelidos})
  }
  
  if(typeof apelido === 'string'){
    apelidos.push(apelido)
    res.status(200).json({names, apelidos})
  }else{
    return res.status(404).json("Inválido.")
  }

  return res.status(200).json({names, apelidos});
});

app.patch("/api/generator", (req, res) => {
  const randomName = Math.floor(Math.random() * names.length)
  res.status(200).json(names[randomName])
}); 


//version 5 mongo
const express = require('express');
const app = express();

const equipes = require('./equipes.json');

app.use(express.json());


//affiche le titre json
app.get('/equipes',(req,res) => {
    res.send("Liste des Equipes")
}) 

//affiche la liste des equipes json
app.get('/equipes',(req,res) => {
    res.status(200).json(equipes)
}) 

//affiche la liste des equipes AfficheEquipeId
app.get('/equipes/:id',(req,res) => {
    const id = parseInt(req.params.id)
    const equipe = equipes.find(equipe => equipe.id === id)
    res.status(200).json(equipe)
})
//utiliser middleware
app.use(express.json())
//ajouter equipe AddEquipe (post)
app.post('/equipes',(req,res) =>{
    equipes.push(req.body)
    res.status(200).json(equipes)
})
 //supprimer equipe DeleteEquipe 
app.delete('/equipes/:id',(req,res) =>{
    const id = parseInt(req.params.id)
    let equipe = equipes.find(equipe => equipe.id === id)
    equipes.splice(equipes.indexOf(equipe),1)
    res.status(200).json(equipes)
}) 

//supprimer equipe DeleteEquipe
app.delete('/equipes/:id',(req,res) =>{
    const id = parseInt(req.params.id)
    let position = equipes.findIndex(equipe => equipe.id === id)
    if(position != -1)
      equipes.splice(position,1)
    res.status(200).json(equipes)
})

//modifier equipe 
app.put('/equipes/:id',(req,res) =>{
    const id = parseInt(req.params.id)
    let equipe = equipes.find(equipe => equipe.id === id)
    equipe.name = req.body.name,
    equipe.country = req.body.country,
    res.status(200).json(equipe)
})

app.listen(82, () => {
    console.log('REST API via Express');
});

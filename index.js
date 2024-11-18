const express = require('express')
const app = express()
const port = 3000

let items = [];
  
  let nextId = 1
  app.use(express.json());

app.post('/addItem', (req,res) => {
  const {name,age} = req.body
  const newItem = {
    id : nextId++,
    name,
    age
  }

  items.push(newItem)

  res.status(201).send(newItem)
})

app.get('/addItem', (req,res) => {
  res.status(201).send(items)
})

app.get('/addItem/:id', (req,res) => {

 const foundItem =  items.find( item=>{
    return item.id === parseInt(req.params.id) 
  })
  foundItem ?
  res.status(200).send(foundItem) :
  res.status(404).send("item not found babes")
})

app.put('/addItem/:id', (req,res) => {

  const foundIndex =  items.findIndex( item=>{
     return item.id === parseInt(req.params.id) 
   })

   if(foundIndex != -1) {
     const {name,age} = req.body;
     items[foundIndex].name = name
     items[foundIndex].age = age
     res.status(200).send(items)
   }
   else {

    res.status(404).send("item not found babes")
   }
   
 })

 app.delete('/addItem/:id', (req,res) => {

  const foundIndex =  items.findIndex( item=>{
     return item.id === parseInt(req.params.id) 
   })

   if(foundIndex != -1) {
    items.splice(foundIndex,1)
    res.status(200).send(items)
   }
   else {
    res.status(404).send("item not found babes")
   }
   
 })
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
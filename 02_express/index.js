import express from 'express'

const app = express()

const port = 3000
app.use(express.json())
app.get("/",(req,res) => {
    res.send("Hi from hitesh");
})

let teaData = []
let nextId = 1 
app.post("/teas",(req, res) => {
    const {name , price} = req.body
    const newTea = {id:nextId++,name,price}
    teaData.push(newTea)
    res.status(201).send(newTea)
})

app.get("/teas",(req, res) => {
    res.status(200).send(teaData)
})


// get a tea with id
app.get("/teas/:id",(res, req) => {
    const tea = teaData.find(t => t.id === parseInt(req.params.id))
    if(!tea){
        return res.status(404).send('Tea not found')
    } 
    res.status(200).send(tea) 
})

// update tea
app.put('/teas/:id',(req, res) => {
    const tea = teaData.find(t => t.id === parseInt(req.params.id))
    if(!tea){
        return res.status(404).send('Tea not found')
    }

    const {name, price} = req.body
    tea.name = name
    tea.price = price
    res.status(200).send(tea)
})

// delete 

app.delete('/teas/:id', (req, res) =>{
    const index = teaData.findIndex(t => t.id === parseInt(req.params.id))

    if (index === -1){
        return res.status(404).send('Tea not found')
    }
    teaData.splice(index, 1)
    return res.status(204).send('deleted')
})



app.get("/ice-tea",(req,res) => {
    // console.log("What ice tea would you prefere?");
    res.send("Hi from hitesh");
})



app.get("/twitter",(req,res) => {
    res.send("hiteshdotcom")
})
app.listen(port,() => {
    console.log(`Server is running on port ${port}`)
})
const express = require ('express')
const cors = require('cors')

const app = express();
const PORT = 500;
app.use(cors());
app.use(express.json());

const users = [
    {id :  1 , name: "Aditya" , age : 25},
    {id : 2 , name : 'Ridham', age :20}
]

app.get('/users', (req,res) => {
    res.json(users)
})

app.post('/users',(req,res) => {
    const newUser = {
        id : Date.now(),
        name : req.body.name,
        age : req.body.age
    }

    users.push(newUser)
    res.json(newUser)
})

app.put('/users/:id', (req,res) => {
    users = users.map((user) => {
        (user.id == req.params.id ? {id: user.id , name:req.body.name , age :req.body.age} : user)
    })


})


app.delete('/users/:id', (req,res) =>{
    users = users.filter((user) => {
        user.id != req.params.id
    })
})

app.listen(() => {
    console.log(`Serverr is running${PORT}`);
})

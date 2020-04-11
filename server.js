const app = require('express')()

app.get('/',(req,res)=>{
    res.send('Welcome to our Site')
})

app.get('/hi',(req,res)=>{
    res.send('hello Welcome Back')
})

let PORT = process.env.PORT||4444

app.listen(PORT,()=>{
    console.log('Server Started '+PORT)
})
const app = require('express')()

app.get('/',(req,res)=>{
    res.send('Welcome to our Site')
})


let PORT = process.env.PORT||4444

app.listen(PORT,()=>{
    console.log('Server Started '+PORT)
})
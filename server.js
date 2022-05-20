const express=require('express');
const app=express();
const port=3000;

app.get('/', function(request, response){
    response.send('Welcome to the Pokemon App!');
});








app.listen(port, ()=>{
    console.log(`Server started on port ${port}...`);
});
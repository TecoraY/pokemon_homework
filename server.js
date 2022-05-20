const express=require('express');
const app=express();
const port=3000;
const pokemon=require('./models/pokemon');
app.get('/', function(request, response){
    response.send('Welcome to the Pokemon App!');
});
app.get('/pokemon', function (request,response){
    response.send(pokemon);
})







app.listen(port, ()=>{
    console.log(`Server started on port ${port}...`);
});
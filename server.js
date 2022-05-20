const express=require('express');
const app=express();
const port=3000;
const pokemon=require('./models/pokemon');

app.set('view engine', 'jsx');


  
app.engine('jsx', require('express-react-views').createEngine());


app.get('/', function(request, response){
    response.send('Welcome to the Pokemon App!');
});
app.get('/pokemon', function (request,response){
    response.render('Index', {pokemon} );
})
app.get('/pokemon/:id', function (request, response){
    response.send(request.params.id);
})






app.listen(port, ()=>{
    console.log(`Server started on port ${port}...`);
});
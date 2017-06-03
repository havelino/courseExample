var express=require('express');

var app=express();

app.get('/',function(req,res){
  res.send('Hola a todos en el curso');
});

app.listen(3000,function(){
  console.log('desplegando my web con express');
});

# Barbeari_Ze
Site Desenvolvedor Front-End






connection.connect(function(err) {
    if (err) {
      console.error('error connecting: ' + err.stack);
      return;
    }
   
    console.log('connected as id ' + connection.threadId);
  });

  connection.query('SELECT * FROM users', function(err, rows, fields){
    if(!err){
        console.log('Resultado: ', rows);
    }else{
        console.log('Erro ao realizar a consulta');
    }
  });

app.get("/", function(req, res){
    res.send("GerenciadorBarbearia");

});

app.get("/barbearia-empresa", function(req, res){
    res.sendFile(__dirname + "/src/index.html");


 
});

app.get("/formulario-cliente", function(req, res){
    res.sendFile(__dirname + "/src/formulario.html");
  


});


app.listen(8080);
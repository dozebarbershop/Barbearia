const mysql = require('mysql');

const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'barbearia',
  password : '123456',
  database : 'barbearia'
});



connection.connect(function(err){
    if(err) console.error('Erro ao realizar a conexao COM BD:'
     + err.stack); return;
});

connection.query("INSERT INTO users(nome, horario, email) VALUES('carlos' , '19:00', 'carlao@gmail.com')",
function(err, result){
    if(!err){
        console.log('Usuario cadastrado com sucesso');
    }else{
        console.log('Erro ao cadastrar');
    }
});
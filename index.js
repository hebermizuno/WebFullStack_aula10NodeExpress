const express = require("express"); //esse express é um método, por isso é necessário executá-lo.
const bodyParser = require("body-parser");

const server = express(); //pela convenção utiliza-se a palavra app ou server
const jsonParser = bodyParser.json();

const usuarios = [{id:1, nome:"Diego", sobrenome:"Campos"},
                  {id:2, nome:"Coragem", sobrenome:"Covarde"},

                ];

//GET SIMPLES: equivalente a leitura: como se o usuário estivesse fazendo apenas uma consulta ao servidor.
server.get('/usuarios', (req,res) =>{
    res.send(usuarios);
})

//exemplo de baixo é mais limpo
//GET com pesquisa específica (':' avisa para o servidor que o que vai chegar na frente da barra é um parâmetro)
server.get('/getsimples/:index', (req, res) => {    //se tirar o index e deixar só o dois pontos dá erro
    //params capturar um parâmetro da rota. No exemplo abaixo ele é desestruturado para pegar o número passado pelo usuário
    const{index}= req.params;
    console.log(req.params); //apenas para visualizar que isso retorna um objeto com chave "index" e valor "1" 
    const aux = usuarios[index];    
    res.send(aux); //send deve ser colocado no final. Se houver 2 send, só o primeiro retorna .    
})


//GET COM PARÂMETRO
//reconstrói o GET acima, mas com objetivo de pesquisar no objeto o id digitado pelo usuário (no anterior apenas pegou o índice/posição no array):
// Executar o código a seguir no browser ou no postman como GET: 'http://localhost:3000/1'
//':' indica que é um parâmetro e não uma rota
server.get('/usuarios/:id', (req, res) =>{
    const{id} = req.params; //tem que ter o mesmo nome que o da rota (id)
    const aux = usuarios.find(usuario => usuario.id==id);
    res.send(aux);
})

//POST - criar rota para adicionar novo usuário
// npm i body-parser
//obs: pode haver mais de um verbo na mesma rota (isto é, get e post por exemplo)
//antes havia a rota e a função de callback, agora é incluída um middleware (jsonParser - meio de campo), na qual diz para tratar o que chegar como JSON e deixar disponível na response.
server.post('/usuarios', jsonParser, (req, res) =>{
    console.log(req.body); //quando vem pela rota usa-se o params, mas agora vem do corpo da requisição, então usa o body.
    newUser = req.body;
    usuarios.push(newUser);
    res.send(usuarios);
})
// >Executar pelo POSTMAN: POST, escolher body, row ( e JSON como formato)

// Inserir no body para execução do post:
// {"id":"3",
// "nome": "Seilá",
// "sobrenome":"NaoTem"}

server.delete('/usuarios/:index'/*, jsonParser*/, (req, res) =>{ //professor fez pelo index, mas poderia fazer pelo body
    const index = req.params;
    console.log(index);
    usuarios.splice(index,1); //(a,b), faz um corte a partir da posição a, na quantidade b.
    res.send(usuarios);
})

//PUT - update
// Ficou como lição de casa: receber id e body e substituir a posição id pelo body passado
// dica: filter e find para achar usuário e para acessar/alterar objeto, usar a dot notation
server.put('/usuarios/:index', jsonParser, (req, res) =>{ 
    
    //carrega parâmetro e body
    const {index} = req.params;
    const updateUser = req.body;

    //pesquisa no array usuário qual objeto possui o id apontado pelo parâmetro index.
    selectUser=usuarios.find(usuario => (usuario.id==index)); //find retorna o primeiro elemento que atende a condição. Pelo que entendi não faz uma cópia, apenas referência a posição na memória, de tal forma que se alterar a variável que recebeu o elemento, estará alterando o próprio array original.
    
    // console.log(selectUser);

    //altera o objeto apontado pelo index (url)
    selectUser.id = updateUser.id;
    selectUser.nome = updateUser.nome;
    selectUser.sobrenome = updateUser.sobrenome;
    
    res.send(usuarios);
})

//para executar o put:
// preencher rota:
// localhost:3000/usuarios/1
// preencher body:
// // {"id":"99",
// // "nome": "New",
// // "sobrenome":"Name"}

console.log("o servidor está rodando")

//Deixa disponível em uma porta local do computador, de número 3000, a API que está sendo construída aqui
//Para desenv. próprio custam-se usar 3000 ou 8000 por exemplo.
server.listen(3000);
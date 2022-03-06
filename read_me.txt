O que vamos ver hoje:
-Criação de repositório github
-Início do projeto Express
-Trabalhando com métodos HTTP.
-Testes com Insomnia/Postman


//relembrando:

//iniciar github:
criar repositório remoto (pelo browser)
>git init
>git config user.email "abc@hotmail.com"
>git config user.name "Heber"

>git remote add origin "<link do diretório remoto criado>"
>git remote -v  (visualizar se foi assinalado)

//criar gitignore (para não determinada lista de arquivos para o servidor)
dentro do vscode, criar arquivo com nome '.gitignore'
*Incluir "node_modules" no gitignore, pois subir ela não é uma boa prática (pasta com os packages instalados se não me engano).

//iniciando node:
npm init -y (cria a package.json)

>npm i express
>npm i nodemon (fica rodando arquivo no terminal e escutando se há alguma alteração, em caso positivo aplica atualizações automaticamente).

*criou arquivo index.js

*preencheu package.json scripts com "start : nodemon index.js"
Obs: A partir de agora, se rodar npm start, irá rodar esse comando
>npm start  (se quiser pode dar um console.log dentro de index.js apenas para visualizar que está funcionando)
Obs: vantagem nodemon: não precisa ficar reiniciando o servidor toda hora.

*Começou a alterar o arquivo index.js

> Professor fez um GET Simples
> Get com parâmetro

01h30 do vídeo
>Ele deu um commit pelo lado esquerdo (no dele aparece uma aba 'Source Control', ele digitou first commit, clicou e depois clicando deu um push)
(Não sei se é uma extensão ou o que é).

01h37m36s
retorno do intervalo


*POST (Create) para adicionar informação. 
Necessário instalar:
>npm i body-parser
*aplicar require
*executar função bodyParser.json() e atribuir a uma var jsonParser
*passar como segundo parâmetro do post o jsonParser
*informação é acessada por um req.body

Obs: duas formas de enviar informações do lado do usuário (req.params, req.body)

*Para executar, deve ir no postman, escolher post, raw, formato json, escrever um json e executar



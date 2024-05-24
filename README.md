# rickAndMortyApi

#Participantes: Felipe Defendi Prado, Felipe Machado e Lucas Sigolo

#Passo a passo para rodar o projeto:

#1 - npm install

#2 - npm run start:dev

#3 - Faça o registro do user: curl -X POST http://localhost:3000/auth/register -H "Content-Type: application/json" -d '{"username": "username", "password": "password"}'

#4 - Faça o login: curl -X POST http://localhost:3000/auth/login -H "Content-Type: application/json" -d '{"username": "username", "password": "password"}'

#5 - Você irá ter acesso a um token JWT, use-o para salvar um personagem: curl -X POST http://localhost:3000/rick-and-morty/character/1 -H "Authorization: Bearer seu_token_jwt_aqui"

#6 - Para listar os personagens: curl -X GET http://localhost:3000/rick-and-morty/characters -H "Authorization: Bearer seu_token_jwt_aqui"

#7 - Para listar Logs do banco: curl -X GET http://localhost:3000/logs -H "Authorization: Bearer seu_token_jwt_aqui"






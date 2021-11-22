# Descomplica Desafio FullStack
## Descrição
Projeto desenvolvido para a etapa do teste técnico para vaga de desenvolvedor fullstack do Descomplica.
Tecnologias utilizadas
- React
- Nginx
- Node
- Express
- GraphQL
- Postgres
- Docker
## Instalação
### Requerimentos
- Docker
- Docker-compose

1 - Clonar o repositório

```
git clone git@github.com:Jordhan-Carvalho/descomplica-fullstack.git
```

2 - Iniciar os containers com docker-compose a partir da raiz do projeto

```
docker-compose up
```



## Uso
Pode-se iniciar o projeto em modo de desenvolvimento ou produção, bastando mudar o Dockerfile no docker-compose.yml.

![Docker dev](images/devprod.png?raw=true "docker dev")

Para ambiente de desenvolvimento usar utilizar o Dockerfile.dev no Client.

Para ambiente de produção usar o Dockerfile no Client.


Ele vai ser exposto no port 3050.

Os arquivos .env foram deixados de proposito para facilitar o inicio do projeto.

## Organização dos containers
Temos um docker-compose responsável por iniciar sequencialmente de quatro containers: o banco de dados, servidor, cliente e por último Nginx.

Todos os ports usados internamente pelo docker compose estão no diagrama abaixo.

Alguns ports foram expostos como o 9000 para o banco (no intuito de facilitar o uso de ferramentas como o pgadmin e dbeaver) e 3050 para aplicação.

![Diagram compose](images/compose.jpg?raw=true "compose")


## Frontend
Frontend construído com React e usando styled-components, foi usado também o Apollo Client para os requests assim como para o cache.

Foram criados dois Dockerfiles, um para produção outro para desenvolvimento, o de produção usa o nginx pra distribuir os arquivos gerados pela build do React.
## Backend
Backend em node com um endpoint para o graphql e um endpoint test para a integração com o express, além disso foi utilizado o prisma como ORM e o cache gerenciado atráves do apollo-server.

Temos um script em bash (startup.sh) para resetar o estado do banco e fazer a seed com os dados iniciais toda vez que se inicia o projeto.

Express test enpoint

/api

GraphQL enpoint

/api/graphql


## Banco de Dados
Banco de dados postgres gerado por uma imagem no Docker, exposto no port 9000.
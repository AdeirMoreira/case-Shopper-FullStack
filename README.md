<!-- <p>
    <a href="#sobre">Sobre<a/>
    <a href="#tecnologia">Tecnologia<a/>
<p/>

<h1 id="sobre">Case Full-Stack Shopper<h1/> -->

# Case Full-Stack Shopper 🛍

Um projeto Full-Stack desenvolvido para o processo seletivo da Shopper. No Front-End, foi desenvolvido um site de E-comercie em React baseado do site oficial da Shopper, no qual é apresentada uma lista de produtos que podem ser adicionados ao carrinho. Ao finalizar o pedido, os dados da compra são enviados ao Back-End. No Back-End, foi desenvolvida uma API em NodeJS que verifica os dados e os armazena em um banco de dados MySQL. O Docker foi usado para rodar o Front, Back e o Banco de dados em contêineres.

## Tecnologias 🛠

- [React](https://pt-br.reactjs.org/)
- [Axios](https://www.npmjs.com/package/axios)
- [Node](https://nodejs.org/en/)
- [Express](https://expressjs.com/pt-br/)
- [typeORM](https://typeorm.io/)
- [supertests](https://www.npmjs.com/package/supertest)
- [MySQL](https://www.mysql.com/)
- [Docker](https://www.docker.com/)

## Requisito atendidos ✔

- ✅ O sistema deve ter um formulário de cadastro de pedidos
- ✅ O usuário deve entrar com Nome do Cliente, Data de Entrega e uma lista de compras
- ✅ A lista de compras é composta por um ou mais produtos e a quantidade solicitada para cada um deles.
- ✅ O usuário pode alterar a quantidade de itens já cadastrados ou excluir um item que ele não queira mais.
- ✅ A cada alteração na lista de compras o sistema deve calcular o valor total do pedido.
- ✅ Todas essas informações devem ser salvas em um banco de dados que você vai modelar.
- ✅ Cada pedido salvo deve debitar a quantidade do produto correspondente de seu estoque.
- ✅ O sistema deve alertar o usuário caso a quantidade solicitada não esteja disponível no estoque.
- ✅ O sistema também deve ter uma função para mostrar o estoque atual exibindo: Nome do produto e a quantidade em estoque.

## Rodando o projeto 🔛

### Pre-Requisitos ❗⚠

- [Docker](https://www.docker.com/) 

Para rodar o projeto o único pre-requsitos é ter o [Docker](https://www.docker.com/) instalado em sua máquina, pois todos os outros recursos necessários são instalados automaticamente nos contêiners quando eles são inciados.
<!-- <h2 id="tecnologia">Tecnologias<h2/> -->

#### 1️⃣ Clonar e abrir
```
git clone https://github.com/AdeirMoreira/case-Shopper-FullStack.git
cd case-Shopper-FullStack/back-end
```

#### 2️⃣ Iniciar os Contêineres
```
docker compose up
```
Após cerca de 1 minuto e meio ou quando aparecer a mensagem ```node-Shopper   | Server is running in http://localhost:3003``` no terminal, os contêineres do App React, da API Node, e do Banco de dados MySQL estarão inicializados.

#### 🟢 [App-React](http://localhost:3000/)

O App-React rodará na porta 3000 e estará disponivel no endereço http://localhost:3000/. 

#### 🟢 [API-Node](http://localhost:3003/)

A API Node, por sua vez, rodará na porta 3003 e seu endereço base é http://localhost:3003/.

### Testes no Back-End 🧪

Para rodar os testes de integração na API, que similam uma requisição real, é preciso iniciar um container com um banco de dados de teste.

Abra um novo terminal para iniciar o container do banco de dados teste.
```
docker compose --profile test up
```
Após o banco de dados de teste estiver inicializado, abra um novo terminal
```
npm run test
```


## 👨‍💻 Desenvolvedor
<table>         
<td><a href="https://github.com/future4code/silveira-Adeir-Maia"><img style="border-radius: 50%;" src="https://avatars.githubusercontent.com/u/98994187?v=4" width="100px;" alt="Imagem profile Adeir Moreira desenvolvedor"/><br /><sub><b>Adeir Moreira</b></sub></a><br />   
</table>



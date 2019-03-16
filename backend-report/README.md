## Nova api-beta backend

Nova api-beta construida sobre o frameworks **"AdonisJS"** garantindo assim uma melhor performance e escabilidade de crescimento.
API já modelada para trabalhar no formato **"MultiTenancy"**

### Configurações iniciais

Antes de realizar o deploy, será preciso renomear o arquivo **".env-examploe"** para **".env"** e informar os dados abaixo:

- Banco de dados

  ```
  DB_CONNECTION=pg
  DB_HOST=IP do servidor
  DB_PORT=5432
  DB_USER=usuário
  DB_PASSWORD=senha
  DB_DATABASE=nome do banco de dados
  ```

- Alterar a porta caso necessite, por padrão o adonis utiliza a porta **"3333"**

  ```
  PORT=3333
  ```

- Criar uma Key, essa key precisa ter letras maiusculas, minisculas e numeros

  ```
  APP_KEY=iWdmWo2VkpTzTbTa9cFKuSRrj4ohcRBA
  ```

### Deploy

Antes de realizar o deploy do AdonisJS, é necessário que instale as bibliotecas, para isso realize o seguinte procedimento abaixo:

  ```js
  yarn install
  ```

Após instalado as depedências, será necessário realizar o seguinte procedimento abaixo com PM2

  ```js
  pm2 --name "api-beta" start server.js
  ```

Pronto! Agora é só ajustar no NGINX os apontamentos e correções necessárias.


## Rotas Disponíveis na api-beta

Abaixo estão as rotas, metódos e descrição


| **rota**               | **metodo** |                                         **descrição** |
| ---------------------- | :--------: | ----------------------------------------------------: |
| /contracts             |    GET     |       Lista todos os contratos disponíveis no sistema |
| /contracts/company/:id |    GET     |    Lista todos os contratos pertecentes a uma empresa |
| /contracts/devices/:id |    GET     | Lista todos os contratos pertecentes a um equipamento |
| /devices/company/:id   |    GET     | Lista todos os equipamentos pertecentes a uma empresa |
| /devices/itens/:id     |    GET     |     Lista todos os itens pertecentes a um equipamento |
| /devices               |    GET     |                           Lista todos os equipamentos |
| /companies             |    GET     |                                  Lista todas empresas |

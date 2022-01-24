## QR CODE AUTH

-- Criar formulario de autorização para leitura de QR Code

## Requisitos Funcionais -RF

-- Criar um interceptador de links que redireciona um qr code para um cliente exigindo senha de acesso
-- Criar ferramenta de postagem dos qr codes com o link a ser salvo no banco de dados e senha.

## Requisitos Admin

-- Postar o link do projeto
-- Gerar QR code

## Requisitos Não Funcionais -RNF

-- Ultizar Mongo Db como banco de dados.
-- Ultilizar Express

## Regras de Negócio. -RN

-- Enviar QR code para uma pagina que direciona para um link
-- Exigir senha para redirecionar para esse link
-- Liberar o link específico para visualização do cliente
-- Exigir autorização por senha para o administrador lançar novos QR Codes
-- Separa cada Grupo de Empresa por uma única senha.

### Tarefas

## Página de login e senha

- [] Criar página de login e senha - sessão de usuário
- [x] Cadastra novo usuário Admin - Não obrigatório
- [] Autenticação de Usuário - Obrigatório

## Rota de Admin

- [x] Criar novo projeto
- [] Atualizar projeto 
- [] Deletar projeto
- [x] Listar projetos cadastrados
- [x] Trazer a url do projeto

## Banco de Dados

- [x] Nome do projeto
- [x] URL do repositório no drive
- [x] Password 
- [x] Id do projeto

## Criar novo projeto

- [x] Nome do projeto
- [x] URL do repositório no drive
- [x] Password 
- [x] Id do projeto
- [] QrCode generate - com link de redirecionamento p/repositório

## Criar novo cliente(empresa)

- [x] Nome da empresa
- [x] Senha global
- [x] Listar Clientes
- [] Atualizar senha 

## Criação de QR Code

- [] Criar uma Url
- [] Passar URL do drive como parametro
- [] Na rota da aplicação dar um redirect para o repositório do projeto no drive

## Interface de usuário

- [] Campo de senha
- [] Salvar automáticamente no input de login a url do repositório
- [] Apos confirmação de senha redirecionar para o repositório
- [] Tratar senha incorreta
 

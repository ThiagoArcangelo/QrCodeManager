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

- [] Criar página de login e senha
- [x] Cadastra usuário Admin
- [x] Criar login e senha
<!-- - [] Atualização de senha -->
- [] Redirecionar para a página Home
- [] Criar a página Home com os campos necessários
<!-- - [] Tornar página home privada -->
- [x] Postar congifurações do projeto no banco de dados
- [] Gerar link ou Qr Code com as informações postadas no banco de dados , para cada projeto
- [] Redirecionar Usuário para a página UserHome após leitura do QR Code
- [] Criar rota de usuário
- [] Criar a página usuário com os campos input e senha
- [] Deixar campo input salvo com a informação da URL a direcionar
- [] Criar validação de senha para redirecionar o usuário
- [] Redirecionar para o repositório após confirmação de senha

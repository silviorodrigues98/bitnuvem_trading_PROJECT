

> **README: Instalando e Configurando o Bot**

**Introdução:**

Este README irá guiá-lo passo a passo na instalação das dependências, configuração das chaves e execução do bot.

**Disclaimer**

*O projeto é não oficial, usado por mim, para automatizar minhas compras de BTC, e foi compartilhado para poder ajudar.
Use por sua própria conta a risco.*
  
**Requisitos:**

 - Node.js v14 ou superior  
 - Git
 - Chaves API configuradas, visite [Api de Negociações | Bitnuvem](https://bitnuvem.com/trade-api) para configurar suas chaves.

**Passo 1: Clonar o Repositório**

Abra seu terminal e navegue até a pasta onde deseja instalar o bot.

Clone o repositório do bot usando o seguinte comando, no seu terminal (cmd ou bash):

git clone https://github.com/silviorodrigues98/bitnuvem_trading_PROJECT

**Passo 2: Instalar as Dependências**

Navegue até a pasta do bot clonado, no seu terminal (cmd ou bash).

Instale as dependências usando o seguinte comando:

    npm install

**Passo 3: Configurar as Chaves**

Insira as seguintes informações no arquivo .env, usando o editor de texto de sua preferência:

    API_KEY="SUA_CHAVE_DE_API"
    API_SECRET="SEU_SEGREDO_DE_API"
    AMOUNT_BRL=QUANTIDADE EM REAIS

**Passo 4: Rodar o bot**

Execute o seguinte comando para iniciar o bot, no seu terminal (cmd ou bash):

    npm run
    
**Passo 5: Analisar o retorno**

O retorno em seu terminal deve ser parecido com esse:

    [
      {
        id: '47918998',
        create: 1713247981,
        mode: 'market',
        type: 'buy',
        status: 'active',
        total: '10'
      }
    ]

Caso o retorno seja diferente, ou seja algum valor numero, favor acessar [Api de Negociações - Retornos | Bitnuvem](https://bitnuvem.com/trade-api/retornos) para verificar o que cada código de erro significa.



****Solução de Problemas:****

Se precisar de ajuda, você pode abrir um problema no repositório do bot.
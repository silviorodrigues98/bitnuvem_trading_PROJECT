// Importe a biblioteca 'axios' para fazer requisições HTTP
const axios = require("axios");

// Defina as informações necessárias
const apiKey = "8374c380a357ff7c1f47ba4f533e7c50"; // Substitua pela sua chave de API
const action = "order_create"; // Ação para criar uma ordem
const amount = 10; // Quantidade de BRL que deseja converter para Bitcoin
const type = "buy"; // Tipo da ordem: 'buy' para compra
const mode = "market"; // Modo da ordem: 'market' para ordem de mercado
const currency = "BRL"; // Moeda da sua conta (BRL)
const url = "https://bitnuvem.com/tapi/" + action;

// Parâmetros da requisição
const params = {
  api_key: apiKey,
  amount,
  type,
  mode,
  currency,
};

// Faça a requisição POST para criar a ordem de mercado
axios
  .post(url, params)
  .then((response) => {
    console.log("Ordem de mercado criada com sucesso:", response.data);
  })
  .catch((error) => {
    console.error("Erro ao criar a ordem de mercado:", error.message);
  });

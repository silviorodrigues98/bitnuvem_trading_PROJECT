<?php
// Dados da API
$api_key = 'b9362e5ed485d1d42a01c250826245fb';
$api_secret = '9V3HasybE76ncmevWJfCA8NWKEH6fm0k';

// Parâmetros da ordem
$action = 'order_new';
$mode = 'market'; // Modo de ordem: market
$type = 'buy'; // Tipo de ordem: buy (compra)
$amount_brl = 10; // Valor em reais que deseja comprar

// Montagem do corpo da requisição
$request_body = [
    'timestamp' => time(),
    'mode' => $mode,
    'type' => $type,
    'amount' => $amount_brl,
];

// Conversão do corpo da requisição em formato QueryString
$request_body = http_build_query($request_body);

// Cálculo da assinatura
$signature = hash_hmac('sha256', $request_body, $api_secret);

// Parâmetros POST
$api_post = [
    'api_key' => $api_key,
    'request_body' => $request_body,
    'signature' => $signature,
];

// Inicialização da requisição
$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, 'https://bitnuvem.com/tapi/' . $action);
curl_setopt($ch, CURLOPT_POST, true);
curl_setopt($ch, CURLOPT_POSTFIELDS, $api_post);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

// Execução da requisição
$result = curl_exec($ch);

// Exibição do resultado
echo $result;
?>

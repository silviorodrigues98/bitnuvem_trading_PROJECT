const CryptoJS = require("crypto-js");
require("dotenv").config();

// Crate a .env file with the API_KEY and API_SECRET values
const apiKey = process.env.API_KEY;
const apiSecret = process.env.API_SECRET;

const action = "order_new";
const mode = "market";
const type = "buy";
const amountBRL = 10;

const timestamp = Math.floor(Date.now() / 1000);

const body = {
  timestamp,
  mode,
  type,
  total: amountBRL,
};

const queryString = new URLSearchParams(body);

const signature = CryptoJS.HmacSHA256(
  queryString.toString(),
  apiSecret
).toString(); // Using CryptoJS library

const url = "https://bitnuvem.com/tapi/" + action;

const fetchData = async () => {
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({
        api_key: apiKey,
        request_body: queryString.toString(),
        signature: signature,
      }).toString(),
    });

    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
};

fetchData();

const CryptoJS = require("crypto-js");

const apiKey = "d23f69d156b9034c7318fd66ddc7f26d"; // Replace with your Bitnuvem API key
const apiSecret = "d6rLI6KxS6g2d2LfXXCUT7nM70VAP3Si"; // Replace with your Bitnuvem API secret

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

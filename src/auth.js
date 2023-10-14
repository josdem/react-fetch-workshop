import { Buffer } from "buffer";

const client_id = "client";
const client_secret = "secret";

const url = "http://auth-server:9000/oauth2/token";

export const getToken = () => 
  fetch(url, {
    method: "POST",
    headers: {
      "Authorization": "Basic " + (Buffer.from(client_id + ":" + client_secret).toString("base64")),
      "Content-Type": "application/x-www-form-urlencoded"
    },
    body: "grant_type=client_credentials&scope=write"
  }).then((response) => response.json());

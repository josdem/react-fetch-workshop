/*
curl -X POST https://auth.josdem.io/oauth2/token \
  --header "application/x-www-form-urlencoded" \
  --header "Authorization: Basic Y2xpZW50OnNlY3JldA==" \
  --data "grant_type=client_credentials" \
  --data "scope=write"
*/

import { Buffer } from "buffer";

const client_id = "client";
const client_secret = "secret";

const url = "https://auth.josdem.io/oauth2/token";

export const getToken = () => 
  fetch(url, {
    method: "POST",
    headers: {
      "Authorization": "Basic " + (Buffer.from(client_id + ":" + client_secret).toString("base64")),
      "Content-Type": "application/x-www-form-urlencoded"
    },
    body: "grant_type=client_credentials&scope=write"
  }).then((response) => response.json());
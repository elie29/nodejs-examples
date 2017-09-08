const http = require("http");
const https = require('https');
const HttpsProxyAgent = require('https-proxy-agent');
const url = require('url');

const server = http.createServer((req, res) => {

    const logo = 'https://www.sfeir.com/content/themes/sfeir/img/logos/logo-sfeir-noir.svg';
    const options = url.parse(logo);

    // by pass the proxy
    options.agent = new HttpsProxyAgent('http://websurfing1-tin1.esi.adp.com:8080');

    res.setHeader('Content-Type', 'application/xml');

    // pipe ferme la connexion de http
    https.get(options, res2 => res2.pipe(res));
});

server.listen(3000);
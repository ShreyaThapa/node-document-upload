var FormData = require('form-data');
var fs = require('fs');

var Client = require("dwolla-v2").Client;

var dwolla = new Client({
  key: "your-key",
  secret: "your-secret",
  environment: "sandbox", // defaults to 'production'
});

var customerUrl="https://api-sandbox.dwolla.com/customers/833c8912-5923-4b1e-8943-772cb4c10376"

const file = "test-document-upload-fail.png";

var body = new FormData();

body.append("file", fs.createReadStream(file), {
    filename:  file.filename,
    contentType: file.mimetype,
    knownLength: fs.statSync(file).size,
});
body.append("documentType", "license");
dwolla.post(`${customerUrl}/documents`, body);

const AWS = require('aws-sdk');

AWS.config.update({
    accessKeyId: "AKIASFGXGA3HHUMCDDBJ",
    secretAccessKey: "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", 
    region: "sa-east-1"
});

// Instancia um Client
const db = new AWS.DynamoDB.DocumentClient({
    apiVersion: '2012-08-10',
});

module.exports = db;
const AWS = require('aws-sdk');

AWS.config.update({
    accessKeyId: "AKIASFGXGA3HCUKDSZVI",
    secretAccessKey: "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", 
    region: "sa-east-1"
});

// Instancia um Client
const db = new AWS.DynamoDB.DocumentClient({
    apiVersion: '2012-08-10',
});

module.exports = db;
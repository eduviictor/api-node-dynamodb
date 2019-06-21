const AWS = require('aws-sdk');

AWS.config.update({
    accessKeyId: "AKIASFGXGA3HF3JTEGOM",
    secretAccessKey: "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", 
    region: "sa-east-1"
});

// Instancia um Client
const db = new AWS.DynamoDB.DocumentClient({
    apiVersion: '2012-08-10',
});

module.exports = db;
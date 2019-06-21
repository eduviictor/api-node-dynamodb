const AWS = require('aws-sdk');

AWS.config.update({
    accessKeyId: "AKIASFGXGA3HJR2LHSH5",
    secretAccessKey: "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", 
    region: "sa-east-1"
});

// Instancia um Client
const db = new AWS.DynamoDB.DocumentClient({
    apiVersion: '2012-08-10',
});

module.exports = db;
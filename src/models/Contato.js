const AWS = require('aws-sdk');

// Configuração da região (São Paulo no exemplo)
AWS.config.update({
    region: 'sa-east-1',
    accessKeyId: 'AKIASFGXGA3HMNBIJ7TA',
    secretAccessKey: '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'
});

// Instancia um Client
const db = new AWS.DynamoDB.DocumentClient({
    apiVersion: '2012-08-10',
});

module.exports = db;
const uuidv4 = require('uuid/v4'); //Gerar hash da id
const db = require('../models/Contato');

const list = async(req, res) => {
    const params = {
        TableName: 'Contatos'
    };
    await db.scan(params, (err, data) => {
        if (err) {
            res.status(err.statusCode).send(err.message);
            // console.log(err.message);
        } else {
            res.json(data);
        };
    });
};

const insert = async(req, res) => {
    const params = {
        TableName: 'Contatos',
        Item: {
            'id': uuidv4(),
            'nome': req.body.nome,
            'numero': req.body.numero
        }
    };
    await db.put(params, (err, data) => {
        if (err) {
            res.send('Falhou', err);
        } else {
            res.json(data);
        };
    });
};

const remove = async(req, res) => {
    const params = {
        TableName: 'Contatos',
        Key: {
            'id': req.params.id
        }
    };
    await db.delete(params, (err, data) => {
        if (err) {
            res.send('Falhou', err);
        } else {
            res.json(data);
        };
    });
};

const update = async(req, res) => {
    let item = {};
    const params = {
        TableName: 'Contatos',
        Key: {
            'id': req.params.id
        }
    }
    await db.get(params, (err, data) => {
        if (err) {
            res.send('Falhou', err);
        } else {
            item = data.Item;
            const params = {
                TableName: 'Contatos',
                Key: {
                    'id': req.params.id
                },
                ExpressionAttributeValues: {
                    ':n': req.body.nome ? req.body.nome : item.nome,
                    ':p': req.body.numero ? req.body.numero : item.numero
                },
                UpdateExpression: 'set nome=:n, numero=:p',
                ReturnValues: 'UPDATED_NEW'
            };

            db.update(params, (err, data) => {
                if (err) {
                    res.send('Falhou', err);
                } else {
                    res.json(data);
                }
            });
        };
    });
};

const show = async(req, res) => {
    const params = {
        TableName: 'Contatos',
        Key: {
            id: req.params.id
        }
    };
    db.get(params, (err, data) => {
        if (err) {
            res.send('Falhou', err);
        } else {
            res.json(data);
        }
    });
}

module.exports = {
    list,
    insert,
    show,
    remove,
    update
};
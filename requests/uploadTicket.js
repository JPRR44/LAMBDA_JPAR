const AWS = require('aws-sdk');
const documentClient = new AWS.DynamoDB.DocumentClient();
const tableName = 'Tickets'

exports.handler = async (event) => {
    // TODO implement
    if (!event.ticket.id) {
        throw Error('No ID on the data');
    }
    const params = {
        TableName,
        Item: event.ticket,
    };
    const res = await documentClient.put(params).promise();

    if (!res) {
        throw Error(`There was an error inserting ID of ${event.ticket.id} in table ${TableName}`)
    }
};
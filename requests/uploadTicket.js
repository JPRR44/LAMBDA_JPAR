const AWS = require('aws-sdk');
const documentClient = new AWS.DynamoDB.DocumentClient();
const tableName = 'JPAR'

exports.handler = async (event,context,callback) => {
    if (!event.ticket.id) {
        throw Error('No ID on the data');
    }
    const params = {
        TableName: tableName,
        Item: event.ticket,
    };
    try {
        const res = await documentClient.put(params).promise();

        if (!res) {
            throw Error(`There was an error inserting ID of ${event.ticket.id} in table ${tableName}`)
        }
    return {
        "message":"Ticket uploaded succesfully!"
    }
    } catch (error) {
        callback("400-There was an error uploading ticket",error)
        return{}
    }
};
const AWS = require('aws-sdk');
const documentClient = new AWS.DynamoDB.DocumentClient();
const tableName = 'JPAR'

exports.handler = async (event,context,callback) => {
    const params = {
        TableName: tableName
    };
    const data = await documentClient.scan(params).promise();
    const dataFiltered = data.Items.filter(ticket => ticket.email === event.L3email)
    if(!data){
        throw Error(`There was an error fetching the data from ${tableName}`);
    }
    return dataFiltered
};
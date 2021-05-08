const AWS = require('aws-sdk');
const documentClient = new AWS.DynamoDB.DocumentClient();
const tableName = 'JPAR'

exports.handler = async (event,context,callback) => {
    const params = {
        TableName: tableName
    };
    const data = await documentClient.scan(params).promise();

    if(!data){
        throw Error(`There was an error fetching the data from ${TableName}`);
    }
    return data
};
const AWS = require('aws-sdk');
const documentClient = new AWS.DynamoDB.DocumentClient();
const tableName = 'JPAR'

exports.handler = async (event,context,callback) => {
    const params = {
        TableName: tableName
    };
    const data = await documentClient.scan(params).promise();
    const dataFiltered = data.Items.filter(ticket => ticket.id === event.id)
    if(!data){
        throw Error(`There was an error fetching the data from ${tableName}`);
    }
    if(dataFiltered.length > 0){
        return dataFiltered
    }else {
        callback('[400] The provided ticket id does not exist')
        return {}
    }
};
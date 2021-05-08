const AWS = require('aws-sdk');
const documentClient = new AWS.DynamoDB.DocumentClient();
const tableName = 'JPAR'

exports.handler = async (event, context, callback) => {

    let response = {}

    if (event.ticket.assignedDev2 != '') {
        var params = {
            TableName: tableName,
            Item: event.ticket,
            Key: {
                "id": event.ticket.id //primary key and primary key value
            },
            UpdateExpression: "set assignedDev2 = :n",
            ExpressionAttributeValues: {
                ":n": event.ticket.assignedDev2
            },
            ReturnValues: "UPDATED_NEW"
        };

        const data = await documentClient.update(params).promise();
        if (!data) {
            throw Error("There was an error fetching the data from table");
        }
        //add the property 'assignedDev2' to the response object
        response['assignedDev2'] = data.Attributes.assignedDev2
    }
    if (event.ticket.assignedDev3 != '') {
        var params = {
            TableName: tableName,
            Item: event.ticket,
            Key: {
                "id": event.ticket.id //primary key and primary key value
            },
            UpdateExpression: "set assignedDev3 = :n",
            ExpressionAttributeValues: {
                ":n": event.ticket.assignedDev3
            },
            ReturnValues: "UPDATED_NEW"
        };

        const data = await documentClient.update(params).promise();
        if (!data) {
            throw Error("There was an error fetching the data from table");
        }
        //add the property 'assignedDev3' to the response object
        response['assignedDev3'] = data.Attributes.assignedDev3
    }
    if (event.ticket.attachedFiles != '') {
        var params = {
            TableName: tableName,
            Item: event.ticket,
            Key: {
                "id": event.ticket.id //primary key and primary key value
            },
            UpdateExpression: "set attachedFiles = :n",
            ExpressionAttributeValues: {
                ":n": event.ticket.attachedFiles
            },
            ReturnValues: "UPDATED_NEW"
        };

        const data = await documentClient.update(params).promise();
        if (!data) {
            throw Error("There was an error fetching the data from table");
        }
        //add the property 'attachedFiles' to the response object
        response['attachedFiles'] = data.Attributes.attachedFiles
    }
    if (event.ticket.description != '') {
        var params = {
            TableName: tableName,
            Item: event.ticket,
            Key: {
                "id": event.ticket.id //primary key and primary key value
            },
            UpdateExpression: "set description = :n",
            ExpressionAttributeValues: {
                ":n": event.ticket.description
            },
            ReturnValues: "UPDATED_NEW"
        };

        const data = await documentClient.update(params).promise();
        if (!data) {
            throw Error("There was an error fetching the data from table");
        }
        //add the property 'description' to the response object
        response['description'] = data.Attributes.description
    }
    if (event.ticket.email != '') {
        var params = {
            TableName: tableName,
            Item: event.ticket,
            Key: {
                "id": event.ticket.id //primary key and primary key value
            },
            UpdateExpression: "set email = :n",
            ExpressionAttributeValues: {
                ":n": event.ticket.email
            },
            ReturnValues: "UPDATED_NEW"
        };

        const data = await documentClient.update(params).promise();
        if (!data) {
            throw Error("There was an error fetching the data from table");
        }
        //add the property 'email' to the response object
        response['email'] = data.Attributes.email
    }

    return response
};
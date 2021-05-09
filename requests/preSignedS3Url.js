const aws = require('aws-sdk')
const s3 = new aws.S3({
    signatureVersion:'v4'
})

exports.handler = async (event,context) => {
    return await  s3.getSignedUrl('putObject',{
        Bucket: 'stored-codes',
        Key: event.fileName,
        Expires:100
    });
};

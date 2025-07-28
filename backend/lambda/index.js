const AWS = require('aws-sdk');
const dynamodb = new AWS.DynamoDB.DocumentClient();

exports.handler = async (event) => {
    console.log('Lambda function started');
    console.log('Event:', JSON.stringify(event, null, 2));
    
    const headers = {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
        'Content-Type': 'application/json'
    };
    
    // Handle preflight OPTIONS request
    if (event.httpMethod === 'OPTIONS') {
        return {
            statusCode: 200,
            headers: headers,
            body: JSON.stringify({ message: 'CORS preflight successful' })
        };
    }
    
    try {
        // Parse the incoming form data
        console.log('Parsing request body...');
        const data = JSON.parse(event.body);
        const { name, email, subject, message } = data;
        
        console.log('Parsed data:', { name, email, subject, message });
        
        // Validate required fields
        if (!name || !email || !message) {
            console.log('Validation failed: missing required fields');
            return {
                statusCode: 400,
                headers: headers,
                body: JSON.stringify({ 
                    error: 'Missing required fields: name, email, and message are required' 
                })
            };
        }
        
        // Create contact record
        const contactRecord = {
            contactId: Date.now().toString() + '-' + Math.random().toString(36).substr(2, 9),
            name: name,
            email: email,
            subject: subject || 'No Subject',
            message: message,
            timestamp: new Date().toISOString(),
            status: 'new'
        };
        
        console.log('Creating DynamoDB record:', contactRecord);
        
        // Save to DynamoDB
        const params = {
            TableName: 'rishi-portfolio-contacts',
            Item: contactRecord
        };
        
        await dynamodb.put(params).promise();
        console.log('Successfully saved to DynamoDB');
        
        return {
            statusCode: 200,
            headers: headers,
            body: JSON.stringify({ 
                message: 'Thank you for your message! I will get back to you soon.',
                contactId: contactRecord.contactId
            })
        };
        
    } catch (error) {
        console.error('Error processing contact form:', error);
        return {
            statusCode: 500,
            headers: headers,
            body: JSON.stringify({ 
                error: 'Internal server error. Please try again later.',
                details: error.message
            })
        };
    }
};

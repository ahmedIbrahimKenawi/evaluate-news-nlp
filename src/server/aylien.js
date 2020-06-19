const dotenv = require('dotenv');
dotenv.config();

const AYLIENTextAPI = require('aylien_textapi');

const textapi = new AYLIENTextAPI({
    application_id: process.env.API_ID,
    application_key: process.env.API_KEY
});

const { promisify } = require('util');

const sentiment = promisify( textapi.sentiment.bind(textapi) )

async function nlp(url){
    let result;
    try {
        const res = await sentiment(url);
        result = JSON.stringify({
            type: 'response',
            polarity: res.polarity,
            subjectivity: res.subjectivity,
        })
    } catch (error) {
        console.log('ERROR =>',error);
        result = JSON.stringify({
            type: 'error',
            message: error.message
        })
    }

    return result;
}

module.exports = {nlp}




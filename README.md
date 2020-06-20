# Project Introduction - What You Will Build

We will build a web tool that allows users to run Natural Language Processing (NLP) on articles or blogs found on other websites. NLP is the ability of an application to understand the human language, written or oral.

You don't have to worry about NLP, because we will make use of an external api called Aylien to interact with their NLP system. This tool will help us classify the information available in the article, like whether the content is subjective (opinion) or objective (fact-based) and whether it is positive, neutral, or negative in tone.


## API

The project uses the Text Analysis SDKs from [aylien](https://aylien.com/text-api/sdks/), which provides a powerful and flexible AI-driven content analysis solutions.

First, you will need to sign up to get you an API key. 
Fill the .env file with your API keys like this:
```
API_ID=**************************
API_KEY=*************************
```

## Run project

#### clone this repository
install dependencies
```
$ npm install
```

#### run in development mode
To start the webpack dev server at port 8080
```
$ npm run build-dev
```

#### run in production mode
Generate the dist files and then start server at port 8081
```
$ npm run build-prod
$ npm run start
```

## Offline Functionality
The project have service workers set up in webpack to provide the offline functionality of our app. When the service worker is functioning correctly, you will see the below message when you inspect the browser.


## Testing

Testing is done with Jest. To run test, use the command 
```
npm run test
```

